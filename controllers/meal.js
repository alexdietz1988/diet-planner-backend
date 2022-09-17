const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        await db.Meal.create(req.body)
        return res.json({ success: true })
    } catch (error) {
        return res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let meals = await db.Meal.find({user: req.query.user})
        return res.json({ success: true, meals })
    } catch (error) {
        return res.status(400).json(error)
    }
})

router.get('/fetch-meal', async (req, res) => {
    try {
        let meal = await db.Meal.findById(req.query.id)
        if (!meal) return res.json({ success: false })
        return res.json({ success: true, meal})
    } catch (error) {
        return res.status(400).json(error)
    }
})

router.put('/', async (req, res) => {
    try {
        await db.Meal.findByIdAndUpdate(req.query.id, req.body)
        return res.json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, error})
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.Meal.findByIdAndDelete(req.query.id)
        return res.json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, error})
    }
})

module.exports = router