import * as service from '../services/productService.js';

class ProductController {
  async create(req, res) {
    res.status(201).json(await service.createProduct(req.body));
  }

  async getAll(req, res) {
    res.json(await service.getProducts());
  }

  async update(req, res) {
    const { id } = req.params;
    res.json(await service.updateProduct(id, req.body));
  }

  async delete(req, res) {
    const { id } = req.params;
    res.json(await service.deleteProduct(id));
  }
}

export { ProductController };
