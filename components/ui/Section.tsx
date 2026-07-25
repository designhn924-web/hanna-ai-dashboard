import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"section"> を使うと、通常の<section>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className と children も、この型の中にもともと含まれている。
type SectionProps = ComponentPropsWithoutRef<"section"> & {
  title: string; // 見出し
  description?: string; // 見出しの下に添える説明文(任意)
};

/**
 * ダッシュボード内の各情報ブロック(一覧・詳細など)を囲む共通コンポーネント。
 *
 * 白背景・角丸・薄いグレーの枠線・余白(32px)をあらかじめ持っていて、
 * 見出し(title)の下にコンテンツ(children)が続く形を統一する。
 * 既存6画面(Sales/Design/Settings/Reservation/Customer/Instagram)で
 * それぞれ手書きしていた section+h3 のパターンをそのまま踏襲している。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる。
 */
export default function Section({
  title,
  description,
  children,
  className = "",
  ...rest
}: SectionProps) {
  return (
    <section
      className={`rounded-2xl border border-stone-200 bg-white p-8 ${className}`}
      {...rest}
    >
      <div className="mb-6">
        <h3 className="text-sm font-medium text-stone-500">{title}</h3>
        {description && (
          <p className="mt-1 text-xs text-stone-400">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
