"use client";

import type { SalesRecord } from "../types/sales";

type SalesListProps = {
  records: SalesRecord[];
  // 今選ばれている売上のID
  selectedId: string;
  // 売上がクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
};

/**
 * 売上の一覧を表示するコンポーネント。
 *
 * このコンポーネント自身は「どれが選ばれているか」を持たない。
 * 選択状態(selectedId)は親コンポーネントが持っていて、
 * ここではクリックされたときに onSelect 経由で親に伝えるだけにしている。
 */
export default function SalesList({
  records,
  selectedId,
  onSelect,
}: SalesListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {records.map((record) => {
        const isSelected = record.id === selectedId;

        return (
          <li key={record.id}>
            <button
              type="button"
              onClick={() => onSelect(record.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-amber-300 bg-amber-50"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-stone-800">
                  {record.menu}
                </p>
                <p className="text-xs text-stone-500">{record.date}</p>
              </div>
              <span className="text-sm font-medium text-amber-700">
                ¥{record.amount.toLocaleString()}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
