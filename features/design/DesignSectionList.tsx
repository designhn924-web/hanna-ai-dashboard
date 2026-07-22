import { getDesignSections } from "./types";

// 編集できるサロンサイトのセクション一覧を表示する(表示専用コンポーネント)
export default function DesignSectionList() {
  const sections = getDesignSections();

  return (
    <ul className="flex flex-col gap-3">
      {sections.map((section) => (
        <li
          key={section.id}
          className="rounded-xl border border-stone-200 px-4 py-3"
        >
          <p className="text-sm font-medium text-stone-800">{section.label}</p>
          <p className="text-xs text-stone-500">{section.description}</p>
        </li>
      ))}
    </ul>
  );
}
