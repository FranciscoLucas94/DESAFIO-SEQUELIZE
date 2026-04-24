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
}

export { UserController };