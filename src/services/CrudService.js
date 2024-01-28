const db = require("../models");

class CrudService {
  constructor(entity) {
    this.model = db[entity];
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(data, id) {
    await this.model.update(data, { where: { id } });
    return await this.findById(id);
  }

  async delete(id) {
    return await this.model.destroy({ where: { id } });
  }
}

module.exports = CrudService;
