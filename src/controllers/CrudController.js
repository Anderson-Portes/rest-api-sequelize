class CrudController {
  constructor(Service) {
    this.service = new Service();
  }

  async findAll(req, res) {
    try {
      const response = await this.service.findAll();
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  async findById(req, res) {
    try {
      const response = await this.service.findById(Number(req.params.id));
      if (!response) {
        return res.status(404).json({ message: "Information not found." });
      }
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req, res) {
    try {
      const response = await this.service.create(req.body);
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const response = await this.service.update(
        req.body,
        Number(req.params.id)
      );
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.service.delete(Number(req.params.id));
      return res
        .status(200)
        .json({ message: "Information deleted successfully." });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = CrudController;
