"use client";

import type { SettingItem } from "../types/settings";

type SettingsListProps = {
  items: SettingItem[];
  // 今選ばれている設定項目のID
  selectedId: string;
  // 設定項目がクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
};

/**
 * 設定項目の一覧を表示するコンポーネント。
 *
 * このコンポーネント自身は「どれが選ばれているか」を持たない。
 * 選択状態(selectedId)は親コンポーネントが持っていて、
 * ここではクリックされたときに onSelect 経由で親に伝えるだけにしている。
 */
export default function SettingsList({
  items,
  selectedId,
  onSelect,
}: SettingsListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => {
        const isSelected = item.id === selectedId;

        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-amber-300 bg-amber-50"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <p className="text-sm font-medium text-stone-800">
                {item.label}
              </p>
              <p className="text-xs text-stone-500">{item.description}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
