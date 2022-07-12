const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    username: {type: String, required: true},
    weight: {type: String, required: true},
    goal: {type: String, required: true}
})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo