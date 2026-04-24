import { Router } from 'express';
import { UserController } from '../controllers/userController.js';

const router = Router();
const c = new UserController();

router.post('/usuarios', (req, res) => c.create(req, res));
router.get('/usuarios', (req, res) => c.getAll(req, res));

export default router;