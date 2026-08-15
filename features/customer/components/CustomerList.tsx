"use client";

import type { Customer } from "@/types/customer";
import EmptyState from "@/components/ui/EmptyState";
type CustomerListProps = {
  customers: Customer[];
  // 今選ばれている顧客のID
  selectedId: string;
  // 顧客がクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
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
  
  if (customers.length === 0) {
    return (
      <EmptyState
        title="顧客データがありません"
        description="新しい顧客を登録すると、ここに表示されます。"
      />
    );
  }
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
                  登録日: {customer.createdAt}
                </p>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
