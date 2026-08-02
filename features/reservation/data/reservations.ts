import type { Reservation } from "@/types/reservation";

// 予約のダミーデータ(5件)
const dummyReservations: Reservation[] = [
  {
    id: "1",
    customerName: "田中 美咲",
    email: "misaki.tanaka@example.com",
    datetime: "2026/08/03 10:00",
    menu: "まつげパーマ",
    status: "確定",
    memo: "自然なカール希望。",
  },
  {
    id: "2",
    customerName: "佐藤 陽子",
    email: "yoko.sato@example.com",
    datetime: "2026/08/03 13:30",
    menu: "まつげエクステ",
    status: "未確定",
    memo: "ナチュラルな仕上がり希望。",
  },
  {
    id: "3",
    customerName: "鈴木 花",
    email: "hana.suzuki@example.com",
    datetime: "2026/08/04 11:00",
    menu: "アイブロウ",
    status: "確定",
    memo: "眉の形を相談したい。",
  },
  {
    id: "4",
    customerName: "高橋 健一",
    email: "kenichi.takahashi@example.com",
    datetime: "2026/08/04 15:00",
    menu: "まつげパーマ",
    status: "未確定",
    memo: "初回なので丁寧に説明希望。",
  },
  {
    id: "5",
    customerName: "伊藤 麻衣",
    email: "mai.ito@example.com",
    datetime: "2026/08/05 12:00",
    menu: "まつげエクステ",
    status: "キャンセル",
    memo: "予定変更のためキャンセル。",
  },
];

// 現在はダミーデータを返している。
// 将来的にはSupabaseから取得する処理へ置き換える予定。
// 呼び出し側は同じReservation型を利用できるため、
// データ取得方法が変わっても影響を受けにくい設計。

export function getReservations(): Reservation[] {
  return dummyReservations;
}