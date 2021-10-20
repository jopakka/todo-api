const pool = require('../database/db')
const promisePool = pool.promise()

const addNote = async (content) => {
    try {
        const [rows] = promisePool.execute(
            'INSERT INTO note(content) VALUES(?)', [content]
        )
        return rows
    } catch (e) {
        return {error: e.message}
    }
}

module.exports = {
    addNote
}