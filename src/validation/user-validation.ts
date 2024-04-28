import { z, ZodType } from "zod";

export class UserValidation {
    static CREATE: ZodType<any> = z.object({
        name: z.string().min(1).max(100),
        username: z.string().min(1).max(100),
        email: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    })

    static LOGIN: ZodType<any> = z.object({
        email: z.string().min(1).max(100),
        password: z.string().min(1).max(100)
    })

    static UPDATE: ZodType<any> = z.object({
        name: z.string().min(1).max(100).optional(),
        username: z.string().min(1).max(100).optional(),
        email: z.string().min(1).max(100).optional(),
        password: z.string().min(1).max(100).optional()
    })

}