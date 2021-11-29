// import bibliotecas.
const express = require('express');
const path = require('path');
// Armazenando o caminho da pasta publica em uma variavel.
let initialPath = path.join(__dirname,"public");
// Server chamando a função express.
let app = express();
// usando o app para um caminho estatico,da pasta public
app.use(express.static(initialPath));
//Adicionando uma rota inicial, resposta e enviar arqu,via index.html 
app.get('/',(req,res) =>{
    res.sendFile(path.join(initialPath,"index.html"));
})
// configurando a porta
app.listen('3000',() =>{
    console.log('listening....')
})

// Para iniciar digite "npm start",no terminal integrado.