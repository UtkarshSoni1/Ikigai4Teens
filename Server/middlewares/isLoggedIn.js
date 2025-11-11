// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
// const userModel = require('../models/user-model');
import userModel from '../models/userModel.js';

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const user = await userModel.findOne({email : decoded.email})
        .select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    req.user = user; 
    next();
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

export default isLoggedIn;