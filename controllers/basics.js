const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let basics = await db.Basics.findOne({ user: req.query.user })
        res.json({ success: true, basics })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
})

router.put('/', async (req, res) => {
    try {
        await db.Basics.findOneAndUpdate(req.params.user, req.body)
        res.json({ success: true })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
})

module.exports = router