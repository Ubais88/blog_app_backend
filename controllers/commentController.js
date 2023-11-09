const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async(req , res) => {
    try{
        const {post , user , body} = req.body;

        const comment  = new Comment({
            post , user , body
        });

        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comment : savedComment._id}}, {new: true}).populate("comment").exec();

        res.json({
            post:updatedPost,
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while creating comment"

        })
    }
}


exports.deleteComment = async(req , res) => {
    try{
        const {post , comment } = req.body;
        const deleteComment = await Comment.findByIdAndDelete({post:post , _id:comment});
        console.log("deleteComment: ",deleteComment)
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull :{comment:deleteComment._id}})
        console.log("updatedPost : ",updatedPost)

        res.json({post:updatedPost})

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while deleting comment"

        })
    }
}