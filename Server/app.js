// const express = require('express');
import express  from 'express';
// const cors = require('cors');
import cors from 'cors'
const app = express();
// import {userRegister} from './controllers/authControl.js';
import authControl from './controllers/authControl.js';
import connection from './config/DB-connection.js';
const port = process.env.port || 5000;

app.use(cors());
// Body parsers to populate req.body for JSON and form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.get('/',(req, res) => {
    res.send("Server  is live");
})

app.post('/signUp',authControl.userRegister);
app.post('/login',authControl.userLogin);

app.listen(port,()=>{
    console.log("Server is runnung");
    
})
