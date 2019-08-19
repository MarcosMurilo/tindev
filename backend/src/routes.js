// importar o "express"
const express = require('express');

// refencia pasta controllers/devControllers
const devControllers = require('./controllers/devControllers');

//
const likeController = require('./controllers/likeController');

// importando dislike
const dislikeController = require('./controllers/dislikeController');

// criar um objte especifico para rotas
const routes = express.Router();

// buscar os dev que ainda nao foi dado MATCH  
routes.get('/devs', devControllers.index); 
//
routes.post('/devs', devControllers.store);

// like no usuario
routes.post('/devs/:devId/likes', likeController.store);
// deslike no usuario
routes.post('/devs/:devId/dislikes', dislikeController.store); 
// exportar um informação/alguma coisa
module.exports = routes;
// GET, POST, PUT, DELETE
// GET => busca informação na API
// POST => criar um tipo de registro/entidade
// PUT => editar...
// DELELTE => deletar...
/*
routes.get('/', (req, res) => {
    return res.json({messsage: `Oii... ${req.query.name}`});
});
*/
//
