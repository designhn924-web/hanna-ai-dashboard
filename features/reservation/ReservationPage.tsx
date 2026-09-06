"use client";

import { useState } from "react";
import ReservationList from "./components/ReservationList";
import ReservationDetail from "./components/ReservationDetail";
import ReservationForm from "@/features/reservation/components/ReservationForm";
import { getReservations } from "./data/reservations";
import type { Reservation } from "@/types/reservation";

export default function ReservationPage() {
  // 予約一覧をstateで持つ(新規予約を追加できるように)
  const [reservations, setReservations] = useState<Reservation[]>(() =>
    getReservations(),
  );

  // 今どの予約が選ばれているかをIDで管理する
  const [selectedId, setSelectedId] = useState(reservations[0]?.id ?? "");

  // 選ばれているIDから、対応する予約データを探す
  const selectedReservation = reservations.find(
    (reservation) => reservation.id === selectedId,
  );

  // 新規予約が作成されたら、一覧の末尾に追加する
  const handleCreateReservation = (newReservation: Reservation) => {
    setReservations((prev) => [...prev, newReservation]);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <ReservationList
          reservations={reservations}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <ReservationDetail reservation={selectedReservation} />
      </div>

      <ReservationForm onCreate={handleCreateReservation} />
    </div>
  );
}
