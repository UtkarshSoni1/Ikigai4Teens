import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: String, enum: ['user', 'ai'], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  messages: { type: [messageSchema], default: [] }
}, { timestamps: true });

const Chat = mongoose.model('chats', chatSchema);

export default Chat;
