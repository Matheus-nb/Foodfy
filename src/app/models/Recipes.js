const { query } = require('pg');
const db = require('../../config/db');

const Base = require('./Base');

const { arrayFix } = require('../../lib/utils');


Base.init({ table: 'recipes' })

module.exports = {
    ...Base,

    async createRecipe(fields) {
        try {
            let {chef_id, image, title, ingredients, preparation, information} = fields;
            
            const query = `
                INSERT INTO ${this.table} (
                    chef_id,
                    image,
                    title,
                    ingredients,
                    preparation,
                    information
                )
                VALUES ($1, $2, $3, ARRAY[$4], ARRAY[$5], $6)
                RETURNING id
            `

            const values = [
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information
            ]

            const results = await db.query(query, values);
            return results.rows[0].id;
            
        } catch (error) {
            console.error(error);
        }
    },

    async updateRecipe(id, fields) {
        try {
            let {chef_id, image, title, ingredients, preparation, information} = fields;
            
            ingredients = arrayFix(ingredients);
            preparation = arrayFix(preparation);

            const query = `
                UPDATE ${this.table} SET 
                    chef_id = $1,
                    image = $2,
                    title = $3,
                    ingredients = ARRAY[$4],
                    preparation = ARRAY[$5],
                    information = $6
                WHERE id = ${id}
            `

            const values = [
                chef_id,
                image,
                title,
                ingredients,
                preparation,
                information
            ]

            await db.query(query, values)
            
        } catch (error) {
            console.error(error);
        }
    },

    async search(filter){
        
        let query = `
            SELECT * FROM ${this.table}
            WHERE 1 = 1
        `
        if(filter) {
            query += `AND recipes.title ILIKE '%${filter}%'`
        }
        const results = await db.query(query);
        return results.rows;
    }
}