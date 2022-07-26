const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let userInfo = await db.UserInfo.findOne({username: req.query.username})
        res.json(userInfo)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/', async (req, res) => {
    try {
        await db.UserInfo.findOneAndUpdate(req.params.username, req.body)
        res.json('successfully updated user info')
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router