"use client";

import SelectField from "@/components/ui/SelectField";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    reservationSchema,
    type ReservationFormData,
  } from "@/app/lib/schemas/reservationSchema";
import { useForm } from "react-hook-form";

import { useState } from "react";

import type { Reservation } from "@/types/reservation";
import { menuOptions } from "../reservationUtils";
import { insertReservation } from "../data/reservations";

type ReservationFormProps = {
  // 新規予約が作成されたときに、作成後のReservationを親に渡す
  onCreate: (reservation: Reservation) => void;
};

  export default function ReservationForm({ onCreate }: ReservationFormProps) {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<ReservationFormData>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
          name: "",
          email: "",
          datetime: "",
          menu: "extension",
          note: "",
        },
      });

      const onSubmit = async (data: ReservationFormData) => {
        setErrorMessage("");

        try {
          const newReservation = await insertReservation(data);
          onCreate(newReservation);

          setSuccessMessage(
            "予約ありがとうございます。確認後ご連絡いたします。"
          );

          reset();
        } catch (error) {
          console.error("予約の保存に失敗しました:", error);
          setErrorMessage(
            "予約の保存に失敗しました。時間をおいて再度お試しください。"
          );
        }
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
          {successMessage && (
            <p>
              {successMessage}
            </p>
          )}

          {errorMessage && (
            <p>
              {errorMessage}
            </p>
          )}
      <input
        {...register("name")}
        placeholder="名前を入力してください"
      />

{errors.name && (
  <p>{errors.name.message}</p>
)}

    <input
        {...register("email")}
        placeholder="メールアドレスを入力してください"
        />

{errors.email && (
  <p>{errors.email.message}</p>
)}

<label>
  予約日時
  <input type="datetime-local" {...register("datetime")} />
</label>

{errors.datetime && (
  <p>{errors.datetime.message}</p>
)}

<SelectField
  label="メニュー"
  options={menuOptions}
  error={errors.menu?.message}
  {...register("menu")}
/>

<textarea
  {...register("note")}
  placeholder="備考を入力してください"
/>

      <button type="submit" disabled={isSubmitting}>予約する</button>
    </form>
  );
}