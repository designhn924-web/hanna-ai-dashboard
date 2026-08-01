"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFInputField from "@/components/RHFInputField";
import RHFTextAreaField from "@/components/RHFTextAreaField";
import {
    practiceSchema,
    type PracticeFormData,
} from "./practiceSchema";

export default function PracticeForm() {
    // 送信成功時に表示するメッセージ。未送信のときはnull。
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PracticeFormData>({
        resolver: zodResolver(practiceSchema),
        // 入力欄の値が変わるたびにvalidationを実行する
        mode: "onChange",
        // 各項目の初期値(未入力状態)
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = (data: PracticeFormData) => {
        console.log(data);

        // 送信できたことを画面に表示し、フォームを初期状態に戻す
        setSuccessMessage("送信が完了しました");
        reset();
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

            <RHFInputField
                label="メールアドレス"
                registration={register("email")}
                placeholder="example@gmail.com"
                required
                errorMessage={errors.email?.message}
            />

            <RHFInputField
                label="電話番号"
                registration={register("phone")}
                placeholder="090-1234-5678"
                errorMessage={errors.phone?.message}
            />

            <RHFTextAreaField
                label="メッセージ"
                registration={register("message")}
                placeholder="お問い合わせ内容を入力してください"
                rows={5}
                required
                errorMessage={errors.message?.message}
            />

            <button type="submit">
                送信
            </button>

            {/* successMessageがあるときだけ、送信完了を伝える */}
            {successMessage && (
                <p className="text-sm text-green-600">{successMessage}</p>
            )}
        </form>
    );
}