"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFInputField from "@/components/RHFInputField";
import RHFTextAreaField from "@/components/RHFTextAreaField";
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
        </form>
    );
}