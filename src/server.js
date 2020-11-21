const express = require('express'); //Importão do modulo express
const routes = require('./routes'); //Importação do script 'routes'
const cors = require('cors'); //Importação da api cors
app.use(cors()); //Deste modo está com acesso liberado (Olhar documentção para limitar dominio)
const app = express(); //Apicação usando express (inicializa)
app.use(express.json()); //Para reconhecer formato json na requisição
app.use (routes);
app.listen(3001); //Aplicação rodando na porta 3001


//const sqlite3 = require('sqlite3').verbose(); //Impotação do SQLite (verbose para mostrar conexões e erros)

/*Criando Banco de Dados via script e testando conexão:*/
// let database = new sqlite3.Database(':memory:', (err)=>{ //SQLite usando memória
//     if(err){
//         return console.log(err.message); //Captura de erro
//     }
//     console.log("Conectado!");
// });

// let db = new sqlite3.Database('db.sqlite', (err)=>{ //SQLite usando arquivo
//     if(err){
//         return console.log(err.message); //Captura de erro
//     }
//     console.log("Conectado!");
// });

/**MANEIRAS DE ACESSO AO BANCO DE DADOS:
 * Driver: SELECT * FROM users; //Depende do Banco
 * Query Builders: table('users').select('*') //Independente do Banco (Notação JS)
 */