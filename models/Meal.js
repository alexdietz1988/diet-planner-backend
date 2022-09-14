const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    user: {type: String, required: true},
    name: {type: String, required: true},
    calories: {type: String, required: true},
    protein: {type: String, required: true}
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal