"use client";

import { useEffect, useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import InstagramForm from "./InstagramForm";
import InstagramPreview from "./InstagramPreview";
import { templates } from "./data/templates";
import { initialTemplateData, type InstagramTemplateData } from "./types";

// ブラウザのlocalStorageに保存するときの見出し(キー)
const STORAGE_KEY = "hanna-instagram-template";

/**
 * フォーム(InstagramForm)とプレビュー(InstagramPreview)をまとめる親コンポーネント。
 *
 * 入力内容(data)はこのコンポーネントの useState で一元管理する。
 * これを「状態のリフトアップ」と呼び、
 * 兄弟同士(フォームとプレビュー)が直接データをやり取りできない代わりに、
 * 共通の親がデータを持って両方に配ることで連携させる考え方。
 *
 * data が更新される → 再描画される → InstagramPreview にも新しい data が渡る
 * という流れで、入力するたびにリアルタイムでプレビューが更新される。
 */
export default function InstagramTemplateMaker() {
  const [data, setData] = useState<InstagramTemplateData>(initialTemplateData);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  // localStorageからの復元が終わったかどうか。
  // これがtrueになる前に自動保存を走らせると、復元前の初期値で
  // 保存済みデータを上書きしてしまうため、ガードとして使う。
  const [isRestored, setIsRestored] = useState(false);

  // 画面を開いたとき(初回だけ)、保存されている内容があれば復元する。
  //
  // サーバー側では毎回「初期値」のHTMLが作られるため、最初から
  // localStorageの内容を反映してしまうと、サーバーとブラウザで
  // 表示内容が食い違う「hydration mismatch」エラーになってしまう。
  // そのため、あえて画面表示後(useEffect内)で復元している。
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- 上記の理由でマウント後に復元する必要があるため
        setData(JSON.parse(saved) as InstagramTemplateData);
      } catch {
        // 保存されていた内容が壊れている場合は初期値のまま表示する
      }
    }
    setIsRestored(true);
  }, []);

  // 入力内容が変わるたびに、localStorageへ自動保存する
  // (復元が終わる前に保存してしまうと、初期値で上書きしてしまうため isRestored を見る)
  useEffect(() => {
    if (!isRestored) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data, isRestored]);

  // テンプレートが選ばれたとき、対応する初期値をフォーム全体に反映する
  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);

    const template = templates.find((item) => item.id === templateId);
    if (template) {
      setData(template.data);
    }
  };

  // フォームの内容・テンプレート選択・保存データをすべて初期状態に戻す
  const handleReset = () => {
    setData(initialTemplateData);
    setSelectedTemplateId("");
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <FeatureLayout title="Instagram">
      <PageHeader
        title="Instagram投稿作成"
        description="投稿内容を作成し、リアルタイムでプレビュー確認できます"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <Section title="入力エリア">
          <InstagramForm
            data={data}
            onChange={setData}
            selectedTemplateId={selectedTemplateId}
            onSelectTemplate={handleSelectTemplate}
            onReset={handleReset}
          />
        </Section>

        <Section title="プレビュー・詳細エリア">
          <InstagramPreview data={data} />
        </Section>
      </div>
    </FeatureLayout>
  );
}
