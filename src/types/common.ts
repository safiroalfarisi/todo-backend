// ===================== RESPONSE =====================
export interface ResponseMeta {
    timestamp: string;
}

// Bentuk baku semua respons: { success, message, data, meta }
export interface ApiResponse<T = null> {
    success: boolean;
    message: string;
    data: T | null;
    meta?: ResponseMeta;
}
