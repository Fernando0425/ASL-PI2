const express = require('express');

// Database
const sequelize = require('./utils/db');
// const Product = require('./models/product');

// Routes import
const productsRoute = require('./routes/products');
const salesRoute = require('./routes/sales');
const reportsRoute = require('./routes/reports');

const app = express();

// Decode json
app.use(express.json());

// Sequelize models
const Product = require('./models/product');
const Sale = require('./models/sale');
const Sale_Product = require('./models/sale_product');

// Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Routes
app.use(productsRoute);
app.use(salesRoute); 
app.use(reportsRoute);

// Stablishing relationships
Product.belongsToMany(Sale, { through: Sale_Product, foreignKey: 'product_id'});
Sale.belongsToMany(Product, { through: Sale_Product, foreignKey: 'sale_id'});

sequelize.createSchema('tienda').then(() => {
    sequelize.sync().then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});

app.listen(3000);