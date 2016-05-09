'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

    text: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;