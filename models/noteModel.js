const pool = require('../database/db')
const promisePool = pool.promise()

const addNote = async (text) => {
    try {
        const [rows] = promisePool.execute(
            'INSERT INTO note(content) VALUES(?)', [text]
        )
        console.log('ROWS: ' + rows)
        return {rows}
    } catch (e) {
        return {error: e.message}
    }
}

module.exports = {
    addNote
}