import { z,ZodType } from "zod";

export class NoteValidation {
    static CREATE: ZodType<any> = z.object({
        title: z.string().min(1).max(100),
        category: z.string().min(1).max(100),
        message: z.string().min(1).max(100)
    });

    static UPDATE: ZodType<any> = z.object({
        title: z.string().min(1).max(100).optional(),
        category: z.string().min(1).max(100).optional(),
        message: z.string().min(1).max(100).optional()
    });
}