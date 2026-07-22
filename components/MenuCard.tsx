import type { ReactNode } from "react";
import Link from "next/link";

type MenuCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  // 遷移先がある場合だけ指定する(未指定ならリンクなしのカードになる)
  href?: string;
};

export default function MenuCard({ title, description, icon, href }: MenuCardProps) {
  const cardClassName =
    "group flex flex-col items-start gap-4 rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-lg";

  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-medium text-stone-800">{title}</h2>
        <p className="mt-1 text-sm text-stone-500">{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
