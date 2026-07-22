export type Customer = {
  id: string;
  name: string;
  lastVisit: string;
  memo: string;
};

const dummyCustomers: Customer[] = [
  {
    id: "1",
    name: "田中 美咲",
    lastVisit: "2026/06/15",
    memo: "頭皮が敏感。パッチテスト必須。",
  },
  {
    id: "2",
    name: "佐藤 陽子",
    lastVisit: "2026/05/28",
    memo: "明るめのカラーを好む。",
  },
  {
    id: "3",
    name: "鈴木 花",
    lastVisit: "2026/07/02",
    memo: "次回はトリートメント希望。",
  },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getCustomers(): Customer[] {
  return dummyCustomers;
}
