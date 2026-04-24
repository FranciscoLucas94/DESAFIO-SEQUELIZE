import { Router } from 'express';
import { UserController } from '../controllers/userController.js';

const router = Router();
const c = new UserController();

router.post('/usuarios', (req, res) => c.create(req, res));
router.get('/usuarios', (req, res) => c.getAll(req, res));
router.get('/usuarios/:id', (req, res) => c.getById(req, res));
router.put('/usuarios/:id', (req, res) => c.update(req, res));
router.delete('/usuarios/:id', (req, res) => c.delete(req, res));

export default router;
