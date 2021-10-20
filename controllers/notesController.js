const noteModel = require('../models/noteModel')

const addNote = async (req, res) => {
    console.log("ADD NOTE")
    const note = await noteModel.addNote(req.body.content)
    res.json(note)
}

module.exports = {
    addNote
}