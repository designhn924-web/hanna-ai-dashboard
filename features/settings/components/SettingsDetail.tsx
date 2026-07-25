import type { SettingItem } from "../types/settings";

type SettingsDetailProps = {
  // 選択されている設定項目(まだ何も選ばれていないときはundefined)
  item: SettingItem | undefined;
};

/**
 * 選択されている設定項目の詳細を表示するコンポーネント(表示専用)。
 */
export default function SettingsDetail({ item }: SettingsDetailProps) {
  if (!item) {
    return (
      <p className="text-sm text-stone-400">
        左の一覧から設定項目を選択してください
      </p>
    );
  }

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
