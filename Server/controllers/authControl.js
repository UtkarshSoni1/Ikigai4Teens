import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "./generateToken.js";

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const Createduser = await userModel.create({
      name,
      email,
      password: hash,
    });

    const token = await generateToken(Createduser);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 1000 // 1 hour
    });
    res.status(200).json({
          success: true,
          message: "Signup successful",
          user: {
            userId: Createduser._id,
            email: Createduser.email,
            name: Createduser.name,
            token: token,
          },
        });
  } catch (err) {
    const isDuplicateEmail = err?.code === 11000 && err?.keyPattern?.email;
    res.status(isDuplicateEmail ? 409 : 500).json({
      success: false,
      message: isDuplicateEmail ? "Email is already registered" : "Signup failed: " + err.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found, please register",
      });
    }
    await bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Login failed. Please try again.",
        });
      }
      if (result) {
        const token = generateToken(user);
        // THIS IS THE FIX - Add cookie options
        res.cookie("token", token, {
          httpOnly: true,        // Prevents client-side JS access
          secure: false,         // false for localhost, true for production HTTPS
          sameSite: 'lax',       // 'lax' for localhost, 'none' for cross-domain
          path: '/',             // Cookie available across site
          maxAge: 60 * 60 * 1000 // 1 hour (matches JWT expiry)
        });
        res.status(200).json({
          success: true,
          message: "Login successful",
          user: {
            userId: user._id,
            email: user.email,
            name: user.name,
            token: token,
          },
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Email or password incorrect",
        });
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Login failed: " + err.message,
    });
  }
};
const userLogout = async (req, res) => {
  try {
    // Clear the cookie with the SAME options used when setting it
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,      // Must match login cookie settings
      sameSite: 'lax',    // Must match login cookie settings
      path: '/'           // Must match login cookie settings
    });

    res.status(200).json({
      success: true,
      message: "Logout successful"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Logout failed: " + err.message
    });
  }
};



export default { userLogin, userRegister, userLogout};
