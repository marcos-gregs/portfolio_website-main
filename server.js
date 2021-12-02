// import bibliotecas.
const express = require('express');
const path = require('path');

// Para enviar os emails
const nodemailer =require('nodemailer');

// O env é para fazer variaveis de ambiente.
const dotenv = require('dotenv')

// Inicializando utilizando env.config
dotenv.config();

// Armazenando o caminho da pasta publica em uma variavel.
let initialPath = path.join(__dirname,"public");

// Server chamando a função express.
let app = express();

// usando o app para um caminho estatico,da pasta public
app.use(express.static(initialPath));

// usando um methodo app no json,habilitando os dados do formulario compartilhado
app.use(express.json());

//Adicionando uma rota inicial, resposta e enviar arqu,via index.html 
app.get('/',(req,res) =>{
    res.sendFile(path.join(initialPath,"index.html"));
})

// Solicitaçãode postagem para enviar o email
app.post('/mail', (req,res)=> {
    const{firstname, lastname, email, msg}= req.body;
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })


//Estrutura do email.
    const mailOptions={
    from: 'enter sender email here',
    to: 'enter reciever email here',
    subject:'Portfólio',
    text:`First name: ${firstname}, \nLast name: ${lastname}, \nEmail:${email}, \nMessage: ${msg}`
    } 

// Utilizando o methodo transporte para solicitar o envio Email e verificando se tem algum erro
    transporter.sendMail(mailOptions,(err,result)=>{
    if(err){
        console.log(err);
        res.json('opss! it seems like some error occured plz.try again.')
    } else{
        res.json('thanks for e-mailing me.I will reply to you within 2 working days')
    }
    })
})
// configurando a porta
    app.listen('3000',() =>{
    console.log('listening....')
})

// Para iniciar digite "npm start",no terminal integrado.