const express = require('express');

const router=express.Router();
const {singup,login}=require("../controller/auth")
router.post("/singup",singup)
router.post("/login",login)


module.exports=router;