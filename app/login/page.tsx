"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RHFInputField from "@/components/RHFInputField";
import { supabase } from "@/lib/supabase/client";
import { loginSchema, type LoginFormData } from "@/app/lib/schemas/loginSchema";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoginError("");
    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      // Supabaseの技術的なエラー内容はそのまま表示せず、一般的な文言にまとめる
      setLoginError("メールアドレスまたはパスワードを確認してください。");
      setIsSubmitting(false);
      return;
    }

    router.push("/reservation");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
      <Card className="w-full max-w-sm">
        <PageHeader
          title="ログイン"
          description="HanNa AI Dashboardにログインしてください"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <RHFInputField
            label="メールアドレス"
            type="email"
            registration={register("email")}
            placeholder="example@hanna.com"
            required
            disabled={isSubmitting}
            errorMessage={errors.email?.message}
          />

          <RHFInputField
            label="パスワード"
            type="password"
            registration={register("password")}
            placeholder="パスワードを入力してください"
            required
            disabled={isSubmitting}
            errorMessage={errors.password?.message}
          />

          {loginError && (
            <p className="text-sm text-red-500">{loginError}</p>
          )}

          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "ログイン中..." : "ログイン"}
          </PrimaryButton>
        </form>

        <Link
          href="/forgot-password"
          className="mt-4 block text-center text-sm text-stone-500 hover:text-stone-700"
        >
          パスワードをお忘れの場合
        </Link>
      </Card>
    </div>
  );
}
