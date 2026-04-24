import { Router } from 'express';
import { OrderController } from '../controllers/orderController.js';

const router = Router();
const c = new OrderController();

router.post('/pedidos', (req, res) => c.create(req, res));
router.get('/pedidos', (req, res) => c.getAll(req, res));
router.get('/pedidos/:id', (req, res) => c.getById(req, res));
router.put('/pedidos/:id', (req, res) => c.update(req, res));
router.delete('/pedidos/:id', (req, res) => c.delete(req, res));

export default router;
