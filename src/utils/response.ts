import type { Response } from 'express';
import type { ResponseMeta } from '../types/common';

const createMeta = (): ResponseMeta => ({
    timestamp: new Date().toISOString()
});

export const sendSuccess = <T = null>(res: Response, message: string, data: T | null = null, status = 200): void => {
    res.status(status).json({ success: true, message, data, meta: createMeta() });
};

export const sendError = (res: Response, message: string, status = 500): void => {
    res.status(status).json({ success: false, message, data: null, meta: createMeta() });
};
