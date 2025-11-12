const { json } = require("express");
const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
require("dotenv").config();
exports.singup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).json({
        success: false,
        message: "User already exists",
      });
    }
    let hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
   console.log(error);
   return res.status(500).json({
      success:false,
      message:"internal error !",
      error:error.message
   })
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;
  try {
  if (!email||!password)
  {
    return res.status(500).josn({
      success:false,
      message:"fill all the blank"
    })
  }
  
    const findmail=await User.findOne({email});
    if(!findmail)
    {
      return res.status(500).json({
        success:false,
        message:"user not exists please login !"


      })
    }
    let payload={
      email:findmail.email,
      _id:findmail._id,
      role:findmail.role


    };
    if(await bcrypt.compare(password,findmail.password)){
      let token=jwt.sign(payload,process.env.JWT_SECRET,
        {expiresIn:"2h"})

 const userResponse = findmail.toObject ? findmail.toObject() : findmail;
    userResponse.token = token;
    delete userResponse.password;


      console.log(findmail)
        res.cookie("token",token).status(200).json({
        success:true,
        message:"user logedin successfully",
        token,
        userResponse
      })
      return;
    }
      else{
        console.log("Invalid credentials")
         
      return res.status(400).json({
       
        success:false,
        message:"Invalid credentials"
      })
      }



   
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

