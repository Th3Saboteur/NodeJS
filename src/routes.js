const express = require('express'); //Importa express
const crypto = require('crypto'); 
const connection = require('./database/connection'); 
const routes = express.Router(); //Extrai apenas as rotas do express

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

// routes.get('/users', (req, res)=>{ //1º pararâmetro indica um recurso, nesse caso, url '/users'. (requisição, resposta)
//     const params = req.query; //Atribui a 'params' os parametros que a url passa
//     console.log(params); //Imprime parâmetros como 
//     res.json(params); //Reenvia os parâmetros para a página como objeto
// }); 

// routes.post('/users/:id', (req, res)=>{ //Url espera receber o pararemtro 'id' (route params)
//     const params = req.params; //Atribui a 'params' os parametros passados por url
//     console.log(params); //Imprime parâmetros como 
//     res.json(params); //Reenvia os parâmetros para a página como objeto
// }); 

routes.get('/users', async(req, res)=>{
    const users = await connection('users').select('*'); //Seleciona todos os usuários da tabela via connection (espera)
    res.json(users);
});

routes.post('/users', async(req, res)=>{ //Conecção Assincrona (caso demore)
    const {name, email, idade, empresa} = req.body; //Atribui a 'params' os parametros passados pelo corpo em json
    const id = crypto.randomBytes(4).toString('hex');
    await connection('users').insert({ //Isere no banco, através da conecção, os dados obtidos ('await' obriga a esperar)
        id,
        name, 
        email,
        idade, 
        empresa
    });
    res.json({id}); //Envia ID para confrimar inserção
});

module.exports = routes; //Exporta para ser acessado por outros scripts  