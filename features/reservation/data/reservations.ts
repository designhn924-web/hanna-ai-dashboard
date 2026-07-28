import type { Reservation } from "../types/reservation";

// 予約のダミーデータ(5件)
const dummyReservations: Reservation[] = [
  {
    id: "1",
    customerName: "田中 美咲",
    datetime: "2026/07/23 10:00",
    menu: "カット + カラー",
    status: "確定",
    memo: "頭皮が敏感。パッチテスト必須。",
  },
  {
    id: "2",
    customerName: "佐藤 陽子",
    datetime: "2026/07/23 13:30",
    menu: "パーマ",
    status: "未確定",
    memo: "明るめのカラーを好む。",
  },
  {
    id: "3",
    customerName: "鈴木 花",
    datetime: "2026/07/24 11:00",
    menu: "トリートメント",
    status: "確定",
    memo: "次回はトリートメント希望。",
  },
  {
    id: "4",
    customerName: "高橋 健一",
    datetime: "2026/07/24 15:00",
    menu: "縮毛矯正",
    status: "未確定",
    memo: "施術中は静かに過ごしたいタイプ。",
  },
  {
    id: "5",
    customerName: "伊藤 麻衣",
    datetime: "2026/07/25 12:00",
    menu: "ヘッドスパ",
    status: "キャンセル",
    memo: "香りの強いトリートメント剤はNG。",
  },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getReservations(): Reservation[] {
  return dummyReservations;
}
