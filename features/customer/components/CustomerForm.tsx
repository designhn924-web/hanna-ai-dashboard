"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  customerSchema,
  type CustomerFormData,
} from "@/app/lib/schemas/customerSchema";
import { useForm } from "react-hook-form";

import { useState } from "react";

import type { Customer } from "@/types/customer";
import { insertCustomer } from "../data/customers";

type CustomerFormProps = {
  // 新規顧客が登録されたときに、登録後のCustomerを親に渡す
  onCreate: (customer: Customer) => void;
};

export default function CustomerForm({ onCreate }: CustomerFormProps) {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      memo: "",
    },
  });

  const onSubmit = async (data: CustomerFormData) => {
    setErrorMessage("");

    try {
      const newCustomer = await insertCustomer(data);
      onCreate(newCustomer);

      setSuccessMessage("顧客を登録しました。");

      reset();
    } catch (error) {
      console.error("顧客の登録に失敗しました:", error);
      setErrorMessage(
        "顧客の登録に失敗しました。時間をおいて再度お試しください。",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {successMessage && <p>{successMessage}</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <input {...register("name")} placeholder="名前を入力してください" />

      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email")}
        placeholder="メールアドレスを入力してください"
      />

      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("phone")} placeholder="電話番号を入力してください" />

      {errors.phone && <p>{errors.phone.message}</p>}

      <textarea {...register("memo")} placeholder="メモを入力してください" />

      <button type="submit" disabled={isSubmitting}>
        登録する
      </button>
    </form>
  );
}
