"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// トップページ(ダッシュボード自体)への項目は、6機能とは別に先頭に固定で置く
const dashboardItem = {
  navLabel: "Dashboard",
  href: "/",
  icon: (
    <svg {...iconProps} className="h-5 w-5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
};

// 現在いるページを判定してハイライトする必要があるため、
// このコンポーネントだけ "use client" にしている(usePathnameはクライアント専用のフック)。
export default function DashboardSidebar() {
  const pathname = usePathname();
  const links = [dashboardItem, ...navItems];

  return (
    <nav className="hidden w-56 shrink-0 border-r border-stone-200 bg-stone-50 px-4 py-8 lg:block">
      <ul className="flex flex-col gap-1">
        {links.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-amber-50 text-amber-700"
                    : "text-stone-600 hover:bg-white hover:text-stone-800"
                }`}
              >
                <span className="h-5 w-5">{item.icon}</span>
                {item.navLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
