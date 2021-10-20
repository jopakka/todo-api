const pool = require('../database/db')
const promisePool = pool.promise()
const {jsonError} = require('../utils/jsonMessages')

const addNote = async (text) => {
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO note(content) VALUES(?)', [text]
        )
        return rows
    } catch (e) {
        return jsonError()
    }
}

const getNote = async (id) => {
    try {
        const [rows] = await promisePool.execute(
            'SELECT * FROM note WHERE id = ?', [id]
        )
        return rows[0] ? rows[0] :jsonError(`No note with id: ${id}`)
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
        return rows
    }
    catch (e) {
        return jsonError()
    }
}

module.exports = {
    addNote,
    getNote,
    deleteNote
}