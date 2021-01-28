const fs = require("fs");

const {arrayFix} = require('../../lib/utils');
const data = require("../../../data.json");




module.exports = {
    Index(req,res) {
        return res.render("admin/index", { recipes: data.recipes})
    },

    Create(req,res) {
        return res.render("admin/create");
    },

    Edit (req, res) {
        const { id } = req.params
        const recipe = data.recipes.find(recipe => {
            return recipe.id == id
        })
        return res.render("admin/edit", { recipe });
    },

    Show(req, res) {
        const { id } = req.params
        const recipe = data.recipes.find(recipe => {
            return recipe.id == id
        })
        
        return res.render("admin/details", { recipe } )
    },

    ShowAll(req, res) {
        return res.render("recipes/index", { recipes: data.recipes });
    },

    ShowDetails(req, res) {
        const index = req.params.index;
        return res.render("recipes/details",  {recipe:data.recipes[index]} )
    },

    Post(req, res) {
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == "" && key != "information" ){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        }
        
        let { recipe_url, title, ingredients, preparations, information } = req.body

        let id = 1
        const lastId = data.recipes[data.recipes.length - 1]

        if(lastId) {
            id = lastId.id + 1
        }

        data.recipes.push({
            id,
            recipe_url,
            title,
            ingredients,
            preparations,
            information
        })

        fs.writeFile("data.json",JSON.stringify(data,null,2),function(error) {
            if(error) return res.send("Write file error!")


            return res.redirect("/admin/recipes")
        })
    },

    Put(req, res) {
        const { recipe_url, title, ingredients, preparations, information, id } = req.body
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == "" && key != "information" ){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        }
        
        const filterRecipes = data.recipes.filter(recipe => {
            return recipe.id != id
        })


        
        filterRecipes.push({
            id,
            recipe_url,
            title,
            ingredients: arrayFix(ingredients),
            preparations: arrayFix(preparations),
            information
        })

        data.recipes = filterRecipes;

        fs.writeFile("data.json",JSON.stringify(data,null,2),function(error) {
            if(error) return res.send("Write file error!")


            return res.redirect("/admin/recipes")
        })      
    },

    Delete(req, res) {
        const { id } = req.body

        const filterRecipes = data.recipes.filter(recipe => {
            return recipe.id != id
        })

        data.recipes = filterRecipes;

        fs.writeFile("data.json",JSON.stringify(data,null,2),function(error) {
            if(error) return res.send("Write file error!")


            return res.redirect("/admin/recipes")
        })
    }
    
}