"use client";

import { useEffect, useState } from "react";
import FeatureLayout from "@/components/layout/FeatureLayout";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";
import CustomerForm from "./components/CustomerForm";
import { getCustomers } from "./data/customers";
import type { Customer } from "@/types/customer";

/**
 * Customer機能のメインコンポーネント。
 *
 * 「今どの顧客が選ばれているか(selectedId)」をこのコンポーネントの
 * useState で一元管理し、一覧(CustomerList)とカルテ(CustomerDetail)の
 * 両方に配ることで、クリックした顧客のカルテがすぐ右側に表示される。
 */
export default function CustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  // 最初は一覧の先頭の顧客が選ばれた状態にしておく
  const [selectedId, setSelectedId] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // マウント時にSupabaseから顧客一覧を取得する
  useEffect(() => {
    let active = true;

    getCustomers()
      .then((data) => {
        if (!active) return;
        setCustomers(data);
        setSelectedId((current) => current || (data[0]?.id ?? ""));
      })
      .catch((error) => {
        if (!active) return;
        console.error("顧客一覧の取得に失敗しました:", error);
        setErrorMessage(
          "顧客データの取得に失敗しました。時間をおいて再度お試しください。",
        );
      });

    return () => {
      active = false;
    };
  }, []);

  // 選ばれているIDから、対応する顧客データを探す
  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedId,
  );

  // 新規顧客が登録されたら、一覧の末尾に追加し、その顧客を選択状態にする
  const handleCreateCustomer = (newCustomer: Customer) => {
    setCustomers((prev) => [...prev, newCustomer]);
    setSelectedId(newCustomer.id);
  };

  return (
    <FeatureLayout>
      <PageHeader
        title="顧客管理"
        description="お客様情報と施術履歴を管理します"
      />

      {errorMessage && (
        <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
      )}

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

      <div className="mt-8">
        <Section title="新規顧客登録">
          <CustomerForm onCreate={handleCreateCustomer} />
        </Section>
      </div>
    </FeatureLayout>
  );
}
