import Card from "@/components/ui/Card";
import type { Customer } from "@/types/customer";

type CustomerDetailProps = {
  // 選択されている顧客(まだ何も選ばれていないときはundefined)
  customer: Customer | undefined;
};

/**
 * 選択されている顧客のカルテを表示するコンポーネント(表示専用)。
 */
export default function CustomerDetail({ customer }: CustomerDetailProps) {
  if (!customer) {
    return (
      <p className="text-sm text-stone-400">
        左の一覧から顧客を選択してください
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <h3 className="mb-4 text-sm font-medium text-stone-700">
          顧客情報
        </h3>

        <dl className="flex flex-col gap-4 text-sm">
          <div>
            <dt className="text-stone-400">名前</dt>
            <dd className="mt-1 text-stone-800">
              {customer.name}
            </dd>
          </div>

          <div>
            <dt className="text-stone-400">電話番号</dt>
            <dd className="mt-1 text-stone-800">
              {customer.phone}
            </dd>
          </div>

          <div>
            <dt className="text-stone-400">メールアドレス</dt>
            <dd className="mt-1 text-stone-800">
              {customer.email}
            </dd>
          </div>

          <div>
            <dt className="text-stone-400">登録日</dt>
            <dd className="mt-1 text-stone-800">
              {customer.createdAt}
            </dd>
          </div>
        </dl>
      </Card>

      <Card>
        <div>
          <h3 className="text-sm font-medium text-stone-700">
            メモ
          </h3>

          <p className="mt-2 text-sm text-stone-700">
            {customer.memo}
          </p>
        </div>
      </Card>
    </div>
  );
}
