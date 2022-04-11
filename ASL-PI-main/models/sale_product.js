const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Sale_Product = sequelize.define('sale_product', {
    quantity: Sequelize.INTEGER,
    sale_price: Sequelize.DOUBLE
}, {
    schema: 'tienda',
    createdAt: false,
    updatedAt: false
})

module.exports = Sale_Product;