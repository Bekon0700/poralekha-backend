const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const courses =  require('./data/courses.json')

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.get('/api/courses', (req, res) => {
    res.json({
        status: 'success',
        courses
    })
})

app.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = app