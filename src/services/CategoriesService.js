const CrudService = require('./CrudService')

class CategoriesService extends CrudService {
  constructor() {
    super('Category')
  }
}

module.exports = CategoriesService;