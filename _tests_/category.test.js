'use strict';

const Category = require('../models/categories/categary-schema');
require('@code-fellows/supergoose');

const category = new Category();




describe('Category Model', () => {
  it('can create() a record', () => {
    let obj = {  name: 'aymanjamal' };
    return category.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key])
        });
      });

    
  });






  it('can get() records', () => {
    let obj = { name: 'aymanjamal'};
    return category.create(obj)
      .then(() => category.get())
      .then(data => {
        expect(data.length >= 1).toBeTruthy();
      })
      .catch(console.error);
  });
});