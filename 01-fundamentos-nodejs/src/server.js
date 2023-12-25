import http from 'node:http'

// GET => BUSCA INFORMAÇÃO
// POST => CRIAR ALGUMA COISA
// PUT => EDITAR OU ATUALIZAR UM RECURSO(ATUALIZAR MUITAS COISAS AO MESMO TEMPO)
// PATCH => ATUALIZAR UMA INFORMAÇÃO ÚNICA OU ESPECÍFICA NO BACK-END 
// DELETE => DELETAR UM RECURSO DO BACK-END

//requisição e responsta
const server = http.createServer((req, res) =>{

    const { method, url } = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de users')
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de Usuários')
    }


    return res.end('Hello World')
    
})


server.listen(3333)
//localhost:3333



