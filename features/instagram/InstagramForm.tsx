"use client";

import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import SelectField from "@/components/SelectField";
import PrimaryButton from "@/components/PrimaryButton";
import { templateOptions } from "./data/templates";
import { categoryOptions, type InstagramTemplateData } from "./types";

type InstagramFormProps = {
  data: InstagramTemplateData;
  // 入力内容が変わったときに呼ばれる関数(親コンポーネントに新しいdataを渡す)
  onChange: (data: InstagramTemplateData) => void;
  // テンプレートのセレクトボックスで、今どれが選ばれているか(未選択なら空文字)
  selectedTemplateId: string;
  // テンプレートが選ばれたときに呼ばれる関数
  onSelectTemplate: (templateId: string) => void;
  // 「フォームをリセット」ボタンが押されたときに呼ばれる関数
  onReset: () => void;
};

/**
 * Instagram投稿の入力フォーム。
 *
 * このコンポーネント自身は入力内容(state)を持たない。
 * 代わりに親コンポーネントから受け取った data をそのまま表示し、
 * 変更があれば onChange 経由で親に伝える。
 * こうしておくことで、親側で data をそのままプレビューにも渡すだけで
 * 「入力するとリアルタイムにプレビューへ反映される」動きが実現できる。
 */
export default function InstagramForm({
  data,
  onChange,
  selectedTemplateId,
  onSelectTemplate,
  onReset,
}: InstagramFormProps) {
  // 1つの項目(key)だけを新しい値(value)に差し替えて、親に通知するヘルパー
  const updateField = <Key extends keyof InstagramTemplateData>(
    key: Key,
    value: InstagramTemplateData[Key],
  ) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* テンプレートを選ぶと、下の入力項目すべてに初期値が反映される */}
      <SelectField
        label="テンプレート"
        value={selectedTemplateId}
        onChange={onSelectTemplate}
        options={templateOptions}
      />

      <InputField
        label="タイトル"
        value={data.title}
        onChange={(value) => updateField("title", value)}
        placeholder="例: 秋の新メニュー登場"
      />
      <InputField
        label="サブタイトル"
        value={data.subtitle}
        onChange={(value) => updateField("subtitle", value)}
        placeholder="例: 期間限定キャンペーン"
      />
      <TextAreaField
        label="本文"
        value={data.body}
        onChange={(value) => updateField("body", value)}
        placeholder="投稿の詳しい説明を入力してください"
      />
      <SelectField
        label="カテゴリ"
        value={data.category}
        onChange={(value) => updateField("category", value)}
        options={categoryOptions}
      />
      <InputField
        label="CTA(行動を促す一言)"
        value={data.cta}
        onChange={(value) => updateField("cta", value)}
        placeholder="例: 今すぐ予約する"
      />

      {/* 入力内容とテンプレート選択、保存されているデータをすべて初期状態に戻すボタン */}
      <PrimaryButton onClick={onReset}>フォームをリセット</PrimaryButton>
    </div>
  );
}
