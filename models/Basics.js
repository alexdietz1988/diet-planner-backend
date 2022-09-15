const mongoose = require('mongoose')

const basicsSchema = new mongoose.Schema({
    user: {type: String, required: true},
    weight: {type: String, required: true, default: '0'},
    TDEE: {type: String, required: true, default: '0'},
    goal: {type: String, required: true, default: 'maintain'}
})

const Basics = mongoose.model('Basics', basicsSchema)

module.exports = Basics