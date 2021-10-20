const noteModel = require('../models/noteModel')

const addNote = async (req, res) => {
    const note = await noteModel.addNote(req.body.content)
    if(note['error'])
        return res.status(500).json(note)
    res.json(note)
}

module.exports = {
    addNote
}