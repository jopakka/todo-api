const jsonError = (text = "Error happened") => {
    return {error: text}
}

const jsonSuccess = (data = "") => {
    return {success: data}
}

module.exports = {
    jsonError,
    jsonSuccess
}