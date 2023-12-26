import http from 'node:http'

// GET => BUSCA INFORMAÇÃO
// POST => CRIAR ALGUMA COISA
// PUT => EDITAR OU ATUALIZAR UM RECURSO(ATUALIZAR MUITAS COISAS AO MESMO TEMPO)
// PATCH => ATUALIZAR UMA INFORMAÇÃO ÚNICA OU ESPECÍFICA NO BACK-END 
// DELETE => DELETAR UM RECURSO DO BACK-END

const users = []

//requisição e responsta
const server = http.createServer((req, res) =>{

    const { method, url } = req

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'applications/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john@hotmail.com',

        })

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end('Roda Não Encontrada')
    
})


server.listen(3333)
//localhost:3333



