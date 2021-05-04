const express = require("express")
const mongoose = require("mongoose")

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



const getPosts = app.get("/posts", function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            return res.status(500).json({error: err.message})
        }
        else return res.status(200).json({posts: posts})
    })
    console.log("hi")
})








app.listen(PORT, () => {
    console.log("Server Rolling down the Rhine")
})