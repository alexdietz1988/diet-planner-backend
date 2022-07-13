const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        await db.UserInfo.create(req.body)
        res.json('successfully created user info')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let userInfo = await db.UserInfo.find({username: req.query.username})
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