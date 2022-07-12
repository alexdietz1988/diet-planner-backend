const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection
    .on('open', () => console.log('MongoDB connected'))
    .on('close', () => console.log('MongoDB disconnected'))
    .on('error', (error) => console.log('MongoDB connection error', error))