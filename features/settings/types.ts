export type SettingItem = {
  id: string;
  label: string;
  description: string;
};

const dummySettingItems: SettingItem[] = [
  { id: "1", label: "アカウント情報", description: "サロン名・連絡先の変更" },
  { id: "2", label: "通知設定", description: "予約通知の受け取り方法" },
  { id: "3", label: "連携サービス", description: "Instagram・カレンダー連携" },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getSettingItems(): SettingItem[] {
  return dummySettingItems;
}
