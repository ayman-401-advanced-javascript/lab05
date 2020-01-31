'use strict';
const mongoose = require('mongoose');

const categories = require('./models/categories/categary-schema');
const products = require('./models/products/product-schema');
const MONGOOSE_URI = 'mongodb://localhost:27017/lab05d';
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true});


const lol = new categories( {
  name:'ayman',
});
lol.save();

const product = new products( {
  category_id: '123456',
  price: 300,
  weight: 10,
  quantity_in_stock: 50,
});


product.save();