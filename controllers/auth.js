const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const db = require('../models')

router.post('/signup', async (req, res) => {
    try {
        let user = req.body.username
        const foundUser = await db.User.exists({username: user})
        if (foundUser) return res.json('user already exists')

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await db.User.create(req.body)
        await db.Basics.create({username: user})
        return res.json('success')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        let user = req.body.username
        const foundUser = await db.User.findOne({ username: user })
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if(!match) return res.json('invalid username or password')
        return res.json('success')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.json(error)
    }
})

module.exports = router