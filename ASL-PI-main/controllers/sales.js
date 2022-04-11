const Sale = require('../models/sale');
const Product = require('../models/product');

exports.getSales = (req, res, next) => {
    Sale.findAll().then(sales => {
        res.status(200).json({
            message: "Sales retrieve succesfully",
            sales: sales
        });
    }).catch(err => {
        res.status(200).json({
            message: "Could not retrieve sales"
        });
    });

};

exports.getSaleProducts = (req, res, next) => {
    const sale_id = req.body.sale_id;
    Sale.findAll({
        where: {
            sale_id: sale_id
        },
        include: Product
    }).then(results => {
        res.status(200).json(results[0]);
    }).catch(err => {
        res.status(500).json({
            message: "Could not retrieve sale products",
            error: err
        });
        console.log(err);
    });
};



exports.addSale = (req, res, next) => {
    const total = req.body.total;
    const products_id = req.body.products_id;
    const quantity = req.body.quantity;
    const n_prods = products_id.length;
    // Create sale
    Sale.create({
        sale_total: total,
        sale_date: Date.now()
    }).then(sale => {        
        for (let i = 0; i < n_prods; i++) {
            const product_id = products_id[i];
            Product.findByPk(product_id).then(product => {
                sale.addProduct(product, {through: { quantity: quantity[i], sale_price: product.product_price}});
                // Reduce stock
                product.update({ product_stock: product.product_stock - 1 })
            })
        }
        res.status(200).json({
            message: 'Sale created succesfully',
            sale: sale
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Could not create sale',
            error: err
        });
    });   
}

