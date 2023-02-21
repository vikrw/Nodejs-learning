const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const admin = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('product -> ', admin.products);
    const products = admin.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: "/" });
});

module.exports = router;
