import { getSalesRecords } from "./types";

// 売上の集計を表示する(件数・合計・平均をダミーデータから計算)
export default function SalesDetail() {
  const records = getSalesRecords();
  const total = records.reduce((sum, record) => sum + record.amount, 0);
  const average = Math.round(total / records.length);

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">件数</dt>
        <dd className="mt-1 text-stone-800">{records.length}件</dd>
      </div>
      <div>
        <dt className="text-stone-400">合計金額</dt>
        <dd className="mt-1 text-stone-800">¥{total.toLocaleString()}</dd>
      </div>
      <div>
        <dt className="text-stone-400">平均単価</dt>
        <dd className="mt-1 text-stone-800">¥{average.toLocaleString()}</dd>
      </div>
    </dl>
  );
}
