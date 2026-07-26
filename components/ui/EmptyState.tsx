import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"div"> を使うと、通常の<div>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className も、この型の中にもともと含まれている。
type EmptyStateProps = ComponentPropsWithoutRef<"div"> & {
  title: string; // 「顧客がまだ登録されていません」などのメインメッセージ
  description?: string; // 補足説明(任意)
};

/**
 * データが存在しない状態(一覧が空、など)を表示する共通コンポーネント。
 *
 * 白背景・角丸・薄いグレーの枠線の箱の中に、中央揃えでメッセージだけを
 * 静かに置く。余白を広めに取ることで「空っぽ」であること自体を
 * 上品に見せる。アイコンは使わずテキストのみ。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる。
 */
export default function EmptyState({
  title,
  description,
  className = "",
  ...rest
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white px-8 py-16 text-center ${className}`}
      {...rest}
    >
      <p className="text-sm font-medium text-stone-600">{title}</p>
      {description && (
        <p className="mt-2 text-xs text-stone-400">{description}</p>
      )}
    </div>
  );
}
