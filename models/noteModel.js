const pool = require('../database/db')
const promisePool = pool.promise()
const {jsonError, jsonSuccess} = require('../utils/jsonMessages')

const addNote = async (text) => {
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO note(content) VALUES(?)', [text]
        )
        const {insertId} = rows
        return await getNote(insertId)
    } catch (e) {
        return jsonError()
    }
}

const getNote = async (id) => {
    try {
        const [rows] = await promisePool.execute(
            'SELECT * FROM note WHERE id = ?', [id]
        )
        return rows[0] ? rows[0] : jsonError(`No note with id: ${id}`)
    }
    catch (e) {
        return jsonError()
    }
}

const deleteNote = async (id) => {
    try {
        const [rows] = await promisePool.execute(
            'DELETE note FROM note WHERE id = ?', [id]
        )
        const {affectedRows} = rows
        return affectedRows !== 0
            ? jsonSuccess(`Note with id: ${id} deleted successfully`)
            : jsonError(`No note with id: ${id}`)
    }
    catch (e) {
        return jsonError()
    }
}

const updateNote = async (id, text) => {
    try {
        const [rows] = await promisePool.execute(
            'UPDATE note SET content = ? WHERE id = ?', [text, id]
        )
        const {affectedRows} = rows
        return affectedRows !== 0 ? await getNote(id) : jsonError()
    }
    catch (e) {
        return jsonError()
    }
}

module.exports = {
    addNote,
    getNote,
    deleteNote,
    updateNote
}