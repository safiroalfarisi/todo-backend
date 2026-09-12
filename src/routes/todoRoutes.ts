import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

// Semua route todo wajib login (verifyToken dipasang di setiap route)

// GET /api/todos — Ambil semua todo milik user
router.get('/', verifyToken, getTodos);

// POST /api/todos — Tambah todo baru
router.post('/', verifyToken, validateTodo, createTodo);

// PUT /api/todos/:id — Update todo (task atau status selesai)
router.put('/:id', verifyToken, validateUpdateTodo, updateTodo);

// DELETE /api/todos/:id — Hapus todo
router.delete('/:id', verifyToken, deleteTodo);

export default router;
