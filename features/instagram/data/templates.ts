import type { SelectOption } from "@/components/SelectField";
import type { InstagramTemplateData } from "../types";

// テンプレート1件分の型。
// id: セレクトボックスで選ばれた項目を判定するための値
// label: セレクトボックスに表示する名前
// data: 選択したときにフォームへ反映する初期値
export type InstagramTemplatePreset = {
  id: string;
  label: string;
  data: InstagramTemplateData;
};

// あらかじめ用意しておく5種類のテンプレート。
// テンプレートを選ぶと、この中の data がそのままフォームに反映される。
export const templates: InstagramTemplatePreset[] = [
  {
    id: "campaign",
    label: "キャンペーン",
    data: {
      title: "期間限定キャンペーン開催中",
      subtitle: "今だけのお得なメニュー",
      body: "期間限定で人気メニューをお得な価格でご案内しています。この機会にぜひご予約ください。",
      category: "キャンペーン",
      cta: "今すぐ予約する",
    },
  },
  {
    id: "before-after",
    label: "ビフォーアフター",
    data: {
      title: "ビフォーアフターのご紹介",
      subtitle: "施術後の変化をご覧ください",
      body: "お客様の施術前後の変化をご紹介します。仕上がりのイメージづくりにぜひご参考ください。",
      category: "ビフォーアフター",
      cta: "詳しくはプロフィールから",
    },
  },
  {
    id: "beauty-tips",
    label: "美容知識",
    data: {
      title: "今日の美容知識",
      subtitle: "知っておきたいヘアケアのコツ",
      body: "毎日のケアで差がつくポイントをご紹介します。おうちでのお手入れの参考にしてください。",
      category: "美容知識",
      cta: "続きはプロフィールから",
    },
  },
  {
    id: "announcement",
    label: "お知らせ",
    data: {
      title: "営業のお知らせ",
      subtitle: "営業日・営業時間の変更について",
      body: "営業日・営業時間の変更についてお知らせいたします。ご不便をおかけしますが、よろしくお願いいたします。",
      category: "お知らせ",
      cta: "詳しくはこちら",
    },
  },
  {
    id: "customer-voice",
    label: "お客様の声",
    data: {
      title: "お客様の声をご紹介",
      subtitle: "ご利用いただいたお客様より",
      body: "実際にご来店いただいたお客様からいただいた感想をご紹介します。",
      category: "お客様の声",
      cta: "ご予約はこちらから",
    },
  },
];

// テンプレート選択用セレクトボックスの選択肢。
// 先頭に「未選択」を表す空の選択肢を用意しておく。
export const templateOptions: SelectOption[] = [
  { label: "テンプレートを選択してください", value: "" },
  ...templates.map((template) => ({
    label: template.label,
    value: template.id,
  })),
];
