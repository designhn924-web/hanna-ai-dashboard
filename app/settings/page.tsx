import FeatureLayout from "@/components/layout/FeatureLayout";
import SettingsList from "@/features/settings/SettingsList";
import SettingsDetail from "@/features/settings/SettingsDetail";

export default function SettingsPage() {
  return (
    <FeatureLayout title="Settings">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            設定項目一覧
          </h3>
          <SettingsList />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">設定詳細</h3>
          <SettingsDetail />
        </section>
      </div>
    </FeatureLayout>
  );
}
