const mongoose = require('mongoose')

const basicsSchema = new mongoose.Schema({
    user: {type: String, required: true},
    weight: String,
    TDEE: String,
    goal: String
})

const Basics = mongoose.model('Basics', basicsSchema)

module.exports = Basics