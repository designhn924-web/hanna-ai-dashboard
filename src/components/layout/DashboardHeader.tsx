import Link from "next/link";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 全ページ共通のヘッダー。FeatureLayout から読み込まれ、常に画面上部に固定表示される。
// タイトルはトップページへのリンクにしておく
// (スマホ幅ではサイドバーを隠しているため、ここが唯一の「ダッシュボードに戻る」導線になる)。
export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-5 sm:px-10">
      <Link
        href="/"
        className="font-serif text-xl tracking-wide text-stone-800 sm:text-2xl"
      >
        HanNa AI Dashboard
      </Link>

      <div className="flex items-center gap-3">
        {/* 通知アイコン(プレースホルダー。まだ通知機能はない) */}
        <button
          type="button"
          aria-label="通知"
          className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-700"
        >
          <svg {...iconProps} className="h-5 w-5">
            <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 12 6 8Z" />
            <path d="M10 18a2 2 0 0 0 4 0" />
          </svg>
        </button>

        {/* ユーザーアイコン(プレースホルダー。まだアカウント機能はない) */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-sm font-medium text-amber-700">
          N
        </div>
      </div>
    </header>
  );
}
