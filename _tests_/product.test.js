'use strict';
const Products = require('../models/products/products');
require('@code-fellows/supergoose');

describe('Products Model', () => {

  it('can post() a new product ', () => {
    let  product = new Products();
    let obj = { price: 6, quantity_in_stock: 300 };
    return product.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get() a product', () => {
    let  product = new Products();
    let obj = { price: 4, quantity_in_stock: 600 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(prod => {
            Object.keys(obj).forEach(key => {
              expect(prod[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a product', () => {
    let  product = new Products();
    let obj = { price: 6, quantity_in_stock: 300 };
    return product.create(obj)
      .then(record => {
        record.price = 5;
        record.quantity_in_stock = 850;
        return product.update(record._id, record)
          .then(newPorduct => {
            return product.get(newPorduct._id)
              .then(data => {
                        
                Object.keys(obj).forEach(key => {
                  expect(data[key]).toEqual(newPorduct[key]);
                });
              });
          });
      });
  });
  it('can delete() a product', () => {
    let  product = new Products();
    let obj = { price: 3, quantity_in_stock: 600 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(prod => {
            return product.delete(prod._id)
              .then(record => {
                return product.get(record._id)
                  .then(prod => {
                              
                    expect(prod).toBe(null);
                  });
              });
          });
      });
  });
});