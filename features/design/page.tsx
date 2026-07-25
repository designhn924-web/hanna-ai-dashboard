"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import DesignSectionList from "./components/DesignSectionList";
import DesignPreview from "./components/DesignPreview";
import { getDesignSections } from "./data/sections";

const sections = getDesignSections();

/**
 * Design機能のメインコンポーネント。
 *
 * 「今どのセクションが選ばれているか(selectedId)」をこのコンポーネントの
 * useState で一元管理し、一覧(DesignSectionList)とプレビュー(DesignPreview)の
 * 両方に配ることで、クリックしたセクションのプレビューがすぐ右側に表示される。
 */
export default function DesignPage() {
  // 最初は一覧の先頭のセクションが選ばれた状態にしておく
  const [selectedId, setSelectedId] = useState(sections[0]?.id ?? "");

  // 選ばれているIDから、対応するセクションデータを探す
  const selectedSection = sections.find(
    (section) => section.id === selectedId,
  );

  return (
    <FeatureLayout title="Design">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            編集メニュー一覧
          </h3>
          <DesignSectionList
            sections={sections}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            プレビュー・詳細エリア
          </h3>
          <DesignPreview section={selectedSection} />
        </section>
      </div>
    </FeatureLayout>
  );
}
