const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    username: {type: String, required: true},
    weight: String,
    TDEE: String,
    goal: String
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo