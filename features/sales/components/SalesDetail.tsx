import type { SalesRecord } from "../types/sales";

type SalesDetailProps = {
  // 選択されている売上(まだ何も選ばれていないときはundefined)
  record: SalesRecord | undefined;
};

/**
 * 選択されている売上の詳細を表示するコンポーネント(表示専用)。
 */
export default function SalesDetail({ record }: SalesDetailProps) {
  if (!record) {
    return (
      <p className="text-sm text-stone-400">
        左の一覧から売上を選択してください
      </p>
    );
  }

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">日付</dt>
        <dd className="mt-1 text-stone-800">{record.date}</dd>
      </div>
      <div>
        <dt className="text-stone-400">メニュー</dt>
        <dd className="mt-1 text-stone-800">{record.menu}</dd>
      </div>
      <div>
        <dt className="text-stone-400">金額</dt>
        <dd className="mt-1 text-stone-800">
          ¥{record.amount.toLocaleString()}
        </dd>
      </div>
    </dl>
  );
}
