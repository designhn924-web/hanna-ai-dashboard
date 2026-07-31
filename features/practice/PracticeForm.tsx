"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFInputField from "@/components/RHFInputField";
import {
  practiceSchema,
  type PracticeFormData,
} from "./practiceSchema";

export default function PracticeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PracticeFormData>({
    resolver: zodResolver(practiceSchema),
  });

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
        errorMessage={errors.name?.message}
      />

      <button type="submit">
        送信
      </button>
    </form>
  );
}