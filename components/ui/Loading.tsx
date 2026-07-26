import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"div"> を使うと、通常の<div>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className も、この型の中にもともと含まれている。
type LoadingProps = ComponentPropsWithoutRef<"div"> & {
  message?: string; // スピナーの下に表示するメッセージ
};

/**
 * データ読み込み中に表示する共通コンポーネント。
 *
 * 白背景・角丸・薄いグレーの枠線の箱は EmptyState と同じ器を使い、
 * 中央揃えでスピナー(CSSのみ、animate-spin)とメッセージを表示する。
 * トラックはstone、動いている部分だけamberのアクセントにしている。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる。
 */
export default function Loading({
  message = "読み込み中...",
  className = "",
  ...rest
}: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white px-8 py-16 text-center ${className}`}
      {...rest}
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-amber-600" />
      <p className="mt-4 text-sm text-stone-500">{message}</p>
    </div>
  );
}
