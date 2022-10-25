const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const courses =  require('./data/courses.json')
const categories =  require('./data/categories.json')

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/top-courses', (req, res) => {
    const topCourse = courses.filter(el => el.rating >= 4.7)
    res.status(200).json({
        status: 'success',
        topCourse
    })
})

app.get('/api/premium-courses', (req, res) => {
    const premiumCourses = courses.filter(el => el.isPremium === true)
    res.status(200).json({
        status: 'success',
        premiumCourses
    })
})

app.get('/api/courses', (req, res) => {
    res.status(200).json({
        status: 'success',
        courses
    })
})

app.get('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(el => el.id == id)
    res.status(200).json({
        status: 'success',
        course
    })
})

app.get('/api/categories', (req, res) => {
    res.status(200).json({
        status: 'success',
        categories
    })
})

app.get('/api/categories/:id', (req, res) => {
    const id = req.params.id;
    const category = categories.find(el => el.id == id)
    res.status(200).json({
        status: 'success',
        category
    })
})

app.get('/', (req, res) => {
    res.send('hello world')
})

module.exports = app