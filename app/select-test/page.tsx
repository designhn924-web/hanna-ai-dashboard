"use client";

import { useState } from "react";
import SelectField, {
  type SelectOption,
} from "@/components/ui/SelectField";

export default function SelectTestPage() {
  const menuOptions: SelectOption[] = [
    {
      label: "まつげエクステ",
      value: "extension",
    },
    {
      label: "まつげパーマ",
      value: "perm",
    },
    {
      label: "アイブロウ",
      value: "eyebrow",
    },
  ];

  const [menu, setMenu] = useState("extension");

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">
        SelectField テスト
      </h1>

      <SelectField
  label="メニュー"
  value={menu}
  onChange={(event) => setMenu(event.target.value)}
  options={menuOptions}
/>

      <p>選択中：{menu}</p>
    </main>
  );
}