// サロンサイトのイメージをプレビュー表示する(実際のサイトデータは使わず見た目だけ再現)
export default function DesignPreview() {
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-stone-200">
      <div className="flex aspect-square flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-50 to-stone-100 px-8 text-center">
        <p className="font-serif text-xl text-stone-800">HanNa Salon</p>
        <p className="text-sm text-stone-600">サロンサイトのプレビュー(ダミー)</p>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="h-2 w-3/4 rounded-full bg-stone-200" />
        <div className="h-2 w-1/2 rounded-full bg-stone-200" />
      </div>
    </div>
  );
}
