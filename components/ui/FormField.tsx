import type { ReactNode } from "react";

// このコンポーネントが受け取れるprops(部品に渡す材料)の型定義
type FormFieldProps = {
  // ラベルの文字(必須)
  label: string;
  // ラベルの下に表示する、input や select などの中身
  children: ReactNode;
  // ラベルの下に小さく表示する補足説明(任意)
  description?: string;
  // trueのときだけ「※必須」を表示する
  required?: boolean;
};

/**
 * フォームの入力欄1つ分をまとめる共通コンポーネント。
 *
 * 「ラベル + 入力欄(children) + 補足説明」を縦に並べた
 * ひとかたまりのブロックを作る。ダッシュボード内のフォームで
 * 入力欄を追加するたびに同じレイアウトを書かなくて済むようにする。
 *
 * 使い方の例:
 * <FormField label="お名前" required description="フルネームで入力してください">
 *   <input type="text" />
 * </FormField>
 */
export default function FormField({
  label,
  children,
  description,
  required = false,
}: FormFieldProps) {
  return (
    // flex-col + gap で「ラベル → 入力欄 → 説明」を縦並びに、
    // 余白をつけて並べる
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-1 text-sm font-medium text-stone-700">
        {label}
        {/* requiredがtrueのときだけ「※必須」を表示 */}
        {required && <span className="text-xs font-normal text-amber-700">※必須</span>}
      </label>

      {/* input や select など、外から渡された中身をそのまま表示 */}
      {children}

      {/* descriptionが渡されたときだけ、小さい文字で補足を表示 */}
      {description && <p className="text-xs text-stone-500">{description}</p>}
    </div>
  );
}
