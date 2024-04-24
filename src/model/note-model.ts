export type Note = {
    id: number,
    title: string,
    category: string,
    message: string,
    created_at: string,
    update_at: string
}

export type CreateNoteRequest = {
    title: string,
    category: string,
    message: string
}

export type NoteRespone = {
    id: number,
    title: string,
    category: string,
    message: string,
    created_at: string,
    update_at: string
}

export function ToNoteResponse(note: Note): NoteRespone {
    return {
        id: note.id,
        title: note.title,
        category: note.category,
        message: note.message,
        created_at: note.created_at,
        update_at: note.update_at
    }
}