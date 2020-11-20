const express = require('express'); //Importão do pacote express
const app = express(); //Apicação usando express (inicializa)
app.get('/', (req, res)=>{ //'/' indica url raiz. (requisição, resposta)
    res.send('Salve, truta!'); //Envia resposta 
}); 
app.listen(3001); //Aplicação rodando na porta 3001
/*Comando "node server.js" na pasta via terminal começa a servir a aplicação. "localhost:3001" no navegador para rodar.
'Ctrl + c' no terminal para o servidor. 
Comando "npm install -D nomemon" evitar ter que reiniciar o servidor no modo desenvolvedor. Para isso, adicionar ""scripts":{
    "dev": "nodemon server.js"
  }," em "package.json" e chamar como "npm run dev" no terminal*/

