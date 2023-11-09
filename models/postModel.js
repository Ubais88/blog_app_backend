const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comment: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }
})


module.exports = mongoose.model("Post", postSchema)