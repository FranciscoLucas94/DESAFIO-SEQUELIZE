import * as service from '../services/orderService.js';

class OrderController {
  async create(req, res) {
    try {
      const data = await service.createOrder(req.body);
      res.status(201).json(data);
    } catch (e) {
      res.status(400).json({ erro: e.message });
    }
  }

  async getAll(req, res) {
    res.json(await service.getOrders());
  }
}

export { OrderController };