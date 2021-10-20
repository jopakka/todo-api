const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const {body, param, validationResult} = require('express-validator')

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({errors: errors.array()})
    next()
}

router.route('/')
    .post(
        body('content').not().isEmpty().trim().escape(),
        validate,
        notesController.addNote
    )

router.route('/:id')
    .get(
        param('id').trim().isInt().escape(),
        validate,
        notesController.getNote
    )
    .delete(
        param('id').trim().isInt().escape(),
        validate,
        notesController.deleteNote
    )

module.exports = router