'use strict';

var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({

    image: { type: String},
    bio: { type: String},
    hobbies: { type: String},
    dead: { type: String}

});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;