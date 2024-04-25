export type CreateCategoryRequest = {
    title: string,
    slug: string
}

export type UpdateCategoryRequest = {
    title?: string | null,
    slug?: string | null
}


export type Category = {
    id: number,
    title: string,
    slug: string,
    created_at: string,
    update_at: string,
}


export function ToNoteResponse(category: Category): Category {
    return {
        id: category.id,
        title: category.title,
        slug: category.slug,
        created_at: category.created_at,
        update_at: category.update_at
    }
}