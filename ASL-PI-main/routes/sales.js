const express = require('express');
const router = express.Router();

const saleController = require('../controllers/sales');

router.get('/sales',saleController.getSales);
router.post('/sales', saleController.addSale);
router.get('/sales/products', saleController.getSaleProducts);

module.exports = router;