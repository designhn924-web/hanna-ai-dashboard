import { getSalesRecords } from "./types";

// 売上の一覧を表示する(表示専用コンポーネント)
export default function SalesList() {
  const records = getSalesRecords();

  return (
    <ul className="flex flex-col gap-3">
      {records.map((record) => (
        <li
          key={record.id}
          className="flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3"
        >
          <div>
            <p className="text-sm font-medium text-stone-800">{record.menu}</p>
            <p className="text-xs text-stone-500">{record.date}</p>
          </div>
          <p className="text-sm font-medium text-amber-700">
            ¥{record.amount.toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
