module.exports = {
    index(req, res) {
        return res.render("home/index")  
    },

    about(req, res) {
        return res.render("home/about")
    },

    recipes(req, res) {
        return res.render("home/recipes")
    }
}