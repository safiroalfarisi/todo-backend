/**
 * @deprecated File ini sudah tidak digunakan.
 * Routing telah dipecah menjadi modular:
 *   - src/routes/authRoutes.ts  → route autentikasi
 *   - src/routes/todoRoutes.ts  → route todo (CRUD)
 *   - src/routes/index.ts       → penghubung semua route
 *
 * File ini TIDAK dipanggil di app.ts dan hanya disimpan sebagai referensi.
 */

// import { Router } from 'express';
// import { register, login } from '../controllers/authController';
// import { getTodos, createTodo } from '../controllers/todoController';
// import { validateRegister, validateLogin, validateTodo } from '../middlewares/validator';
// import { verifyToken } from '../middlewares/authMiddleware';

// const router = Router();

// // AUTHENTICATION ROUTES
// router.post('/auth/register', validateRegister, register);
// router.post('/auth/login', validateLogin, login);

// // TODO ROUTES (Protected)
// router.get('/todos', verifyToken, getTodos);
// router.post('/todos', verifyToken, validateTodo, createTodo);

// export default router;
