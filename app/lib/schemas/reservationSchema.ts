import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),

  email: z
    .string()
    .email("正しいメールアドレスを入力してください"),

  datetime: z
    .string()
    .min(1, "予約日時を入力してください")
    .refine((value) => !Number.isNaN(new Date(value).getTime()), {
      message: "予約日時の形式が正しくありません",
    }),

  menu: z.enum(
    ["extension", "perm", "eyebrow"],
    {
      message: "メニューを選択してください",
    },
  ),

  note: z.string().optional(),
});

export type ReservationFormData = z.infer<
  typeof reservationSchema
>;