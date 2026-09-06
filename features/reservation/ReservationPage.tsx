"use client";

import { useEffect, useState } from "react";
import ReservationList from "./components/ReservationList";
import ReservationDetail from "./components/ReservationDetail";
import ReservationForm from "@/features/reservation/components/ReservationForm";
import { getReservations } from "./data/reservations";
import type { Reservation } from "@/types/reservation";

export default function ReservationPage() {
  // 予約一覧をstateで持つ(新規予約を追加できるように)
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // 今どの予約が選ばれているかをIDで管理する
  const [selectedId, setSelectedId] = useState("");

  // マウント時にSupabaseから予約一覧を取得する
  useEffect(() => {
    let active = true;

    getReservations().then((data) => {
      if (!active) return;
      setReservations(data);
      setSelectedId((current) => current || (data[0]?.id ?? ""));
    });

    return () => {
      active = false;
    };
  }, []);

  // 選ばれているIDから、対応する予約データを探す
  const selectedReservation = reservations.find(
    (reservation) => reservation.id === selectedId,
  );

  // 新規予約が作成されたら、一覧の末尾に追加する
  const handleCreateReservation = (newReservation: Reservation) => {
    setReservations((prev) => [...prev, newReservation]);
  };

  // ステータスが更新されたら、一覧の対象1件だけを差し替える
  const handleStatusChange = (updated: Reservation) => {
    setReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === updated.id ? updated : reservation,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <ReservationList
          reservations={reservations}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <ReservationDetail
          reservation={selectedReservation}
          onStatusChange={handleStatusChange}
        />
      </div>

      <ReservationForm onCreate={handleCreateReservation} />
    </div>
  );
}
