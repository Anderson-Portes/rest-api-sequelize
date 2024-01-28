const CrudService = require('./CrudService')

class CoursesService extends CrudService {
  constructor() {
    super('Course')
  }
}

module.exports = CoursesService;