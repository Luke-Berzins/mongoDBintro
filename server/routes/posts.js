const Post = require('../models/Post')


const getPosts = app.get("/posts", function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            return res.status(500).json({error: err.message})
        }
        else return res.status(200).json({posts: posts})
    })
})

export default getPosts 