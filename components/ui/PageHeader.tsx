import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"div"> を使うと、通常の<div>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className も、この型の中にもともと含まれている。
type PageHeaderProps = ComponentPropsWithoutRef<"div"> & {
  title: string; // ページタイトル
  description?: string; // タイトルの下に添える説明文(任意)
};

/**
 * 各ページ上部のタイトル・説明文エリアを統一する共通コンポーネント。
 *
 * 見出しのスタイル(font-serif・stone-800)は
 * components/layout/FeatureLayout.tsx の既存の見出しと同じもの。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる。
 */
export default function PageHeader({
  title,
  description,
  className = "",
  ...rest
}: PageHeaderProps) {
  return (
    <div className={`mb-8 ${className}`} {...rest}>
      <h2 className="font-serif text-2xl text-stone-800 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-stone-500">{description}</p>
      )}
    </div>
  );
}
