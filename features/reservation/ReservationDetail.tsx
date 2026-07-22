import { getReservations } from "./types";

// 予約詳細を表示する(今は一覧の先頭の予約を仮で表示しているだけ)
export default function ReservationDetail() {
  const [reservation] = getReservations();

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">お客様名</dt>
        <dd className="mt-1 text-stone-800">{reservation.customerName}</dd>
      </div>
      <div>
        <dt className="text-stone-400">メニュー</dt>
        <dd className="mt-1 text-stone-800">{reservation.menu}</dd>
      </div>
      <div>
        <dt className="text-stone-400">日時</dt>
        <dd className="mt-1 text-stone-800">{reservation.datetime}</dd>
      </div>
      <div>
        <dt className="text-stone-400">ステータス</dt>
        <dd className="mt-1 text-stone-800">{reservation.status}</dd>
      </div>
    </dl>
  );
}
