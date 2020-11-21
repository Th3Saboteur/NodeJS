const knexfile = require("../../knexfile")

const knex = require('knex');
const config = require('../../knexfile'); //'../' volta em relção ao diretorio raiz

connection = knex(config.development); //Pega config de developmen no arquivo para acessar 'db.sqlite'

module.exports= connection; //Exporta para ser acessado por outros scripts  