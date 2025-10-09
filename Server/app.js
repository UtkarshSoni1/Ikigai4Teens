// const express = require('express');
import express  from 'express';
// const cors = require('cors');
import cors from 'cors'
const app = express();
// import {userRegister} from './controllers/authControl.js';
import authControl from './controllers/authControl.js';
import connection from './config/DB-connection.js';
import isLoggedIn from './middlewares/isLoggedIn.js';
const port = process.env.port || 5000;

app.use(cors({
    origin: 'http://localhost:5173', // Change to your frontend URL if different
    credentials: true
}));
// Body parsers to populate req.body for JSON and form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.get('/',(req, res) => {
    res.send("Server  is live");
})

app.post('/signUp',authControl.userRegister);
app.post('/login',authControl.userLogin);
app.get('/chat',isLoggedIn,(req, res) => {
    
    res.send(`Welcome to the chat, ${req.user.name}`);
});
app.post('/logout', authControl.userLogout);
app.listen(port,()=>{
    console.log("Server is runnung");
    
})
