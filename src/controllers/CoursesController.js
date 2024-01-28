const CrudController = require('./CrudController');
const CoursesService = require('../services/CoursesService');

class CoursesController extends CrudController {
  constructor() {
    super(CoursesService);
  }
}

module.exports = CoursesController;