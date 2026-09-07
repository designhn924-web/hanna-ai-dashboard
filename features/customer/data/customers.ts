import { supabase } from "@/lib/supabase/client";
import type { Customer } from "@/types/customer";

// Supabase customersテーブルのSELECT結果1行分の型(snake_case、nullable列を含む)
type CustomerRow = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  memo: string | null;
  created_at: string;
};

// DBの登録日時(timestamptz)を、画面表示用の "YYYY/MM/DD" 形式に変換する
function formatCreatedAt(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
}

// DBの行データ(snake_case、nullable含む)を既存のCustomer型へ変換する。
// email/phone/memoはDBではnullableだが、Customer型は非nullのstringのままにしたいので
// nullのときは空文字に変換する。
function mapCustomerRow(row: CustomerRow): Customer {
  return {
    id: row.id,
    name: row.name,
    email: row.email ?? "",
    phone: row.phone ?? "",
    memo: row.memo ?? "",
    createdAt: formatCreatedAt(row.created_at),
  };
}

// Supabaseのcustomersテーブルから顧客一覧を取得する。
// RLSによりauthenticatedのみ取得できる(SELECTポリシー: authenticated)。
// 取得失敗時は呼び出し側(CustomerPage)でエラー表示できるよう、ここでは例外をthrowする。
export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("customers")
    .select("id, name, email, phone, memo, created_at")
    .overrideTypes<CustomerRow[], { merge: false }>();

  if (error) {
    throw error;
  }

  return (data ?? []).map(mapCustomerRow);
}
