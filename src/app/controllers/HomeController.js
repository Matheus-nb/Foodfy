const data = require("../../../data.json");


module.exports = {
    index(req, res) {
        data.recipes = data.recipes.slice(0, 6);
        return res.render("home/index", { recipes: data.recipes });
    },

    about(req, res) {
        return res.render("home/about");
    },

    recipes(req, res) {
        return res.render("home/recipes", { recipes: data.recipes });
    }
}