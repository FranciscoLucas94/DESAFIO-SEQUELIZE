import { Router } from 'express';
import { ProductController } from '../controllers/productController.js';

const router = Router();
const c = new ProductController();

router.post('/produtos', (req, res) => c.create(req, res));
router.get('/produtos', (req, res) => c.getAll(req, res));
router.get('/produtos/:id', (req, res) => c.getById(req, res));
router.put('/produtos/:id', (req, res) => c.update(req, res));
router.delete('/produtos/:id', (req, res) => c.delete(req, res));

export default router;
