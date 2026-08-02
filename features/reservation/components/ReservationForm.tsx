"use client";

import SelectField, {
    type SelectOption,
  } from "@/components/ui/SelectField";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    reservationSchema,
    type ReservationFormData,
  } from "@/app/lib/schemas/reservationSchema";
import { useForm } from "react-hook-form";

import { useState } from "react";


const menuOptions: SelectOption[] = [
    {
      label: "まつげエクステ",
      value: "extension",
    },
    {
      label: "まつげパーマ",
      value: "perm",
    },
    {
      label: "アイブロウ",
      value: "eyebrow",
    },
  ];

  export default function ReservationForm() {
    const [successMessage, setSuccessMessage] = useState("");
  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ReservationFormData>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
          name: "",
          email: "",
          menu: "extension",
          note: "",
        },
      });

      const onSubmit = (data: ReservationFormData) => {
        console.log("送信データ", data);
      
        setSuccessMessage(
          "予約ありがとうございます。確認後ご連絡いたします。"
        );
      
        reset();
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
      
          {successMessage && (
            <p>
              {successMessage}
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

      <button type="submit">予約する</button>
    </form>
  );
}