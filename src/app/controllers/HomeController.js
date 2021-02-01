const Chefs = require('../models/Chefs');
const Recipes = require('../models/Recipes');

const { dbArrayFix } = require('../../lib/utils');



module.exports = {
    async index(req, res) {
        let recipes = await Recipes.findAll("")
        const chefs = await Chefs.findAll("")
        recipes = recipes.slice(0,6)

        return res.render("home/index", { recipes, chefs });
    },

    about(req, res) {
        return res.render("home/about");
    },

    async recipes(req, res) {
        const recipes = await Recipes.findAll("")
        const chefs = await Chefs.findAll("")


        return res.render("home/recipes", {recipes, chefs})
    },

    async details(req, res) {
        const { id } = req.params
        const recipe = await Recipes.find(id)
        const { name } = await Chefs.find(recipe.chef_id)


        recipe.ingredients =  dbArrayFix(recipe.ingredients)
        recipe.preparation =  dbArrayFix(recipe.preparation)
        
        return res.render("home/details", { recipe, name } )
    },

    async chefs(req, res) {
        const recipes = await Recipes.findAll("")
        const chefs = await Chefs.findAll("")

        return res.render("home/chefs", { recipes, chefs });
    },

    async search(req, res) {
        let { filter } = req.query

        if(!filter || filter.toLowerCase() == 'toda a loja' ) {
            filter = null
        }

        const recipes = await Recipes.search(filter)
        const chefs = await Chefs.findAll("")

        const search = {
            term: filter || 'Toda a loja'
        }

        return res.render('home/recipes', {recipes, chefs, term:search.term })
    }
}