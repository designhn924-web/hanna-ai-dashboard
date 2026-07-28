"use client";

import type { Reservation } from "../types/reservation";
import EmptyState from "@/components/ui/EmptyState";
type ReservationListProps = {
  reservations: Reservation[];
  // 今選ばれている予約のID
  selectedId: string;
  // 予約がクリックされたときに呼ばれる関数(親コンポーネントに選んだIDを伝える)
  onSelect: (id: string) => void;
};

// ステータスごとのバッジの色分け
const statusStyle: Record<Reservation["status"], string> = {
  確定: "bg-amber-50 text-amber-700",
  未確定: "bg-stone-100 text-stone-500",
  キャンセル: "bg-stone-100 text-stone-400 line-through",
};

/**
 * 予約の一覧を表示するコンポーネント。
 *
 * このコンポーネント自身は「どれが選ばれているか」を持たない。
 * 選択状態(selectedId)は親コンポーネントが持っていて、
 * ここではクリックされたときに onSelect 経由で親に伝えるだけにしている。
 */
export default function ReservationList({
  reservations,
  selectedId,
  onSelect,
}: ReservationListProps) {
  
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="予約データがありません"
        description="新しい予約を登録すると、ここに表示されます。"
      />
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {reservations.map((reservation) => {
        const isSelected = reservation.id === selectedId;

        return (
          <li key={reservation.id}>
            <button
              type="button"
              onClick={() => onSelect(reservation.id)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                isSelected
                  ? "border-amber-300 bg-amber-50"
                  : "border-stone-200 bg-white hover:bg-stone-50"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-stone-800">
                  {reservation.customerName}
                </p>
                <p className="text-xs text-stone-500">
                  {reservation.menu} ・ {reservation.datetime}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle[reservation.status]}`}
              >
                {reservation.status}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
