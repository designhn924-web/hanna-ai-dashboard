"use client";

import { useId, type ComponentProps } from "react";

// セレクトボックスの選択肢1つ分の型
export type SelectOption = {
  label: string; // 画面に表示される文字
  value: string; // 実際に扱われる値
};

// ComponentProps<"select"> を使うと、通常の<select>タグが受け取れる属性
// (value, onChange, name, disabled, required, ref など)を
// 全部そのまま受け取れる型になる。
// React Hook Formの register("項目名") を返り値ごと
// <SelectField {...register("項目名")} /> のようにスプレッドすれば、
// name/onChange/onBlur/ref がそのままこの型で受け取れて連携できる。
type SelectFieldProps = ComponentProps<"select"> & {
  label: string;
  options: SelectOption[];
  // バリデーションエラーがあるときだけ渡す(react-hook-formのerrors.xxx.messageなど)
  error?: string;
};

/**
 * ラベル付きのセレクトボックス。
 * options に渡した配列をもとに <option> を自動で生成する。
 *
 * value/onChangeを直接渡す通常の使い方もできるし、
 * React Hook Formの register結果をそのままスプレッドしても使える。
 */
export default function SelectField({
  label,
  options,
  error,
  id,
  className = "",
  ...rest
}: SelectFieldProps) {
  const generatedId = useId();

  // idが渡されなかった場合は、自動生成したidを使う
  const selectId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={selectId} className="text-sm font-medium text-stone-700">
        {label}
      </label>

      <select
        id={selectId}
        // name/onChange/onBlur/ref/value/disabled/required など、
        // register()やvalue/onChangeで渡された属性がここに入ってくる
        {...rest}
        className={`rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-800 outline-none transition-colors focus:border-amber-400 ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* errorが渡されたときだけ、赤字でエラーを表示 */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
