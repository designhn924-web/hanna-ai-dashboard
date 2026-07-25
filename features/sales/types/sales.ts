// 売上1件分のデータの型
export type SalesRecord = {
  id: string; // 一覧から選択するときに使うID
  date: string; // 施術日
  menu: string; // 施術内容
  amount: number; // 金額
};
