const express = require("express")
const mongoose = require("mongoose")
const Post = require('./models/Post')
// Create the server instance
const app = express()

// this tells the server to only accept incoming data as JSON
app.use(express.json())

// connect to MongoDB 
mongoose.connect("mongodb://localhost:27017/post", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Luke :)"))
.catch((err) => console.log(err))

const PORT = 4000



app.get("/posts", function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            return res.status(500).json({error: err.message})
        }
        else return res.status(200).json({posts: posts})
    })
})

app.post('/posts', function(req, res) {
    const { id, title, body } = req.body
    console.log(req.body)
    const post = new Post({
        id: id,
        title: title,
        body: body,
    })
    console.log(post)
    post.save().then(savedPost => {
        res.status(200).json({msg: "Post saved"})
    })
        
    
})




app.listen(PORT, () => {
    console.log("Server Rolling down the Rhine")
})