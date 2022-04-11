const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Sale = sequelize.define('sale', {
    sale_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sale_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    sale_total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
},
{
    schema: 'tienda',
    createdAt: false,
    updatedAt: false
});

module.exports = Sale;