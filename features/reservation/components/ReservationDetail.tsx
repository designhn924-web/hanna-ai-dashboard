"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import PrimaryButton from "@/components/ui/PrimaryButton";
import type { Reservation } from "@/types/reservation";
import { updateReservationStatus } from "../data/reservations";

type ReservationDetailProps = {
  // 選択されている予約(まだ何も選ばれていないときはundefined)
  reservation?: Reservation;
  // ステータス更新が成功したときに、更新後のReservationを親に渡す
  onStatusChange: (updated: Reservation) => void;
};

// ステータスごとのバッジの色分け(ReservationListの色分けと揃える)
const statusTone: Record<Reservation["status"], "neutral" | "accent"> = {
  確定: "accent",
  未確定: "neutral",
  キャンセル: "neutral",
};

/**
 * 選択されている予約の詳細を表示するコンポーネント。
 * ステータスの確認と、「確定にする」「キャンセルする」への変更を行える。
 */
export default function ReservationDetail({
  reservation,
  onStatusChange,
}: ReservationDetailProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!reservation) {
    return (
      <p className="text-sm text-stone-400">予約を選択してください</p>
    );
  }

  const handleChangeStatus = async (status: Reservation["status"]) => {
    setErrorMessage("");
    setIsUpdating(true);

    try {
      const updated = await updateReservationStatus(reservation.id, status);
      onStatusChange(updated);
    } catch (error) {
      console.error("予約ステータスの更新に失敗しました:", error);
      setErrorMessage(
        "更新に失敗しました。時間をおいて再度お試しください。",
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card>
      <dl className="flex flex-col gap-4 text-sm">
        <div>
          <dt className="text-stone-400">お客様名</dt>
          <dd className="mt-1 text-stone-800">{reservation.customerName}</dd>
        </div>

        <div>
          <dt className="text-stone-400">メールアドレス</dt>
          <dd className="mt-1 text-stone-800">{reservation.email}</dd>
        </div>

        <div>
          <dt className="text-stone-400">メニュー</dt>
          <dd className="mt-1 text-stone-800">{reservation.menu}</dd>
        </div>

        <div>
          <dt className="text-stone-400">ステータス</dt>
          <dd className="mt-1">
            <Badge tone={statusTone[reservation.status]}>
              {reservation.status}
            </Badge>
          </dd>
        </div>

        <div>
          <dt className="text-stone-400">メモ</dt>
          <dd className="mt-1 text-stone-800">{reservation.memo}</dd>
        </div>
      </dl>

      {reservation.status !== "キャンセル" && (
        <div className="mt-6 flex flex-wrap gap-3">
          {reservation.status !== "確定" && (
            <PrimaryButton
              onClick={() => handleChangeStatus("確定")}
              disabled={isUpdating}
            >
              確定にする
            </PrimaryButton>
          )}

          <PrimaryButton
            onClick={() => handleChangeStatus("キャンセル")}
            disabled={isUpdating}
          >
            キャンセルする
          </PrimaryButton>
        </div>
      )}

      {errorMessage && (
        <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
      )}
    </Card>
  );
}
