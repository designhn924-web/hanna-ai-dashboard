import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import MenuCard from "@/components/MenuCard";
import { navItems } from "@/components/layout/navItems";

export default function Home() {
  return (
    <FeatureLayout>
      <PageHeader
        title="HanNa Dashboard"
        description="美容サロンHanNaの業務を管理するAI Dashboardです。"
      />
      <Section title="機能一覧" description="利用する機能を選択してください。">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {navItems.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </FeatureLayout>
  );
}
