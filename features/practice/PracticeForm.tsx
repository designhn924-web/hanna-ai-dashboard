"use client";

import { useForm } from "react-hook-form";
import RHFInputField from "@/components/RHFInputField";

type PracticeFormData = {
  name: string;
};

export default function PracticeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PracticeFormData>();

  const onSubmit = (data: PracticeFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFInputField
        label="お名前"
        registration={register("name", {
          required: "お名前は必須です",
          minLength: {
            value: 3,
            message: "3文字以上入力してください",
          },
        })}
        placeholder="HanNa 太郎"
        required
        errorMessage={errors.name?.message}
      />

      <button type="submit">
        送信
      </button>
    </form>
  );
}