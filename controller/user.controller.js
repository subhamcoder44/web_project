const userService=require('../models/users.model');


module.exports.userregister=async(req,res,next)=>{
  
    const {username,email,password}=req.body;
    try{
       
    }
    catch(error){
        next(error);
    }
    
}    
