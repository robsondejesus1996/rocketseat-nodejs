import http from 'node:http'

//requisição e responsta
const server = http.createServer((req, res) =>{
    return res.end('Olá mundo')
})


server.listen(3333)
//localhost:3333



