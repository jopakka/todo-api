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
    res.status(200).json(note)
}

const deleteNote = async (req, res) => {
    const note = await noteModel.deleteNote(req.params.id)
    if(note['error'])
        return res.status(400).json(note)
    res.status(200).json(note)
}

const updateNote = async (req, res) => {
    const note = await noteModel.updateNote(req.params.id, req.body.content)
    if(note['error'])
        return res.status(400).json(note)
    res.status(200).json(note)
}

module.exports = {
    addNote,
    getNote,
    deleteNote,
    updateNote
}