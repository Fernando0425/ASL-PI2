const Product = require('../models/product');

// Creates a new product in the database
exports.addProduct = (req, res, next) => {  
    const product_name = req.body.product_name;
    const product_price = req.body.product_price;
    const product_stock = req.body.product_stock;
    const product_img = req.body.product_img;
    Product.create({
        product_name: product_name,
        product_price: product_price,
        product_stock: product_stock,
        product_img: product_img
    }).then(result => {
        res.status(200).json({
            //message: "Product created succesfully",
            product: result
        })
    }).catch(err => {
        res.status(200).json({
            message: "Could not create product"
        })
    });

};

exports.getProducts = ((req, res, next) => {
    Product.findAll().then(products => {
        res.send(products)
    }).catch(err => {
        res.status(500).json({
            message: "Could not retrieve products",
        });
    })
    
});

// Update product
exports.updateProduct = (req, res, next) => {
    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
    const product_price = req.body.product_price;
    const product_stock = req.body.product_stock;
    const product_img = req.body.product_img;
    Product.findByPk(product_id).then(product => {
        req.body.product_name = product_name ;
        product.product_price = product_price;
        product.product_stock = product_stock;
        product.product_img = product_img;;
        product.save().then(result => {
            res.status(200).json({
                //message: "Product updated successfully",
                product: {
                    product_id: product_id,
                    product_name: product_name,
                    product_price: product_price,
                    product_stock: product_stock,
                    product_img: product_img
                }
            });
        }).catch(err => {
            res.status(500).json({
                message: "Could update product",
                error: err
            });
        });
    }).catch(err => {
        res.status(500).json({
            message: "Could not find product",
            error: err
        });
    });    
    
};