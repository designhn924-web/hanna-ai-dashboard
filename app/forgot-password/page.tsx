"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RHFInputField from "@/components/RHFInputField";
import { supabase } from "@/lib/supabase/client";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/app/lib/schemas/forgotPasswordSchema";

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setFormError("");
    setIsSubmitting(true);

    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setIsSubmitting(false);

    if (error) {
      // Supabaseの技術的なエラー内容はそのまま表示せず、一般的な文言にまとめる
      setFormError(
        "メールを送信できませんでした。しばらくしてから再度お試しください。",
      );
      return;
    }

    setSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
      <Card className="w-full max-w-sm">
        <PageHeader
          title="パスワードをお忘れの場合"
          description="登録済みのメールアドレスを入力してください"
        />

        {sent ? (
          <p className="text-sm text-stone-600">
            パスワード再設定用のメールを送信しました。届いたメール内のリンクから新しいパスワードを設定してください。
          </p>
        ) : (
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

            {formError && (
              <p className="text-sm text-red-500">{formError}</p>
            )}

            <PrimaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "再設定メールを送信"}
            </PrimaryButton>
          </form>
        )}
      </Card>
    </div>
  );
}
