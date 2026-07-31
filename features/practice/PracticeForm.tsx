"use client";

import { useForm } from "react-hook-form";
import RHFInputField from "@/components/RHFInputField";

type PracticeFormData = {
  name: string;
};

export default function PracticeForm() {
  const { register, handleSubmit } = useForm<PracticeFormData>();

  const onSubmit = (data: PracticeFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFInputField
        label="お名前"
        registration={register("name")}
        placeholder="HanNa 太郎"
        required
      />

      <button type="submit">送信</button>
    </form>
  );
}