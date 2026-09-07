import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),

  email: z
    .string()
    .email("正しいメールアドレスを入力してください")
    .optional()
    .or(z.literal("")),

  phone: z.string().optional(),

  memo: z.string().optional(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
