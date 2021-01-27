const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');




// HOME
routes.get('/', HomeController.index);
routes.get('/about', HomeController.about);
routes.get('/recipes', HomeController.recipes);





// ALIAS


module.exports = routes;