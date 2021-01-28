const express = require('express');
const routes = express.Router();

const RecipesController = require('../app/controllers/RecipesController');



routes.get('/', RecipesController.Index);
routes.get('/create', RecipesController.Create);
routes.get('/:id', RecipesController.Show);
routes.get('/:id/edit', RecipesController.Edit);



routes.post("/", RecipesController.Post); // Cadastrar nova receita
routes.put("/", RecipesController.Put); // Editar receita
routes.delete("/", RecipesController.Delete); // Deletar uma receita


module.exports = routes;