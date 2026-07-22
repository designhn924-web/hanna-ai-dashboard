export type SalesRecord = {
  id: string;
  date: string;
  menu: string;
  amount: number;
};

const dummySalesRecords: SalesRecord[] = [
  { id: "1", date: "2026/07/20", menu: "カット + カラー", amount: 12000 },
  { id: "2", date: "2026/07/21", menu: "パーマ", amount: 9500 },
  { id: "3", date: "2026/07/21", menu: "トリートメント", amount: 6000 },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getSalesRecords(): SalesRecord[] {
  return dummySalesRecords;
}
