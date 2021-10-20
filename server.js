require('dotenv').config()
const express = require('express')
const app = express()
const notesRoute = require('./routes/notesRoute')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if(process.env.NODE_ENV === 'production')
    require('./production')(app, process.env.HTTP_PORT)
else
    require('./localhost')(app, process.env.HTTP_PORT)

app.use('/notes', notesRoute)