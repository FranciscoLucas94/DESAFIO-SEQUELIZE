import { Router } from 'express';
import { OrderController } from '../controllers/orderController.js';

const router = Router();
const c = new OrderController();

router.post('/pedidos', (req, res) => c.create(req, res));
router.get('/pedidos', (req, res) => c.getAll(req, res));

export default router;