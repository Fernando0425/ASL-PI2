const express = require('express');
const router = express.Router();

// Controllers
const productsController = require('../controllers/products');

router.post('/products', productsController.addProduct);
router.get('/getproducts', productsController.getProducts);
router.put('/products', productsController.updateProduct);
module.exports = router;