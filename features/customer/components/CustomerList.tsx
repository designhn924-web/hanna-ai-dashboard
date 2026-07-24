"use client";

import type { Customer } from "../types/customer";

type CustomerListProps = {
  customers: Customer[];
  // 今選ばれている顧客のID
  selectedId: string;
  // 顧客がクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
};

// 会員ランクごとのバッジの色分け
const rankStyle: Record<Customer["rank"], string> = {
  VIP: "bg-amber-50 text-amber-700",
  通常: "bg-stone-100 text-stone-500",
};

/**
 * 顧客の一覧を表示するコンポーネント。
 *
 * このコンポーネント自身は「どれが選ばれているか」を持たない。
 * 選択状態(selectedId)は親コンポーネントが持っていて、
 * ここではクリックされたときに onSelect 経由で親に伝えるだけにしている。
 */
export default function CustomerList({
  customers,
  selectedId,
  onSelect,
}: CustomerListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {customers.map((customer) => {
        const isSelected = customer.id === selectedId;

        return (
          <li key={customer.id}>
            <button
              type="button"
              onClick={() => onSelect(customer.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-amber-300 bg-amber-50"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-stone-800">
                  {customer.name}
                </p>
                <p className="text-xs text-stone-500">
                  最終来店: {customer.lastVisit}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${rankStyle[customer.rank]}`}
              >
                {customer.rank}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
