const noteModel = require('../models/noteModel')

const addNote = async (req, res) => {
    const note = await noteModel.addNote(req.body.content)
    res.json(note)
}

module.exports = {
    addNote
}