const noteModel = require('../models/noteModel')

const addNote = async (req, res) => {
    const note = await noteModel.addNote(req.body.content)
    if(note['error'])
        return res.status(400).json(note)
    res.status(201).json(note)
}

const getNote = async (req, res) => {
    const note = await noteModel.getNote(req.params.id)
    if(note['error'])
        return res.status(400).json(note)
    res.status(201).json(note)
}

module.exports = {
    addNote,
    getNote
}