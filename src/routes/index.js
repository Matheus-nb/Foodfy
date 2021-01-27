const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');


const recipes = require('./recipes');



// HOME
routes.get('/', HomeController.index);
routes.get('/about', HomeController.about);



routes.use('/recipes', recipes);



// ALIAS


module.exports = routes;