const Sale = require('../models/sale');
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const pdf = require('html-pdf');

exports.getReport = async (req, res, next) => {
    const sales_ids = req.body.sales_ids;
    const sales = await Sale.findAll({ where: { sale_id: sales_ids } });
    const saleDetails = [];
    // Write title
    writeToFileTitle(`<h3>Reporte de ventas | ${formatDate(new Date())}</h3>`);

    // Style html
    let html_content = `
    <!doctype html>
    <html>
       <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
                html, body {
                    font-size: 8pt;
                    font-family: Arial, Helvetica, sans-serif;
                }
            </style>
        </head>
        <body>
    `;
    // For every sale 
    for (const sale of sales) {
        const products = await sale.getProducts();

        // Write sale information
        html_content += '<b>ID Venta: </b>' + sale.sale_id + '<br>';
        const saleDate = formatDate(sale.sale_date);
        html_content += '<b>Fecha de la venta: </b>' + saleDate + '<br>';
        html_content += '<b>Total de la venta: </b>' + sale.sale_total + '<br>';
        // For every product sold in the sale
        for (const product of products) {

            // Write product information
            html_content += '<ul>';
            html_content += '<b>Id Producto: </b>' + product.product_id + '<br>';
            html_content += '<ul>';
            html_content += '<li><b>Nombre del producto: </b>' + product.product_name + '</li>';
            html_content += '<li><b>Precio del producto: </b>' + product.sale_product.sale_price + '</li>';
            html_content += '<li><b>Cantidad: </b>' + product.sale_product.quantity + '</li>';
            html_content += '</ul>';
            html_content += '</ul>';
        }

        html_content += '</body></html>'

        // Save to file for every sale
        writeToFileAppend(html_content);
    }
    const reportName = `Reporte-${formatDate(new Date())}`;
    req.data = reportName
    createReport(reportName, next).then(() => {
        next();
    });
    
    
};

exports.getReportContinue = (req, res, next) => {
    const report = req.data;

    var data =fs.readFileSync(path.join(__dirname, '../public/reports/' + report + '.pdf'));
    res.contentType("application/pdf");
    const filename = report + '.pdf';
    res.setHeader('Content-Disposition','attachment; filename=' + filename.replace(' ', ''));
    res.send(data);

    // res.status(200).json({
    //     message: "Report created succesfully",
    //     report: report
    // });
    
};


const formatDate = (d) => {
    let ye = new Intl.DateTimeFormat('es-ES', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('es-ES', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('es-ES', { day: '2-digit' }).format(d);
    let ho = new Intl.DateTimeFormat('es-ES', { hour: '2-digit' }).format(d);
    let mi = new Intl.DateTimeFormat('es-ES', { minute: '2-digit' }).format(d);
    let se = new Intl.DateTimeFormat('es-ES', { second: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}-${ho}-${mi}-${se}`;
}

const writeToFileTitle = (content) => {
    try {
        fs.writeFileSync(path.join(__dirname, '../public/reports/report.txt'), content, { flag: 'w+' });
    } catch (err) {
        console.log(err);
    }
};

const writeToFileAppend = (content) => {
    try {
        fs.writeFileSync(path.join(__dirname, '../public/reports/report.txt'), content, { flag: 'a+' });
    } catch (err) {
        console.log(err);
    };
}

const createReport = async (reportName, next) => {
    const content = fs.readFileSync(path.join(__dirname, '../public/reports/report.txt'), 'utf-8');
    const pdfPath = path.join(__dirname, '../public/reports/' + reportName + '.pdf')
    const config = {
        border: {
            "top": "0.75in",            // default is 0, units: mm, cm, in, px
            "right": "0.75in",
            "bottom": "0.75in",
            "left": "0.75in"
        },
        width: '216mm',
        height: '279mm',
        filename: pdfPath
    }
    let create = Promise.promisify(pdf.create);
    await create(content, config);

    // await pdf.createAsync(content, config).toFile(pdfPath, function (err, res) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(res);
    //     }
    // });
    
}

// async createFile(html, filename) {
//     let options = {
//         format: 'Letter',
//         directory: os.tmpdir(),
//         orientation: 'landscape',
//         filename: 'test.pdf'
//     };

//     let create = Promise.promisify(pdf.create);
//     let creator = await create(content, config);
// }



