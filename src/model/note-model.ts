export type Note = {
    id: number,
    title: string,
    category: string,
    message: string,
    user_id: number,
    category_id: number,
    created_at: string,
    update_at: string
}

export type CreateNoteRequest = {
    title: string,
    category: string,
    message: string,
    user_id: number,
    category_id: number
}

export type UpdateNoteRequest = {
    title?: string | null,
    category?: string | null,
    message?: string | null
    category_id?: number,
}

export type NoteRespone = {
    id: number,
    title: string,
    category: string,
    message: string,
    user_id: number,
    category_id: number,
    created_at: string,
    update_at: string
}

export function ToNoteResponse(note: Note): NoteRespone {
    return {
        id: note.id,
        title: note.title,
        category: note.category,
        message: note.message,
        user_id: note.user_id,
        category_id: note.category_id,
        created_at: note.created_at,
        update_at: note.update_at
    }
}