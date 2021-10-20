const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')

router.route('/')
    .post(notesController.addNote)

module.exports = router