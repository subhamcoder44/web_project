const mongoose=require('mongoose');
const sectionShema= new mongoose.Schema({
    sectionName:{
        type:String,
        required:true
    },
    subsection:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subsection',
    }],
});
const section =mongoose.model('section',sectionShema);
module.exports=section;