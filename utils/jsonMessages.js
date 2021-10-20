/**
 * Error json object.
 *
 * @param data {string, Array}
 * @return {Object}
 */
const jsonError = (data = 'Error happened') => {
    return {error: data}
}

/**
 * Success json object.
 *
 * @param data {string}
 * @return {Object}
 */
const jsonSuccess = (data) => {
    return {success: data}
}

module.exports = {
    jsonError,
    jsonSuccess
}