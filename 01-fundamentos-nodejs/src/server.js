import http from 'node:http'

//requisição e responsta
const server = http.createServer((req, res) =>{
    return res.end('Hello world')
})


server.listen(3333)
//localhost:3333



