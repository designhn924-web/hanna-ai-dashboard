"use client";

import { useId } from "react";

// セレクトボックスの選択肢1つ分の型
export type SelectOption = {
  label: string; // 画面に表示される文字
  value: string; // 実際に扱われる値
};

type SelectFieldProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
  required?: boolean;
};

/**
 * ラベル付きのセレクトボックス。
 * options に渡した配列をもとに <option> を自動で生成する。
 */
export default function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  disabled,
  required,
}: SelectFieldProps) {

  const generatedId = useId();

  const selectId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
<label
  htmlFor={selectId}
  className="text-sm font-medium text-stone-700"
>
  {label}
</label>
<select
  id={selectId}
  disabled={disabled}
  required={required}
  value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </div>
  );
}
