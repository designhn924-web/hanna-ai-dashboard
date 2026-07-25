"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import SettingsList from "./components/SettingsList";
import SettingsDetail from "./components/SettingsDetail";
import { getSettingItems } from "./data/settings";

const items = getSettingItems();

/**
 * Settings機能のメインコンポーネント。
 *
 * 「今どの設定項目が選ばれているか(selectedId)」をこのコンポーネントの
 * useState で一元管理し、一覧(SettingsList)と詳細(SettingsDetail)の
 * 両方に配ることで、クリックした設定項目の詳細がすぐ右側に表示される。
 */
export default function SettingsPage() {
  // 最初は一覧の先頭の設定項目が選ばれた状態にしておく
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");

  // 選ばれているIDから、対応する設定項目データを探す
  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <FeatureLayout title="Settings">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            設定項目一覧
          </h3>
          <SettingsList
            items={items}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            設定詳細
          </h3>
          <SettingsDetail item={selectedItem} />
        </section>
      </div>
    </FeatureLayout>
  );
}
