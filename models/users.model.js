const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            minlength:8,
            trim:true,
            seclect:false
        },
        role:{
            type:String,
            enum:['admin','user'],
            default:'user'
        }
    },
    {
        timestamps:true
    }
)


const User=mongoose.model('User',userSchema);
module.exports=User;