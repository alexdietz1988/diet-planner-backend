const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        let newMeal = await db.Meal.create(req.body)
        res.json(newMeal)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router