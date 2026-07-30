"use client";

import { useId } from "react";

type TextAreaFieldProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
};
/**
 * ラベル付きの複数行テキスト入力(本文など長い文章向け)。
 * InputField と同じ考え方で、値の管理は呼び出し側(親)に任せる。
 */
export default function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled,
  required,
}: TextAreaFieldProps) {

  const generatedId = useId();

  const textAreaId = id ?? generatedId;

  return (
<div className="flex flex-col gap-2">
  <label
    htmlFor={textAreaId}
    className="text-sm font-medium text-stone-700"
  >
    {label}
  </label>
  <textarea
  id={textAreaId}
  disabled={disabled}
  required={required}
  value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="resize-none rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400"
      />
    </div>
  );
}
