const express = require('express');
const routes = express.Router();

const ChefsController = require('../app/controllers/ChefsController');



routes.get('/', ChefsController.Index);
routes.get('/create', ChefsController.Create);
routes.get('/:id', ChefsController.Details);
routes.get('/:id/edit', ChefsController.Edit);



routes.post("/", ChefsController.Post); // Cadastrar nova receita
routes.put("/", ChefsController.Put); // Editar receita
routes.delete("/", ChefsController.Delete); // Deletar uma receita


module.exports = routes;