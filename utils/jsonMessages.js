/**
 *
 * @param data {string, Array}
 * @return {{error}}
 */
const jsonError = (data = 'Error happened') => {
    return {error: data}
}

/**
 *
 * @param data {string}
 * @return {{success}}
 */
const jsonSuccess = (data) => {
    return {success: data}
}

module.exports = {
    jsonError,
    jsonSuccess
}