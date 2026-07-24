import type { Customer } from "../types/customer";

// 顧客のダミーデータ(5件)
const dummyCustomers: Customer[] = [
  {
    id: "1",
    name: "田中 美咲",
    phone: "090-1234-5678",
    email: "misaki.tanaka@example.com",
    rank: "VIP",
    lastVisit: "2026/06/15",
    treatmentHistory: [
      { date: "2026/06/15", menu: "カット + カラー" },
      { date: "2026/04/20", menu: "トリートメント" },
    ],
    memo: "頭皮が敏感。パッチテスト必須。",
  },
  {
    id: "2",
    name: "佐藤 陽子",
    phone: "090-2345-6789",
    email: "yoko.sato@example.com",
    rank: "通常",
    lastVisit: "2026/05/28",
    treatmentHistory: [{ date: "2026/05/28", menu: "パーマ" }],
    memo: "明るめのカラーを好む。",
  },
  {
    id: "3",
    name: "鈴木 花",
    phone: "090-3456-7890",
    email: "hana.suzuki@example.com",
    rank: "VIP",
    lastVisit: "2026/07/02",
    treatmentHistory: [
      { date: "2026/07/02", menu: "カット" },
      { date: "2026/05/10", menu: "トリートメント" },
      { date: "2026/03/08", menu: "カット + カラー" },
    ],
    memo: "次回はトリートメント希望。",
  },
  {
    id: "4",
    name: "高橋 健一",
    phone: "090-4567-8901",
    email: "kenichi.takahashi@example.com",
    rank: "通常",
    lastVisit: "2026/07/10",
    treatmentHistory: [{ date: "2026/07/10", menu: "縮毛矯正" }],
    memo: "施術中は静かに過ごしたいタイプ。",
  },
  {
    id: "5",
    name: "伊藤 麻衣",
    phone: "090-5678-9012",
    email: "mai.ito@example.com",
    rank: "通常",
    lastVisit: "2026/06/30",
    treatmentHistory: [
      { date: "2026/06/30", menu: "ヘッドスパ" },
      { date: "2026/04/15", menu: "カット" },
    ],
    memo: "香りの強いトリートメント剤はNG。",
  },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getCustomers(): Customer[] {
  return dummyCustomers;
}
