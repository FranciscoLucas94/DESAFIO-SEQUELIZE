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

  async update(req, res) {
    const { id } = req.params;
    res.json(await service.updateOrder(id, req.body));
  }
  
  async delete(req, res) {
    const { id } = req.params;
    res.json(await service.deleteOrder(id));
  }
}

export { OrderController };
