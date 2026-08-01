import { z } from "zod";

export const reservationSchema = z.object({
  menu: z.enum([
    "extension",
    "perm",
    "eyebrow",
  ]),
});

export type ReservationFormData = z.infer<
  typeof reservationSchema
>;