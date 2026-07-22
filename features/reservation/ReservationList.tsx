import { getReservations } from "./types";

const statusStyle: Record<string, string> = {
  確定: "bg-amber-50 text-amber-700",
  未確定: "bg-stone-100 text-stone-500",
  キャンセル: "bg-stone-100 text-stone-400 line-through",
};

// 予約の一覧を表示する(表示専用コンポーネント)
export default function ReservationList() {
  const reservations = getReservations();

  return (
    <ul className="flex flex-col gap-3">
      {reservations.map((reservation) => (
        <li
          key={reservation.id}
          className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3"
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
        </li>
      ))}
    </ul>
  );
}
