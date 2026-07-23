"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import ReservationList from "@/features/reservation/components/ReservationList";
import ReservationDetail from "@/features/reservation/components/ReservationDetail";
import { getReservations } from "@/features/reservation/data/reservations";

const reservations = getReservations();

export default function ReservationPage() {
  // 今どの予約が選ばれているかをIDで管理する。
  // 最初は一覧の先頭の予約が選ばれた状態にしておく。
  const [selectedId, setSelectedId] = useState(reservations[0]?.id ?? "");

  // 選ばれているIDから、対応する予約データを探す
  const selectedReservation = reservations.find(
    (reservation) => reservation.id === selectedId,
  );

  return (
    <FeatureLayout title="Reservation">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">予約一覧</h3>
          <ReservationList
            reservations={reservations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">予約詳細</h3>
          <ReservationDetail reservation={selectedReservation} />
        </section>
      </div>
    </FeatureLayout>
  );
}
