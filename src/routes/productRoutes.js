import { Router } from 'express';
import { ProductController } from '../controllers/productController.js';

const router = Router();
const c = new ProductController();

router.post('/produtos', (req, res) => c.create(req, res));
router.get('/produtos', (req, res) => c.getAll(req, res));

export default router;