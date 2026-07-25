import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"div"> を使うと、通常の<div>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className と children も、この型の中にもともと含まれている。
type CardProps = ComponentPropsWithoutRef<"div">;

/**
 * ダッシュボード全体で使う、共通の白いカードコンポーネント。
 *
 * 白背景・角丸・薄い影・余白(24px)・薄いグレーの枠線を
 * あらかじめ持っているので、中身(children)を渡すだけで
 * 見た目が統一されたカードになる。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる
 * (例: <Card className="max-w-sm">で幅を狭くする、など)。
 *
 * それ以外の<div>の属性(onClick や id など)は ...rest として
 * まとめて受け取り、そのまま<div>に渡している。
 * こうしておくことで、後から「クリックできるカード」などの
 * 使い方が必要になっても、Card自体を書き換えずに済む。
 */
export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow duration-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
