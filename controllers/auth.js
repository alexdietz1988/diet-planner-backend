const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const db = require('../models')

router.post('/signup', async (req, res) => {
    try {
        const foundUser = await db.User.exists({username: req.body.username})
        if (foundUser) return res.json('user already exists')

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await db.User.create(req.body)
        await db.UserInfo.create({username: req.body.username, weight: ' ', goal: ' '})
        return res.json('user created')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        await db.UserInfo.create(req.body)
        res.json('successfully created user info')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ username: req.body.username })
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if(!match) return res.json('invalid username or password')
        return res.json('successfully logged in')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

module.exports = router