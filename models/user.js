const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: String,
    password: { type: String, select: false }, // will not get sent when requesting user via api
    firstName: String,
    lastName: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);