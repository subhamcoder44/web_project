const mongoose= require('mongoose');
const RatingAndReniewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:'User',
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    },
    rating:{    
        type:Number,

        required:true,
    },
    review:{
        type:String,
        required:true,
        trim:true,
    }
});
const RatingAndReniew=mongoose.model('RatingAndReniew',RatingAndReniewSchema);
module.exports=RatingAndReniew;