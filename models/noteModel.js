const pool = require('../database/db')
const promisePool = pool.promise()

const addNote = async (text) => {
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO note(content) VALUES(?)', [text]
        )
        return rows
    } catch (e) {
        return {error: e.message}
    }
}

const getNote = async (id) => {
    try {
        const [rows] = await promisePool.execute(
            'SELECT * FROM note WHERE id = ?', [id]
        )
        return rows[0] ? rows[0] : {error: `No note with id: ${id}`}
    }
    catch (e) {
        return {error: e.message}
    }
}

module.exports = {
    addNote,
    getNote
}