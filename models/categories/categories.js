'use strict';

const Collection = require('../collection.js');
const schema = require('./categary-schema');

class Categories extends Collection {
  constructor() {
    super();
    this.schema = schema;
  }
}

module.exports = Categories;