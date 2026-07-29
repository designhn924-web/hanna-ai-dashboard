"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
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
    <FeatureLayout>
      <PageHeader
        title="デザイン編集"
        description="ページのセクションを編集し、プレビュー確認できます"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <Section title="編集メニュー一覧">
          <DesignSectionList
            sections={sections}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </Section>

        <Section title="プレビュー・詳細エリア">
          <DesignPreview section={selectedSection} />
        </Section>
      </div>
    </FeatureLayout>
  );
}
