// Use official Google Generative AI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";
import Chat from "../models/chatModel.js";

// Define the system prompt for the Ikigai mentor
const systemPrompt = ` 
You are a friendly and encouraging AI mentor helping teens discover their Ikigai —
the intersection of what they love, what they're good at, what the world needs, and what they can be paid for.

CRITICAL INSTRUCTIONS:
1. Review the conversation history to determine which step the user is currently on.
2. Only move to the next step AFTER the user has completed the current step with a meaningful response.
3. Do NOT repeat steps that have already been completed.
4. If the user has answered a step's question, acknowledge their answer and move forward.
5. Use the user's earlier responses (what they love and what they're good at) to generate customized suggestions for later steps.
6. Maintain a friendly, positive, and age-appropriate tone throughout.

---

### Conversation Flow

1. Greeting  
   - If the user greets (hi, hey, hello):  
     Reply: "Hello {name}! Let's dive into your career journey."  
     → Move to Step 2.

2. Step 1: What You Love (Passion)  
   Ask: "Tell me a few things, skills, or hobbies that you truly love doing — things that make you happy or excited."  
   Wait for response, acknowledge warmly, and move to Step 2.

3. Step 2: What You're Good At (Strengths)  
   Ask: "Now list a few things you believe you're good at — they can be school subjects, creative skills, sports, or anything else."  
   Wait for response, encourage positively, then move to Step 3.

4. Step 3: Self-Rating  
   Ask: "Great! Now rate how good you think you are in each of these areas on a scale of 1 to 10."  
   Wait for response, acknowledge their self-assessment, then move to Step 4.

5. Step 4: AI-Generated Suggestions — “What the World Needs” and “What You Can Be Paid For”  
   - Use the user's passions and skills to suggest meaningful problems they could help solve (*what the world needs*)  
     and realistic, future-ready opportunities where those abilities could earn income (*what they can be paid for*).  
   - Example: if the user loves art and is good at design, suggest social awareness campaigns or digital media that pay creative professionals.  
   Then say:  
   "Based on what you love and what you're skilled at, here are a few areas the world needs help in — and ways you could be paid for using your strengths."  
   Present personalized suggestions clearly.  
   Then ask:  
   "How do these suggestions feel to you? Do any of them sound exciting or align with careers you'd like to pursue?"  
   Wait for feedback, then move to Step 5.

6. Step 5: Reflection and Selection  
   Ask: "From these suggestions or any ideas of your own, which career paths or fields would you love to explore or pursue more seriously?"  
   Wait for one or more selections, then move to Step 6.

7. Step 6: Career Guidance  
   Provide practical, age-appropriate guidance for the selected career(s):  
   - Explain what the career involves.  
   - Why it matters or fits their interests.  
   - How to start exploring it.  
   Then ask: "Would you like a step-by-step roadmap to learn the skills and prerequisites for this career?"
   then move to Step 7.

8. Step 7 (Optional): Roadmap Creation  
   If the user agrees, create a simple roadmap including:  
   - Key skills to learn  
   - Learning resources or beginner projects  
   - Short-term and long-term goals  
   End with: "Every step you take brings you closer to your purpose. Ready to keep going?"

---

### Behavior Rules

- Always stay encouraging, curious, and easy to understand.  
- Use relatable teen examples (e.g., gaming, design, content creation, coding, social causes, sustainability).  
- Never skip or merge steps.  
- Do not suggest careers until Step 5.  
- Redirect politely if the user goes off-topic.  
- Keep responses concise and focused on one question per step.
`;

// Initialize Google Gemini AI with configuration
// Use official Google Generative AI SDK
let genAI = null;

// Initialize genAI only if API key is available
if (process.env.GEMINI_API_KEY) {
  try {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("Google Generative AI initialized successfully");
    
    // Try to verify the API key works by listing models (optional, for debugging)
    // Uncomment the following lines to debug model availability
    /*
    (async () => {
      try {
        const models = await genAI.listModels();
        console.log("Available models:", models);
      } catch (err) {
        console.warn("Could not list models (this is okay):", err.message);
      }
    })();
    */
  } catch (error) {
    console.error("Failed to initialize Google Generative AI:", error);
  }
} else {
  console.warn("GEMINI_API_KEY not found in environment variables. AI features will not work.");
}

const AiResponse = async (req, res) => {
  try {
    console.log("Received chat request:", req.body);
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
        message: "Please provide a message to chat with AI",
      });
    }

    if (!process.env.GEMINI_API_KEY || !genAI) {
      console.error("GEMINI_API_KEY not found in environment variables or genAI not initialized");
      return res.status(500).json({
        error: "Configuration Error",
        message: "AI service is not properly configured. Please check GEMINI_API_KEY in environment variables.",
      });
    }

    // Include user's name in the system prompt
    const userName = req.user?.name || "there";
    const userSpecificPrompt = systemPrompt.replace(
      "{name}",
      userName
    );

    console.log("Sending prompt to Gemini with history length:", history?.length || 0);

    // Persist the incoming user message to the DB (create chat if needed)
    try {
      if (req.user && req.user._id) {
        await Chat.findOneAndUpdate(
          { user: req.user._id },
          { $push: { messages: { sender: 'user', text: message } } },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
      }
    } catch (persistErr) {
      console.error('Failed to persist user message:', persistErr);
      // Continue processing even if DB write fails
    }

    let result;

    try {
      // Try gemini-2.5-flash first, with fallbacks if needed
      const modelNames = ["gemini-2.5-flash", "gemini-2.0-flash-exp"];
      let model;
      let geminiResponse;
      let lastError = null;
      
      for (const modelName of modelNames) {
        try {
          console.log(`Attempting to use model: ${modelName}`);
          
          // Get the model with system instruction
          model = genAI.getGenerativeModel({ 
            model: modelName,
            systemInstruction: userSpecificPrompt
          });
          
          // If we have conversation history, use startChat for context
          if (history && history.length > 0) {
            console.log(`Using conversation history with ${history.length} messages`);
            
            // Format history for Gemini API
            // Gemini expects history in the format: [{ role: 'user', parts: [{ text: '...' }] }, { role: 'model', parts: [{ text: '...' }] }]
            const formattedHistory = history.map(msg => {
              // Ensure we have the correct format
              const role = msg.role || (msg.sender === 'user' ? 'user' : 'model');
              const text = msg.parts?.[0]?.text || msg.text || '';
              
              return {
                role: role,
                parts: [{ text: text }]
              };
            }).filter(msg => msg.parts[0].text.trim().length > 0); // Remove empty messages
            
            console.log(`Formatted history: ${formattedHistory.length} messages`);
            
            // Start a chat session with history
            const chat = model.startChat({
              history: formattedHistory
            });
            
            // Send the new message in the context of the chat
            geminiResponse = await chat.sendMessage(message);
          } else {
            // No history, use regular generateContent with system instruction
            console.log("No history, using single message generation");
            geminiResponse = await model.generateContent(message);
          }
          
          console.log(`Successfully using model: ${modelName}`);
          break; // Success, exit the loop
        } catch (modelError) {
          console.log(`Model ${modelName} failed:`, modelError.message);
          lastError = modelError;
          // Continue to try the next model in the list
          continue;
        }
      }
      
      if (!geminiResponse) {
        throw lastError || new Error("Failed to generate content with any available model");
      }
      
  console.log("Got response from Gemini");
      
      // Extract the text from the response
      const response = geminiResponse.response;
      result = response.text();
      
      if (!result || result.trim().length === 0) {
        throw new Error("Empty response received from Gemini API");
      }
      
      // Process markdown-style formatting
      result = result
        // Bold text with double asterisks
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic text with single asterisks
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Headers with ###
        .replace(/### (.*)/g, '<h3>$1</h3>')
        // Headers with ##
        .replace(/## (.*)/g, '<h2>$1</h2>')
        // Headers with #
        .replace(/# (.*)/g, '<h1>$1</h1>')
        // Bullet points
        .replace(/^\* (.*)/gm, '<li>$1</li>')
        // Convert newlines to <br> tags
        .replace(/\n/g, '<br>');
      
      console.log("Processed result length:", result.length, "chars");

      // Persist AI response to DB
      try {
        if (req.user && req.user._id) {
          await Chat.findOneAndUpdate(
            { user: req.user._id },
            { $push: { messages: { sender: 'ai', text: result } } },
            { new: true }
          );
        }
      } catch (persistErr) {
        console.error('Failed to persist AI response:', persistErr);
      }
    } catch (apiError) {
      console.error("Gemini API call error:", apiError);
      console.error("Error name:", apiError.name);
      console.error("Error message:", apiError.message);
      console.error("Full error:", JSON.stringify(apiError, Object.getOwnPropertyNames(apiError)));
      
      // Provide more helpful error message
      let errorMessage = apiError.message || apiError.toString();
      if (errorMessage.includes("model")) {
        errorMessage += ". Please check that the model name is correct and your API key has access to it.";
      }
      
      throw new Error(`Gemini API error: ${errorMessage}`);
    }

    res.json({
      response: result,
      formatted: true,
    });
  } catch (error) {
    console.error("AI Generation Error:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    if (error.message?.includes("API key")) {
      res.status(500).json({
        error: "AI service configuration error",
        message: "The AI service is not properly configured",
        details: error.message,
      });
    } else {
      res.status(500).json({
        error: "Failed to generate AI response",
        message: "The AI service is temporarily unavailable. Please try again.",
        details: error.message,
      });
    }
  }
};

export default AiResponse;
