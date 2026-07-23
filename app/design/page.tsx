import FeatureLayout from "@/components/layout/FeatureLayout";
import DesignSectionList from "@/features/design/DesignSectionList";
import DesignPreview from "@/features/design/DesignPreview";

export default function DesignPage() {
  return (
    <FeatureLayout title="Design">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            編集メニュー一覧
          </h3>
          <DesignSectionList />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            プレビュー・詳細エリア
          </h3>
          <DesignPreview />
        </section>
      </div>
    </FeatureLayout>
  );
}
