const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

let filePath
let statusCode = 200

switch (req.url) {
    case '/':
        filePath = 'index.html'
        break

    case '/about':
        filePath = 'about.html'
        break

    case '/contact-me':
        filePath = 'contact-me.html'
        break

    default:
        filePath = '404.html'
        statusCode = 404
}

fs.readFile(filePath, (err, data) => {
    if(err) {
        res.writeHead(500, { 'Content-Type': 'text/html'})
        res.end('Server error')
        return
    }
    res.writeHead(statusCode, {'Content-Type': 'text/html'})
    res.end(data)
})

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080')
})

})
