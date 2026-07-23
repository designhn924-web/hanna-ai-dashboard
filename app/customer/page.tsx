import FeatureLayout from "@/components/layout/FeatureLayout";
import CustomerList from "@/features/customer/CustomerList";
import CustomerDetail from "@/features/customer/CustomerDetail";

export default function CustomerPage() {
  return (
    <FeatureLayout title="Customer">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">顧客一覧</h3>
          <CustomerList />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">カルテ詳細</h3>
          <CustomerDetail />
        </section>
      </div>
    </FeatureLayout>
  );
}
