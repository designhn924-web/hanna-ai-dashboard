import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

type FeatureLayoutProps = {
  // Main(Sidebarの右側)に表示する中身。
  // 各ページ側で Left Panel / Right Panel の2カラムを組み立てて渡す。
  children: ReactNode;
};

// ダッシュボードの各機能ページで共通して使うレイアウト。
// 構成: Header(全ページ共通) → Sidebar + Main という並び。
// ページタイトルの表示は PageHeader が担当するため、ここでは扱わない。
export default function FeatureLayout({ children }: FeatureLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />

      <div className="flex flex-1">
        <DashboardSidebar />

        <main className="flex-1 bg-stone-50 p-6 sm:p-10">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
