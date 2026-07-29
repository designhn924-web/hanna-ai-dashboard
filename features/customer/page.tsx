"use client";

import { useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
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
    <FeatureLayout>
      <PageHeader
        title="顧客管理"
        description="お客様情報と施術履歴を管理します"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <Section title="顧客一覧">
          <CustomerList
            customers={customers}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </Section>

        <Section title="顧客カルテ">
          <CustomerDetail customer={selectedCustomer} />
        </Section>
      </div>
    </FeatureLayout>
  );
}
