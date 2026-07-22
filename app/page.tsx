import FeatureLayout from "@/src/components/layout/FeatureLayout";
import MenuCard from "@/components/MenuCard";
import { navItems } from "@/src/components/layout/navItems";

export default function Home() {
  return (
    <FeatureLayout title="Dashboard">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {navItems.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
    </FeatureLayout>
  );
}
