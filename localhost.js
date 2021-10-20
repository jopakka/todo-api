const http = require('http')

module.exports = (app, port) => {
    http.createServer(app).listen(port, () => console.log(`Localhost TODO-api is listening port ${port}`))
}