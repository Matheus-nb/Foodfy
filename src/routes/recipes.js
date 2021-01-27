const express = require('express');
const routes = express.Router();

const RecipesController = require('../app/controllers/RecipesController');




routes.get('/', RecipesController.ShowAll);
routes.get('/:index', RecipesController.ShowDetails);









module.exports = routes;