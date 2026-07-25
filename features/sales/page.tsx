"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import SalesList from "./components/SalesList";
import SalesDetail from "./components/SalesDetail";
import { getSalesRecords } from "./data/sales";

const records = getSalesRecords();

/**
 * Sales機能のメインコンポーネント。
 *
 * 「今どの売上が選ばれているか(selectedId)」をこのコンポーネントの
 * useState で一元管理し、一覧(SalesList)と詳細(SalesDetail)の
 * 両方に配ることで、クリックした売上の詳細がすぐ右側に表示される。
 */
export default function SalesPage() {
  // 最初は一覧の先頭の売上が選ばれた状態にしておく
  const [selectedId, setSelectedId] = useState(records[0]?.id ?? "");

  // 選ばれているIDから、対応する売上データを探す
  const selectedRecord = records.find((record) => record.id === selectedId);

  return (
    <FeatureLayout title="Sales">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">売上一覧</h3>
          <SalesList
            records={records}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">売上詳細</h3>
          <SalesDetail record={selectedRecord} />
        </section>
      </div>
    </FeatureLayout>
  );
}
