const express = require('express'); //Importão do pacote express
const app = express(); //Apicação usando express (inicializa)
app.use(express.json()); //Para reconhecer formato json na requisição

/**MÉTODOS:
 * GET: buscar/listar info no backend 
 * POST: criar info no backend 
 * PUT: alterar info no backend
 * DELETE: deletar info no backend
*/
/**PARÂMETROS:
 * QUERY:parâmetros nomeados enviados na rota 
 * ROUTE PARAMS: parâmetros utilizados para identificar um recurso
 * REQUEST BODY: corpo da requisição
 */

// app.get('/', (req, res)=>{ //1º pararâmetro indica um recurso, nesse caso raiz. (requisição, resposta)
//     res.send('Salve, truta!'); //Envia resposta em forma de mensagem 
// }); 

// app.get('/users', (req, res)=>{ //1º pararâmetro indica um recurso, nesse caso, url '/users'. (requisição, resposta)
//     res.json({ //Envia resposta em formato json
//         nome: 'BrunoB$',
//         empresa: 'UESB'
//     }); //Envia resposta em formato json
// }); 

app.get('/users', (req, res)=>{ //1º pararâmetro indica um recurso, nesse caso, url '/users'. (requisição, resposta)
    const params = req.query; //Atribui a 'params' os parametros que a url passa
    console.log(params); //Imprime parâmetros como 
    res.json(params); //Reenvia os parâmetros para a página como objeto
}); 

// app.post('/users/:id', (req, res)=>{ //Url espera receber o pararemtro 'id' (route params)
//     const params = req.params; //Atribui a 'params' os parametros passados por url
//     console.log(params); //Imprime parâmetros como 
//     res.json(params); //Reenvia os parâmetros para a página como objeto
// }); 

app.post('/users', (req, res)=>{ //Url espera receber o pararemtro 'id' (route params)
    const params = req.body; //Atribui a 'params' os parametros passados pelo corpo em json
    console.log(params); //Imprime parâmetros como 
    res.json(params); //Reenvia os parâmetros para a página como objeto
}); 

app.listen(3001); //Aplicação rodando na porta 3001
 
