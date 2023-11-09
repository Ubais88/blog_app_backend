const express = require('express');
const router = express.Router();

const {createComment ,deleteComment} = require('../controllers/commentController')
const {likePost, unlikePost} = require('../controllers/likeController')
const {createPost , allPosts} = require('../controllers/postController')

router.post('/comment', createComment);
router.post('/deleteComment', deleteComment);
router.post('/createpost', createPost);
router.get('/allpost', allPosts);
router.post('/likePost', likePost);
router.post('/unlikePost', unlikePost);

module.exports = router;