import type { SelectOption } from "@/components/SelectField";

// Instagramテンプレートの入力内容をまとめた型
// フォーム(InstagramForm)とプレビュー(InstagramPreview)の
// 両方でこの型を使うことで、渡すデータの形を統一している
export type InstagramTemplateData = {
  title: string; // タイトル
  subtitle: string; // サブタイトル
  body: string; // 本文
  category: string; // カテゴリ
  cta: string; // CTA(行動を促す一言。例: 今すぐ予約する)
};

// フォームの初期値(すべて空の状態)
export const initialTemplateData: InstagramTemplateData = {
  title: "",
  subtitle: "",
  body: "",
  category: "お知らせ",
  cta: "",
};

// カテゴリのセレクトボックスに表示する選択肢
export const categoryOptions: SelectOption[] = [
  { label: "お知らせ", value: "お知らせ" },
  { label: "キャンペーン", value: "キャンペーン" },
  { label: "新メニュー", value: "新メニュー" },
  { label: "ビフォーアフター", value: "ビフォーアフター" },
  { label: "美容知識", value: "美容知識" },
  { label: "お客様の声", value: "お客様の声" },
];
