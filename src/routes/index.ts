import { Router } from 'express';
import authRoutes from './authRoutes';
import todoRoutes from './todoRoutes';

const router = Router();

// Daftarkan semua route di sini
// Semua prefix sudah ditambahkan /api di app.ts
router.use('/auth', authRoutes);   // → /api/auth/register, /api/auth/login
router.use('/todos', todoRoutes);  // → /api/todos, /api/todos/:id

export default router;
