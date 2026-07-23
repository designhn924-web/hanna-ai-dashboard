import type { ReactNode } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export type NavItem = {
  title: string;
  // サイドバーに表示する英語ラベル(今回の設計ルールで指定されたもの)
  navLabel: string;
  description: string;
  href: string;
  icon: ReactNode;
};

// ダッシュボードの6機能をここに集約しておく。
// トップページのメニュー一覧(MenuCard)とサイドバー(DashboardSidebar)の
// 両方から同じ配列を参照することで、項目の追加・変更を1箇所で済ませられる。
export const navItems: NavItem[] = [
  {
    title: "Instagram",
    navLabel: "Instagram",
    description: "投稿テンプレートを作成",
    href: "/instagram",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "売上",
    navLabel: "Sales",
    description: "売上を確認・管理",
    href: "/sales",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M4 19V11" />
        <path d="M10 19V5" />
        <path d="M16 19v-6" />
        <path d="M4 19h16" />
      </svg>
    ),
  },
  {
    title: "予約",
    navLabel: "Reservation",
    description: "予約状況を確認",
    href: "/reservation",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
      </svg>
    ),
  },
  {
    title: "電子カルテ",
    navLabel: "Customer",
    description: "顧客カルテを管理",
    href: "/customer",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3h6v3H9z" />
        <path d="M8 11h8" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    navLabel: "Design",
    description: "サロンサイトを編集",
    href: "/design",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="6" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="11" cy="6" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "設定",
    navLabel: "Settings",
    description: "アカウント設定",
    href: "/settings",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
        <path d="M3 12h2" />
        <path d="M19 12h2" />
        <path d="M5.6 5.6l1.4 1.4" />
        <path d="M17 17l1.4 1.4" />
        <path d="M18.4 5.6L17 7" />
        <path d="M7 17l-1.4 1.4" />
      </svg>
    ),
  },
];
