const CrudService = require('./CrudService')

class RegistrationsService extends CrudService {
  constructor() {
    super('Registration')
  }
}

module.exports = RegistrationsService;