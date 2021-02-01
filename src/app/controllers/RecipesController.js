const { dbArrayFix, arrayFix} = require('../../lib/utils');


const db = require('../../config/db');
const Chefs = require('../models/Chefs');
const Recipes = require('../models/Recipes');



module.exports = {
    async Index(req,res) {
        const recipes = await Recipes.findAll("")
        const chefs = await Chefs.findAll("")
        
        return res.render("recipes/index", { recipes, chefs })
    },

    async Create(req,res) {
        const chefs = await Chefs.findAll("");
        return res.render("recipes/create", { chefs });
    },

    async Edit (req, res) {
        const { id } = req.params
        const recipe = await Recipes.find(id)
        const chefs = await Chefs.findAll("");

        recipe.ingredients =  dbArrayFix(recipe.ingredients)
        recipe.preparation =  dbArrayFix(recipe.preparation)

        return res.render("recipes/edit", { recipe, chefs });
    },
            

    async Details(req, res) {
        const { id } = req.params
        const recipe = await Recipes.find(id)
        const { name } = await Chefs.find(recipe.chef_id)


        recipe.ingredients =  dbArrayFix(recipe.ingredients)
        recipe.preparation =  dbArrayFix(recipe.preparation)
        
        return res.render("recipes/details", { recipe, name } )
    },
    
    async Post(req, res) {
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == "" && key != "information" ){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        }

        let {title, ingredients, preparation} = req.body

        const fields = {
            ...req.body,
            title: title.replace(/[^a-zA-Z]+/g," "),
            ingredients: arrayFix(ingredients),
            preparation: arrayFix(preparation)
        }
        
        const recipe_id = await Recipes.createRecipe(fields);

        return res.redirect(`/admin/recipes/${recipe_id}`)
    },

    async Put(req, res) {
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == "" && key != "information" ){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        } 
        
        await Recipes.updateRecipe(req.body.id, req.body);

        return res.redirect(`/admin/recipes/${req.body.id}`)
        
    },

    async Delete(req, res) {
        const { id } = req.body
        await Recipes.delete(id);

        return res.redirect("/admin/recipes")
    }
    
}