//importa o express
const express = require('express');

// importa o mongosse que simplifica/converte para linguagem SQL
const mongoose = require('mongoose');

// importando o 'cors', permite que a aplicaçao seja acessada de fora
const cors = require('cors');

// importar as rotas
// sempre passar o caminho para o arquivo (ex:./path/routes)
const routes  = require('./routes');

// express é uma funçao que basicamente cria um novo servidor(porta de entrada)
const server = express();

// faz a conexão com o banco de dados
mongoose.connect('mongodb+srv://muriloAdm:janeiro08@cluster0-kqtnw.mongodb.net/appDev?retryWrites=true&w=majority', {useNewUrlParser: true});

//
server.use(cors());
// para o 'express' entender o JSON
server.use(express.json());

// add mudulos/plugins etc no server
server.use(routes)

// ativa uma porta para ouvir as requisições
server.listen(3333);

