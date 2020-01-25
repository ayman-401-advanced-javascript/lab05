'use strict';

const Product = require('../models/products/product-schema');
require('@code-fellows/supergoose');




const product = new Product();




describe('Product Model', () => {
    it('can create() a record', () => {
      let obj = { id:'54545',category_id: 'Electronics', price: 30, weight: 20, quantity: 90 };
      return product.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key])
          });
        })
    });




    it('can get() records', () => {
      let obj = { id:'54545',category_id: 'Electronics', price: 30, weight: 20, quantity: 90 };
      return product.create(obj)
        .then(() => product.get())
       
        .catch(console.error);
    })
  })