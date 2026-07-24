"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";
import { getCustomers } from "./data/customers";

const customers = getCustomers();

/**
 * Customer機能のメインコンポーネント。
 *
 * 「今どの顧客が選ばれているか(selectedId)」をこのコンポーネントの
 * useState で一元管理し、一覧(CustomerList)とカルテ(CustomerDetail)の
 * 両方に配ることで、クリックした顧客のカルテがすぐ右側に表示される。
 */
export default function CustomerPage() {
  // 最初は一覧の先頭の顧客が選ばれた状態にしておく
  const [selectedId, setSelectedId] = useState(customers[0]?.id ?? "");

  // 選ばれているIDから、対応する顧客データを探す
  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedId,
  );

  return (
    <FeatureLayout title="Customer">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">顧客一覧</h3>
          <CustomerList
            customers={customers}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-8">
          <h3 className="mb-6 text-sm font-medium text-stone-500">
            顧客カルテ
          </h3>
          <CustomerDetail customer={selectedCustomer} />
        </section>
      </div>
    </FeatureLayout>
  );
}
