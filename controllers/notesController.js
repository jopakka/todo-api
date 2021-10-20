const noteModel = require('../models/noteModel')

const addNote = async (req, _) => {
    await noteModel.addNote(req.body.note)
}

module.exports = {
    addNote
}