"use client";

import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

/**
 * サイト全体で使う、塗りつぶしスタイルのメインボタン。
 * 押されたときの処理(onClick)は呼び出し側から渡す。
 */
export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="rounded-full bg-stone-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}
