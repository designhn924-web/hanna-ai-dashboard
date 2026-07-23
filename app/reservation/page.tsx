import FeatureLayout from "@/components/layout/FeatureLayout";
import ReservationList from "@/features/reservation/ReservationList";
import ReservationDetail from "@/features/reservation/ReservationDetail";

export default function ReservationPage() {
  return (
    <FeatureLayout title="Reservation">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">予約一覧</h3>
          <ReservationList />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">予約詳細</h3>
          <ReservationDetail />
        </section>
      </div>
    </FeatureLayout>
  );
}
