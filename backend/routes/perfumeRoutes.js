import express from 'express';
import { getPerfumes, addPerfume } from '../controllers/perfumeController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();
router.get('/', getPerfumes);
router.post('/', authMiddleware, addPerfume); // Only logged-in users can add
export default router;
