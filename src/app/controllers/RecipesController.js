let recipes = require("../../../data");


module.exports = {
    ShowAll(req, res) {
        return res.render("recipes/index", { recipes });
    },

    ShowDetails(req, res) {
        const index = req.params.index;
        return res.render("recipes/details",  {recipe:recipes[index]} )
    }
}