import { getCustomers } from "./types";

// 顧客の一覧を表示する(表示専用コンポーネント)
export default function CustomerList() {
  const customers = getCustomers();

  return (
    <ul className="flex flex-col gap-3">
      {customers.map((customer) => (
        <li
          key={customer.id}
          className="rounded-xl border border-stone-200 px-4 py-3"
        >
          <p className="text-sm font-medium text-stone-800">{customer.name}</p>
          <p className="text-xs text-stone-500">
            最終来店: {customer.lastVisit}
          </p>
        </li>
      ))}
    </ul>
  );
}
