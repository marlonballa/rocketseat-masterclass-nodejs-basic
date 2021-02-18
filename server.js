const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, resp) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)
    if (!allowed) return 

       fs.readFile( filePath, (error, content) => {
            if (error) throw error
            resp.end(content)
        }) 
}).listen(5000, () => console.log("Server is running"))