import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const AiResponse = async (req, res) => {
    const { message } = req.body;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message,
    });
    let result = response.text;
    result = result
      .trim()                              // Remove leading/trailing whitespace
      .replace(/\n{3,}/g, '\n\n')         // Replace 3+ newlines with 2
      .replace(/\s+$/gm, '')               // Remove trailing spaces from each line
      .replace(/^\s+/gm, '')               // Remove leading spaces from each line
      .replace(/\*\*\*+/g, '**');          // Normalize bold markers
    res.json({ 
      response: result,
      formatted: true 
    });
}

export default AiResponse;