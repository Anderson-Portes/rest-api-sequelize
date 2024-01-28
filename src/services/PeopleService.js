const CrudService = require('./CrudService')

class PeopleService extends CrudService {
  constructor() {
    super('Person')
  }

  async findPersonRegistrations(id) {
    const person = await super.findById(id)
    return await person.getRegistrations();
  }
}

module.exports = PeopleService;