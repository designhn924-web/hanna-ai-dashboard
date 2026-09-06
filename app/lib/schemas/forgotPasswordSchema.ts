import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("正しいメールアドレスを入力してください"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
