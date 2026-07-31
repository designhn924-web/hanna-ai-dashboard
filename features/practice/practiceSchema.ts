import { z } from "zod";

export const practiceSchema = z.object({
    name: z
        .string()
        .min(3, "3文字以上入力してください"),

    email: z
        .string()
        .email("正しいメールアドレスを入力してください"),

    phone: z
        .string()
        .optional(),

    message: z
        .string()
        .min(10, "10文字以上入力してください"),
});

export type PracticeFormData = z.infer<typeof practiceSchema>;