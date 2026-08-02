// 予約1件分のデータの型
export type Reservation = {
  id: string; // 一覧から選択するときに使うID

  customerName: string; // お客様名

  email: string; // 連絡先メール

  datetime: string; // 日時

  menu: string; // メニュー

  status: "確定" | "未確定" | "キャンセル"; // ステータス

  memo: string; // メモ
};