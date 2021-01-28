const express = require('express');
const routes = express.Router();

const HomeController = require('../app/controllers/HomeController');


const recipes = require('./recipes');
const admin = require('./admin');



// HOME
routes.get('/', HomeController.index);
routes.get('/about', HomeController.about);



routes.use('/recipes', recipes);
routes.use('/admin/recipes', admin);




// ALIAS


module.exports = routes;