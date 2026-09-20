// ===================== RESPONSE =====================
export interface PaginationMeta {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
}

export interface ResponseMeta {
    timestamp: string;
    pagination?: PaginationMeta;
}

// Bentuk baku semua respons: { success, message, data, meta }
export interface ApiResponse<T = null> {
    success: boolean;
    message: string;
    data: T | null;
    meta?: ResponseMeta;
}
