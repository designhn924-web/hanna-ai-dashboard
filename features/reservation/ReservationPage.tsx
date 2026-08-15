"use client";

import { useState } from "react";
import ReservationList from "./components/ReservationList";
import ReservationDetail from "./components/ReservationDetail";
import ReservationForm from "@/features/reservation/components/ReservationForm";
import { getReservations } from "./data/reservations";

const reservations = getReservations();

export default function ReservationPage() {
  // 今どの予約が選ばれているかをIDで管理する
  const [selectedId, setSelectedId] = useState(reservations[0]?.id ?? "");

  // 選ばれているIDから、対応する予約データを探す
  const selectedReservation = reservations.find(
    (reservation) => reservation.id === selectedId,
  );

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

      <ReservationForm />
    </div>
  );
}
