const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('wellcom to home page ')
    }
    if (req.url==='/about'){
        res.end("wellcom to about page ")
    }
    res.end(`<h1>OPPs ! </h1>
    <a href="/">back to home page </a>
    `)
})
server.listen(106)