const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        let newMeal = await db.Meal.create(req.body)
        res.json('successfully added meal')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let meals = await db.Meal.find({username: req.query.username})
        res.json(meals)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/', async (req, res) => {
    try {
        console.log(req.query.id)
        await db.Meal.findByIdAndUpdate(req.query.id, req.body)
        res.json('successfully updated meal')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.Meal.findByIdAndDelete(req.query.id)
        res.json('successfully deleted meal')
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router