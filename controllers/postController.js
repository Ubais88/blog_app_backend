const Post = require('../models/postModel')


exports.createPost = async(req ,res) => {
    try{
        const {title , body} = req.body;
        const post = new Post({
            title , body,
        })

        const savedPost = await post.save();

        res.json({
            post:savedPost,
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while creating post"

        })
    }
}



exports.allPosts = async(req , res) => {
    try{
        const posts = await Post.find({})
        .populate('likes')
        .populate('comment').exec()
        res.json({
            post:posts
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            error : "error while fetching all post"

        })
    }
}