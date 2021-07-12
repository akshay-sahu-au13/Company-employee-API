require('dotenv').config();
const express = require('express');
const Router = express.Router();
const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

Router.get('/signup', async(req, res) => {
    try {
         let user = await User.findOne({email: req.body.email});

         if (user) {
             return res.json({message:"user already registered"});
         }

         user = new User({...req.body});

         await user.save();

         res.status(201).json({message: "User created successfully"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error", error: "Unknown error occured, couldn't signup" });
    }
});

Router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(404).json({message:"User not registered", error:"User not found"});
        }
        const pwdCheck = await bcrypt.compare(req.body.password, user.password);

        if (!pwdCheck) {
            return res.status(400).json({message:"Invalid password", error:"Wrong credentials"});
        }
        const isAdmin = user.role === "Admin" ? true : false;

        const token = await jwt.sign({id: user._id, email: user.email, isAdmin}, process.env.JWT_SECRET);

        res.status(200).json({message: "Logged in Successfully!", user, token});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error", error:"Unknown error occured, couldn't login"});
    };
});

module.exports = Router;