const jsonError = (text = "Error happened") => {
    return {error: text}
}

module.exports = {
    jsonError
}