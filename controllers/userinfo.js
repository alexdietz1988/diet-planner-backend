const express = require('express')
const db = require('../models')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        let newUserInfo = await db.UserInfo.create(req.body)
        res.json(newUserInfo)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router