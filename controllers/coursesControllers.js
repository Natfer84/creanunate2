class coursesControllers {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ status: "create--ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async update(req, res) {
    try {
        res.status(201).json({ status: "update--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async delete(req, res) {
    try {
        res.status(201).json({ status: "delete--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async getAll(req, res) {
    try {
        res.status(201).json({ status: "getAll--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

  async getOne(req, res) {
    try {
        res.status(201).json({ status: "getOune--ok" });
      } catch (e) {
        res.status(500).send(e);
      }
  }

}

export default new coursesControllers();
