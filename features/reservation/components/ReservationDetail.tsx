import type { Reservation } from "../types/reservation";

type ReservationDetailProps = {
  // 選択されている予約(まだ何も選ばれていないときはundefined)
  reservation: Reservation | undefined;
};

/**
 * 選択されている予約の詳細を表示するコンポーネント(表示専用)。
 */
export default function ReservationDetail({
  reservation,
}: ReservationDetailProps) {
  if (!reservation) {
    return (
      <p className="text-sm text-stone-400">
        左の一覧から予約を選択してください
      </p>
    );
  }

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">お客様名</dt>
        <dd className="mt-1 text-stone-800">{reservation.customerName}</dd>
      </div>
      <div>
        <dt className="text-stone-400">日時</dt>
        <dd className="mt-1 text-stone-800">{reservation.datetime}</dd>
      </div>
      <div>
        <dt className="text-stone-400">メニュー</dt>
        <dd className="mt-1 text-stone-800">{reservation.menu}</dd>
      </div>
      <div>
        <dt className="text-stone-400">ステータス</dt>
        <dd className="mt-1 text-stone-800">{reservation.status}</dd>
      </div>
    </dl>
  );
}
