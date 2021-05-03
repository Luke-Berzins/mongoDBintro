const http = require('http')
const { Server } = require('node:http')

const PORT = 3000


http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

