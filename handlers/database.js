const mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var newUser = new Schema({
    author      : ObjectId,
    name        : String,
    username    : String,
    password    : String
})

module.exports.User = mongoose.model("users", newUser)