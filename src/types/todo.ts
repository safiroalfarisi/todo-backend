// ===================== TODO =====================
export interface CreateTodoRequest {
    task: string;
}

export interface UpdateTodoRequest {
    task: string;
    is_completed: boolean;
}

// Bentuk todo yang dikirim ke client (`task` → `todo`, `is_completed` → `completed`)
export interface TodoResponse {
    id: number;
    todo: string;
    completed: boolean;
}

// Baris mentah tabel `todos` (task/is_completed) — diubah ke bentuk respons
export interface TodoRow {
    id: number;
    task: string;
    is_completed: number | boolean;
}
