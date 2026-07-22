import { getCustomers } from "./types";

// 電子カルテの詳細を表示する(今は一覧の先頭の顧客を仮で表示しているだけ)
export default function CustomerDetail() {
  const [customer] = getCustomers();

  return (
    <dl className="flex flex-col gap-4 text-sm">
      <div>
        <dt className="text-stone-400">お客様名</dt>
        <dd className="mt-1 text-stone-800">{customer.name}</dd>
      </div>
      <div>
        <dt className="text-stone-400">最終来店日</dt>
        <dd className="mt-1 text-stone-800">{customer.lastVisit}</dd>
      </div>
      <div>
        <dt className="text-stone-400">カルテメモ</dt>
        <dd className="mt-1 text-stone-800">{customer.memo}</dd>
      </div>
    </dl>
  );
}
