import * as service from '../services/userService.js';

class UserController {
  async create(req, res) {
    try {
      const data = await service.createUser(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(400).json({ erro: e.message });
    }
  }

  async getAll(req, res) {
    res.json(await service.getUsers());
  }
  async update(req, res) {
    const { id } = req.params;
    res.json(await service.updateUser(id, req.body));
  }

  async delete(req, res) {
    const { id } = req.params;
    res.json(await service.deleteUser(id));
  }
}

export { UserController };
