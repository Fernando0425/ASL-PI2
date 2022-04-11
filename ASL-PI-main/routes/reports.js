const express = require('express');
const router = express.Router();

// Controller
const reportsController = require('../controllers/reports');

router.get('/reports', reportsController.getReport, reportsController.getReportContinue);

module.exports = router;