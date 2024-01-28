const CrudController = require('./CrudController');
const RegistrationsService = require('../services/RegistrationsService');

class RegistrationsController extends CrudController {
  constructor() {
    super(RegistrationsService);
  }
}

module.exports = RegistrationsController;