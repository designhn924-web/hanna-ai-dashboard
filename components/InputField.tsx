"use client";

import { useId } from "react";
type InputFieldProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

/**
 * ラベル付きの1行テキスト入力。
 * 値と変更時の処理を親から受け取るだけの「制御されたコンポーネント」なので、
 * このコンポーネント自身は状態(useState)を持たない。
 */
export default function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled,
  required,
}: InputFieldProps) {
  const generatedId = useId();

  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
  <label
  htmlFor={inputId}
  className="text-sm font-medium text-stone-700"
>
    {label}
  </label>
  
  <input
  id={inputId}
      disabled={disabled}
      required={required}
        type="text"
        value={value}
        // 入力されるたびに、新しい値を親コンポーネントに伝える
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400"
      />
   </div>
  );
}
