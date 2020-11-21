const express = require('express'); //Importa express
const routes = express.Router(); //Extrai apenas as rotas do express
const userController = require('./controller/userController'); //Exportação do Controlador para acesso ao banco

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

routes.get('/users', userController.list); //Usa métdo list (criado) do controlador 
routes.post('/users', userController.create); //Usa métdo create (criado) do controlador 
routes.get('/users/:id', userController.show); //Usa métdo show (criado) do controlador 
routes.put('/users/:id', userController.update); //Usa métdo update(criado) do controlador 
routes.delete('/users/:id', userController.delete); //Usa métdo delete(criado) do controlador 
module.exports = routes; //Exporta para ser acessado por outros scripts  