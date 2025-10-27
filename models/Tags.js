const mongoose=require('mongoose');
const tagsSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,
},
discription:{
    type:String,
    required:true,
    trim:true,
},
course:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Course',
}
});
const Tags=mongoose.model('Tags',tagsSchema);
module.exports=Tags;