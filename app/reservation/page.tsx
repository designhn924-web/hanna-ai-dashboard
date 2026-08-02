"use client";

import ReservationForm from "@/features/reservation/components/ReservationForm";
import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
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
    <FeatureLayout>
      <PageHeader title="予約管理" description="来店予定と予約情報を管理します" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <Section title="予約一覧">
          <ReservationList
            reservations={reservations}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </Section>

        <Section title="予約詳細">
          <ReservationDetail reservation={selectedReservation} />
        </Section>

        <Section title="予約フォーム">
          <ReservationForm />
        </Section>
      </div>
    </FeatureLayout>
  );
}
