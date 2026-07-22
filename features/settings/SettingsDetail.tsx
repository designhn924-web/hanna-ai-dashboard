import { getSettingItems } from "./types";

// 設定項目の詳細を表示する(今は一覧の先頭の項目を仮で表示しているだけ)
export default function SettingsDetail() {
  const [item] = getSettingItems();

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">項目名</dt>
        <dd className="mt-1 text-stone-800">{item.label}</dd>
      </div>
      <div>
        <dt className="text-stone-400">内容</dt>
        <dd className="mt-1 text-stone-800">{item.description}</dd>
      </div>
    </dl>
  );
}
