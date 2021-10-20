require('dotenv').config()
const express = require('express')
const app = express()
const itemsRoute = require('./routes/items')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if(process.env.NODE_ENV === 'production')
    require('./production')(app, process.env.HTTP_PORT)
else
    require('./localhost')(app, process.env.HTTP_PORT)

app.use('/items', itemsRoute)