const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');



const adminRecipes = require('./adminRecipes');
const adminChefs = require('./adminChefs');




// HOME
routes.get('/', HomeController.index);
routes.get('/about', HomeController.about);
routes.get('/recipes', HomeController.recipes);
routes.get('/recipes/:id', HomeController.details);
routes.get('/chefs', HomeController.chefs);
routes.get('/search', HomeController.search);


routes.use('/admin/recipes', adminRecipes);
routes.use('/admin/chefs', adminChefs);





// ALIAS


module.exports = routes;