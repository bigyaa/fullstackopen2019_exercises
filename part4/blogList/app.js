const {PORT, MONGODB_URL} = require('./utils/config');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const {requestLogger, unknownEndpoint, errorHandler} = require('./utils/middleware')
const mongoose = require('mongoose')

const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

console.log('connecting to', MONGODB_URL)

mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
// app.use(express.static('build'))
app.use(bodyParser.json())
app.use(requestLogger)

app.get('/', (request, response) => {
    response.json("Works")
});

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app;