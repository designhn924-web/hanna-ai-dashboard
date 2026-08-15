// 顧客1件分のデータの型
export type Customer = {
  id: string; // 一覧から選択するときに使うID
  name: string; // 名前
  email: string; // メールアドレス
  phone: string; // 電話番号
  memo: string; // メモ
  createdAt: string; // 登録日時(Supabaseが自動で付与する想定)
};
