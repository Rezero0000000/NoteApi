export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string,
    token?: string | null,
    created_at: string
}

export type UserResponse = {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string,
    token?: string | null,
    created_at: string,
}

export type Login = {
    email: string,
    password: string
}

export type CreateUserRequest = {
    name: string,
    username: string,
    email: string,
    password: string
}

export type UpdateUserRequest = {
    name: string | null,
    username: string | null,
    email: string| null,
    password: string | null
}

export function ToUserResponse(user: User): UserResponse {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
        created_at: user.created_at
    }
}