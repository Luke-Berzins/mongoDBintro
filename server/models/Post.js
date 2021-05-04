const express = require('express')
const { Mongoose } = require('mongoose')

// schema

const PostSchema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String,
})

module.exports = mongoose.model("Post", PostSchema)