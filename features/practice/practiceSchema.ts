import { z } from "zod";

export const practiceSchema = z.object({
  name: z
    .string()
    .min(3, "3文字以上入力してください"),
});

export type PracticeFormData = z.infer<typeof practiceSchema>;