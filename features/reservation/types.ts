export type Reservation = {
  id: string;
  customerName: string;
  menu: string;
  datetime: string;
  status: "確定" | "未確定" | "キャンセル";
};

const dummyReservations: Reservation[] = [
  {
    id: "1",
    customerName: "田中 美咲",
    menu: "カット + カラー",
    datetime: "2026/07/23 10:00",
    status: "確定",
  },
  {
    id: "2",
    customerName: "佐藤 陽子",
    menu: "パーマ",
    datetime: "2026/07/23 13:30",
    status: "未確定",
  },
  {
    id: "3",
    customerName: "鈴木 花",
    menu: "トリートメント",
    datetime: "2026/07/24 11:00",
    status: "確定",
  },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getReservations(): Reservation[] {
  return dummyReservations;
}
