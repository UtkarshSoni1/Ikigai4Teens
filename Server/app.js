// const express = require('express');
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authControl from './controllers/authControl.js';
import connection from './config/DB-connection.js';
import isLoggedIn from './middlewares/isLoggedIn.js';
import AiResponse from './config/GenAiConfig.js';
import Chat from './models/chatModel.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Body parsers to populate req.body for JSON and form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connection();

app.get('/',(req, res) => {
    res.send("Server  is live");
})

app.post('/signUp',authControl.userRegister);
app.post('/login',authControl.userLogin);
app.get('/chat', isLoggedIn, async (req, res) => {
    try {
        const chat = await Chat.findOne({ user: req.user._id });
        return res.json({ success: true, user: { name: req.user.name }, chat: chat?.messages || [] });
    } catch (err) {
        console.error('Failed to fetch chat history:', err);
        return res.status(500).json({ success: false, message: 'Failed to fetch chat history' });
    }
});

// Protected chat endpoint for AI interactions
app.post('/chat', isLoggedIn, AiResponse);
app.post('/logout', authControl.userLogout);

// Add profile endpoint to get user data
app.get('/user/profile', isLoggedIn, (req, res) => {
    res.json({
        success: true,
        user: {
            userId: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
