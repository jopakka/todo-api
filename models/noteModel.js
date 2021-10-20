const pool = require('../database/db')
const promisePool = pool.promise()
const {jsonError, jsonSuccess} = require('../utils/jsonMessages')

/**
 * Adds new note to database.
 *
 * @param text {String} Content for note
 * @return {getNote|jsonError} Created note or error object
 */
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

/**
 * Get note with ID.
 *
 * @param id {number} ID of note
 * @return {Object|jsonError} Note object or error object
 */
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

/**
 * Deletes note with ID.
 *
 * @param id {number} ID of note
 * @return {jsonSuccess|jsonError} Success object or error object
 */
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

/**
 * Updates note with given ID.
 *
 * @param id {number} ID of note
 * @param text {string} New content for note
 * @return {getNote|jsonError} Updated note or error object
 */
const updateNote = async (id, text) => {
    try {
        const [rows] = await promisePool.execute(
            'UPDATE note SET content = ? WHERE id = ?', [text, id]
        )
        const {affectedRows} = rows
        return affectedRows !== 0 ? await getNote(id) : jsonError(`No note with id: ${id}`)
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