import * as service from '../services/productService.js';

class ProductController {
  async create(req, res) {
    res.status(201).json(await service.createProduct(req.body));
  }

  async getAll(req, res) {
    res.json(await service.getProducts());
  }
}

export { ProductController };