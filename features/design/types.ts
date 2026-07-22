export type DesignSection = {
  id: string;
  label: string;
  description: string;
};

const dummyDesignSections: DesignSection[] = [
  { id: "1", label: "トップ", description: "サロンの紹介・メインビジュアル" },
  { id: "2", label: "メニュー", description: "施術メニューと料金の一覧" },
  { id: "3", label: "アクセス", description: "住所・地図・営業時間" },
];

// 今はダミーデータを返しているだけだが、将来的にはSupabaseへの
// fetch処理に置き換える想定。呼び出し側は同じ型のデータを受け取れるので、
// 中身がどう変わっても影響を受けにくい。
export function getDesignSections(): DesignSection[] {
  return dummyDesignSections;
}
