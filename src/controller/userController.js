/* Controlador responsável pela regra de negócio */
const crypto = require('crypto'); 
const connection = require('../database/connection'); 

module.exports = {
    async list(req, res){
        const users = await connection('users').select('*'); //Seleciona todos os usuários da tabela via connection ('await' obriga a esperar) 
        return res.json(users);
    },

    async show(req, res){
        const {id} = req.params; //Id vindo da requisição como objeto
        const user = await connection('users').where('id', id).select('*'); //Seleciona usuário pelo id via connection ('await' obriga a esperar)
        return res.json(user);
    },

    async create(req, res) { //Recebe requisição e envia resopsta 
        const { name, email, idade, empresa } = req.body; //Atribui a 'params' os parametros passados pelo corpo em json
        const id = crypto.randomBytes(4).toString('hex');
        await connection('users').insert({ //Isere no banco, através da conecção, os dados obtidos ('await' obriga a esperar)
            id,
            name,
            email,
            idade,
            empresa
        });
        return res.json({ id }); //Envia ID para confrimar inserção
    }, 

    async update(req, res){
        const { id } = req.params; //Id vindo da requisição como objeto
        const { name, email, idade, empresa } = req.body;
        await connection('users').where('id', id).update({ //Atualiza no banco, através da conecção, os dados obtidos ('await' obriga a esperar)
            id,
            name,
            email,
            idade,
            empresa
        });
        return res.status(204).send(); //Se der certo envia resposta de sucesso
    },

    async delete (req, res){
        const { id } = req.params; //Id vindo da requisição como objeto
        await connection('users').where('id', id).delete();  //Deleta usuário pelo id via connection ('await' obriga a esperar)
        return res.status(204).send();
    } 
}