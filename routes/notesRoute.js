const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const {body, validationResult} = require('express-validator')

const validateBody = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({error: errors.array()})
    next()
}

router.route('/')
    .post(
        body('content').not().isEmpty().trim().escape(),
        validateBody,
        notesController.addNote
    )

module.exports = router