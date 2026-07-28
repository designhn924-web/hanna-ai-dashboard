import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
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
    <div className="flex flex-col gap-6">
      <Card>
        <h3 className="mb-4 text-sm font-medium text-stone-700">予約情報</h3>

        <dl className="flex flex-col gap-4 text-sm">
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
            <dd className="mt-1">
              <Badge tone="accent">{reservation.status}</Badge>
            </dd>
          </div>
        </dl>
      </Card>

      <Card>
        <h3 className="mb-4 text-sm font-medium text-stone-700">
          お客様情報
        </h3>

        <dl className="flex flex-col gap-4 text-sm">
          <div>
            <dt className="text-stone-400">お客様名</dt>
            <dd className="mt-1 text-stone-800">
              {reservation.customerName}
            </dd>
          </div>
        </dl>
      </Card>

      <Card>
        <div>
          <h3 className="text-sm font-medium text-stone-700">メモ</h3>

          <p className="mt-2 text-sm text-stone-700">{reservation.memo}</p>
        </div>
      </Card>
    </div>
  );
}
