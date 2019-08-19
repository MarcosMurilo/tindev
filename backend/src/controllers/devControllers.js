// importando axios para fazer requisições em API´s externas
const axios = require('axios');

// importar model ---guardar no banco de dados 
const dev = require('../model/dev')
//
module.exports = {
    // listar varios registros dentro da tabela banco de dados
    async index(req, res) {
        //buscando o usuario logado
        const {user} = req.headers;

        const loggedDev = await dev.findById(user);

        const users = await dev.find({
            // $and aplica o operador AND de uma vez só
            $and: [
                { _id: { $ne:user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } },
            ],
        })

        return res.json(users);
    },

    async store(req, res) {

    const {username} = req.body;

    //verificando user repetido
    const userExists = await dev.findOne({ user: username});

    if (userExists) {
        return res.json(userExists);
    }
    
    // pegando o usuario na API do github
    // sempre q usar await informar q a função pe assíncrona
    const response =await axios.get(`https://api.github.com/users/${username}`);

    // pegar as informações do 'data' (resultado do github)
    // avatar_url: avatar ==> cria variável avatar, pois no resultado do 'DATA' vem avatar_url
    const {name, bio, avatar_url: avatar} = response.data;

    // await dev.create ===>passar as informações que estão na funçao devSchema em dev.js
    // const dev ===> cria variável dev
    const deve = await dev.create({
        name,
        user: username,
        bio,
        avatar

    })

    return res.json(deve);
    }

};

// dica de boas praticas
// usar somente os seguintes métodos:
// INDEX, SHOW, STORE, UPDATE, DELETE