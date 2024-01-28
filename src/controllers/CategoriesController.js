const CrudController = require('./CrudController');
const CategoriesService = require('../services/CategoriesService');

class CategoriesController extends CrudController {
  constructor() {
    super(CategoriesService);
  }
}

module.exports = CategoriesController;