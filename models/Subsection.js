const mongoose=require('mongoose');
const subsectionSchema=new mongoose.Schema({
title:{
    type:String,
    required:true,
    trim:true,
},
timeduration:{
    type:String,
    required:true,
},
videoUrl:{
    type:String,
    required:true,
},
discription:{
    type:String,
    required:true,
}

});
const Subsection=mongoose.model('Subsection',subsectionSchema);
module.exports=Subsection;
    