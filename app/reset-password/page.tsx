"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RHFInputField from "@/components/RHFInputField";
import { supabase } from "@/lib/supabase/client";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/app/lib/schemas/resetPasswordSchema";

type RecoveryStatus = "checking" | "ready" | "invalid";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Supabaseはリンクが無効・期限切れの場合、redirectTo先にerror系のクエリを付けて戻す
  const hasErrorParam = Boolean(
    searchParams.get("error") || searchParams.get("error_code"),
  );
  // 通常のRecoveryリンクにはPKCEの認可コード(code)が付与されている
  const hasRecoveryCode = Boolean(searchParams.get("code"));

  const [status, setStatus] = useState<RecoveryStatus>(
    hasErrorParam || !hasRecoveryCode ? "invalid" : "checking",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  useEffect(() => {
    if (status !== "checking") {
      return;
    }

    // Recoveryリンクの認可コードはsupabaseクライアントが自動で検証し、
    // 成立すると"PASSWORD_RECOVERY"イベントが発火する
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "PASSWORD_RECOVERY") {
          setStatus("ready");
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [status]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    setFormError("");
    setIsSubmitting(true);

    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error) {
      // Supabaseの技術的なエラー内容はそのまま表示せず、一般的な文言にまとめる
      setFormError(
        "パスワードを更新できませんでした。お手数ですが、パスワード再設定を最初からやり直してください。",
      );
      setIsSubmitting(false);
      return;
    }

    router.push("/login");
  };

  return (
    <Card className="w-full max-w-sm">
      <PageHeader
        title="新しいパスワードの設定"
        description="新しいパスワードを入力してください"
      />

      {status === "checking" && (
        <p className="text-sm text-stone-500">確認しています...</p>
      )}

      {status === "invalid" && (
        <p className="text-sm text-red-500">
          リンクが無効か、有効期限が切れています。ログイン画面の「パスワードをお忘れの場合」から、もう一度メールを送信してください。
        </p>
      )}

      {status === "ready" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <RHFInputField
            label="新しいパスワード"
            type="password"
            registration={register("password")}
            placeholder="8文字以上で入力してください"
            required
            disabled={isSubmitting}
            errorMessage={errors.password?.message}
          />

          <RHFInputField
            label="新しいパスワード(確認)"
            type="password"
            registration={register("passwordConfirm")}
            placeholder="もう一度入力してください"
            required
            disabled={isSubmitting}
            errorMessage={errors.passwordConfirm?.message}
          />

          {formError && <p className="text-sm text-red-500">{formError}</p>}

          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "更新中..." : "パスワードを更新"}
          </PrimaryButton>
        </form>
      )}
    </Card>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-6">
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
