const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let basics = await db.Basics.findOne({ user: req.query.user })
        res.json(basics)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/', async (req, res) => {
    try {
        await db.Basics.findOneAndUpdate(req.params.user, req.body)
        res.json('success')
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router