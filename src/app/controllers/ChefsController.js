const { arrayFix } = require('../../lib/utils');

const Chefs = require('../models/Chefs');
const Recipes = require('../models/Recipes');






module.exports = {
    async Index(req,res) {
        const chefs = await Chefs.findAll("");
        return res.render("chefs/index", { chefs } )
    },

    Create(req,res) {
        return res.render("chefs/create");
    },

    async Edit (req, res) {
        const { id } = req.params;
        const chef = await Chefs.find(id);
        const recipes_chef = await Recipes.findAll({where: {chef_id: chef.id }})

        return res.render("chefs/edit", { chef, recipes_chef });
    },

    async Details(req, res) {
        const { id } = req.params;
        const chef = await Chefs.find(id);
        const recipes_chef = await Recipes.findAll({where: {chef_id: chef.id }})
        
        return res.render("chefs/details",{ chef, recipes_chef })
    },

    async Post(req, res) {
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == ""){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        }
        
        let { name, avatar_url } = req.body

        const chef_id = await Chefs.create({
            name,
            avatar_url
        })


        return res.redirect(`chefs/${chef_id}`);     
    },

    async Put(req, res) {
        const { name, avatar_url } = req.body
        
        const keys = Object.keys(req.body);
        
        for (let key of keys) {
            if(req.body[key] == ""){
                return res.send("Porfavor, preencha os campos obrigatórios")
            }
        }
        
        await Chefs.update(req.body.id,{
            name,
            avatar_url
        });
    
        return res.redirect(`/admin/chefs/${req.body.id}`)
    },

    async Delete(req, res) {
        const { id } = req.body
        await Chefs.delete(id)
    
        return res.redirect("/admin/chefs") 
    }
    
}