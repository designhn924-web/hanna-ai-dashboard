import type { InstagramTemplateData } from "./types";

type InstagramPreviewProps = {
  data: InstagramTemplateData;
};

/**
 * Instagram投稿のイメージをプレビュー表示するコンポーネント。
 *
 * 自分では状態を持たず、渡された data をそのまま表示するだけ。
 * 表示専用のコンポーネントなので "use client" は不要
 * (親のInstagramTemplateMakerがクライアントコンポーネントなので、
 *  そこから読み込まれた時点でブラウザ側で表示される)。
 */
export default function InstagramPreview({ data }: InstagramPreviewProps) {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {/* 投稿画像部分。実際の画像は使わず、色と文字だけで見た目を再現している */}
      <div className="flex aspect-square flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-50 to-stone-100 px-8 text-center">
        {data.category && (
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-amber-700">
            {data.category}
          </span>
        )}
        {/* 未入力のときはプレースホルダーの文言を表示する */}
        <p className="font-serif text-2xl leading-snug text-stone-800">
          {data.title || "タイトルを入力してください"}
        </p>
        {data.subtitle && (
          <p className="text-sm text-stone-600">{data.subtitle}</p>
        )}
      </div>

      {/* キャプション部分 */}
      <div className="flex flex-col gap-2 p-5">
        <p className="whitespace-pre-wrap text-sm text-stone-700">
          {data.body || "本文がここに表示されます。"}
        </p>
        {data.cta && (
          <p className="text-sm font-medium text-amber-700">{data.cta}</p>
        )}
      </div>
    </div>
  );
}
