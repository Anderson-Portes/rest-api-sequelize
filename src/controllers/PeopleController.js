const CrudController = require('./CrudController');
const PeopleService = require('../services/PeopleService');

const service = new PeopleService()

class PeopleController extends CrudController {
  constructor() {
    super(PeopleService);
  }

  async findRegistrations(req,res) {
    return await service.findPersonRegistrations(Number(req.params.id));
  }
}

module.exports = PeopleController;