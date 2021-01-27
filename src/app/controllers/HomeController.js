let recipes = require("../../../data");


module.exports = {
    index(req, res) {
        recipes = recipes.slice(0, 6);
        return res.render("home/index", { recipes });
    },

    about(req, res) {
        return res.render("home/about");
    },

    recipes(req, res) {
        return res.render("home/recipes", { recipes });
    }
}