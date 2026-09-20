import type { JwtUserPayload } from './auth';

/**
 * Global type augmentation untuk Express.
 * Menambahkan variabel global per-request `req.user` (hasil verifikasi JWT)
 * supaya TypeScript tahu tipenya di seluruh project.
 */
declare global {
    namespace Express {
        interface Request {
            user: JwtUserPayload;
        }
    }
}

export {};
