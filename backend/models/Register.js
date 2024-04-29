const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    user_name: String,
    first_name: String,
    last_name: String,
    email: String,
    mobile: Number,
    password: String
})

const RegisterModel = mongoose.model("users",RegisterSchema);
module.exports = RegisterModel;