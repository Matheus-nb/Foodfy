const { Query } = require('pg');
const Base = require('./Base');

Base.init({ table: 'chefs' })

module.exports = {
    ...Base
}