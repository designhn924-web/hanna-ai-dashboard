import { getSettingItems } from "./types";

// 設定項目の一覧を表示する(表示専用コンポーネント)
export default function SettingsList() {
  const items = getSettingItems();

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-xl border border-stone-200 px-4 py-3"
        >
          <p className="text-sm font-medium text-stone-800">{item.label}</p>
          <p className="text-xs text-stone-500">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
