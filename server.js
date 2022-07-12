const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, you have reached the Diet Planner backend')
})

app.listen(PORT, () => console.log('listening on PORT ' + PORT))