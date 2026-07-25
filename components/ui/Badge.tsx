import type { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef<"span"> を使うと、通常の<span>タグが受け取れる属性
// (id, onClick, style, aria-* など)を全部そのまま受け取れる型になる。
// className と children も、この型の中にもともと含まれている。
type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  // バッジの色味。neutralが控えめな状態(通常・未確定など)、
  // accentが目立たせたい状態(VIP・確定など)。
  tone?: "neutral" | "accent";
};

// tone ごとの色分け
const toneStyle: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-stone-100 text-stone-500",
  accent: "bg-amber-50 text-amber-700",
};

/**
 * ダッシュボード全体で使う、共通の丸型バッジコンポーネント。
 *
 * 会員ランクや予約ステータスなど、短いラベルを一覧の行内に
 * 表示するときに使う。角丸・余白・文字サイズをあらかじめ持っているので、
 * 中身(children)とtoneを渡すだけで見た目が統一されたバッジになる。
 *
 * className を渡すと、基本スタイルに追加でクラスを足せる
 * (例: キャンセル状態だけ<Badge className="line-through">で打ち消し線を足す、など)。
 */
export default function Badge({
  tone = "neutral",
  children,
  className = "",
  ...rest
}: BadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${toneStyle[tone]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
