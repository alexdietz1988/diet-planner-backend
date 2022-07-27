const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    username: {type: String, required: true},
    weight: {type: String},
    TDEE: {type: String},
    goal: {type: String}
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo