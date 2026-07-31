"use client";

import { useId } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type RHFTextAreaFieldProps = {
  label: string;
  registration: UseFormRegisterReturn;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
};

/**
 * React Hook Form用の、ラベル付き複数行テキスト入力。
 * TextAreaField と同じ見た目・考え方をベースに、値の管理(state/onChange)を
 * useForm の register に任せる形に置き換えたもの。
 */
export default function RHFTextAreaField({
  label,
  registration,
  placeholder,
  rows = 4,
  required,
  disabled,
  errorMessage,
}: RHFTextAreaFieldProps) {
  const generatedId = useId();

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={generatedId}
        className="text-sm font-medium text-stone-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">※必須</span>}
      </label>

      <textarea
        id={generatedId}
        {...registration}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        className="resize-none rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400"
      />

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
