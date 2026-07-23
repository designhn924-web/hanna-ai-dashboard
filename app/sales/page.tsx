import FeatureLayout from "@/components/layout/FeatureLayout";
import SalesList from "@/features/sales/SalesList";
import SalesDetail from "@/features/sales/SalesDetail";

export default function SalesPage() {
  return (
    <FeatureLayout title="Sales">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">売上一覧</h3>
          <SalesList />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">売上詳細</h3>
          <SalesDetail />
        </section>
      </div>
    </FeatureLayout>
  );
}
