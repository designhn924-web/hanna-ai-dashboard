"use client";

import type { DesignSection } from "../types/design";

type DesignSectionListProps = {
  sections: DesignSection[];
  // 今選ばれているセクションのID
  selectedId: string;
  // セクションがクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
};

/**
 * 編集できるサロンサイトのセクション一覧を表示するコンポーネント。
 *
 * このコンポーネント自身は「どれが選ばれているか」を持たない。
 * 選択状態(selectedId)は親コンポーネントが持っていて、
 * ここではクリックされたときに onSelect 経由で親に伝えるだけにしている。
 */
export default function DesignSectionList({
  sections,
  selectedId,
  onSelect,
}: DesignSectionListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {sections.map((section) => {
        const isSelected = section.id === selectedId;

        return (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => onSelect(section.id)}
              className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-amber-300 bg-amber-50"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <p className="text-sm font-medium text-stone-800">
                {section.label}
              </p>
              <p className="text-xs text-stone-500">{section.description}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
