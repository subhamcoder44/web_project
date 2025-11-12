const mongoose=require("mongoose")
const nodemailer=require("nodemailer");
require("dotenv").config();
const sendEmail=require("../utils/mailSender");
const OTPSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        
        required:true,      
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:300, // OTP expires in 5 minutes
    },
});
async function verivication( email,otp){
   try{
    const mailresponcese=await sendEmail(
       email,
       otp
    );
    console.log("mailresponcese")
    return mailresponcese;

   }
   catch(error){    
    throw error;
    }
    
};
    OTPSchema.pre('save', async function(next){
        
            await verivication(this.email,this.otp);
        
        next();
    }
)




const OTP=mongoose.model("OTP",OTPSchema);
module.exports=OTP;