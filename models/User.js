const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new mongoose.Schema({
    name : String,
    email : String
});

module.exports = mongoose.model('User', userSchema);