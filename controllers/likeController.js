const Like = require('../models/likeModel');
const Post = require('../models/postModel');


exports.likePost = async(req , res) => {
    try{
        const { post , user } = req.body;
        const liked = new Like({
            post , user
        });
        const afterlike = await liked.save();
        const savedLike = await Post.findByIdAndUpdate(post, {$push :{likes:afterlike._id}}
            ,{new:true})

        res.json({
            post:savedLike,
        })
            
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while liking the post"

        })
    }
}

exports.unlikePost = async(req , res) => {
    try{
        const { post , like } = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post , _id:like});

        const updatedpost = await Post.findByIdAndUpdate(post ,{$pull:{likes:deletedLike._id}}
            ,{new:true})
        

        res.json({
            post:updatedpost,
        })
            
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while liking the post"

        })
    }
}