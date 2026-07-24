// 会員ランク(通常会員 or VIP会員)
export type MembershipRank = "通常" | "VIP";

// 施術履歴1件分の型(ダミー表示用)
export type TreatmentHistoryItem = {
  date: string; // 施術日
  menu: string; // 施術内容
};

// 顧客1件分のデータの型
export type Customer = {
  id: string; // 一覧から選択するときに使うID
  name: string; // 名前
  phone: string; // 電話番号
  email: string; // メールアドレス
  rank: MembershipRank; // 会員ランク
  lastVisit: string; // 最終来店日
  treatmentHistory: TreatmentHistoryItem[]; // 施術履歴(ダミー)
  memo: string; // メモ
};
