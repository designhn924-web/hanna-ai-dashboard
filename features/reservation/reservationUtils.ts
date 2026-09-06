import type { Reservation } from "@/types/reservation";
import type { ReservationFormData } from "@/app/lib/schemas/reservationSchema";
import type { SelectOption } from "@/components/ui/SelectField";

// 予約フォームで選べるメニュー一覧(value=保存用の値、label=画面表示用)。
// ReservationFormのSelectFieldと、下のgetMenuLabelの両方でこれを使い回す。
export const menuOptions: SelectOption[] = [
  { label: "まつげエクステ", value: "extension" },
  { label: "まつげパーマ", value: "perm" },
  { label: "アイブロウ", value: "eyebrow" },
];

// menuのvalue(例: "extension")から、画面表示用のラベル(例: "まつげエクステ")に変換する
function getMenuLabel(value: string): string {
  return menuOptions.find((option) => option.value === value)?.label ?? value;
}

export function createReservation(
  data: ReservationFormData
): Reservation {

 return {
  id: crypto.randomUUID(),

  customerName: data.name,

  email: data.email,

  datetime: new Date().toISOString(),

  menu: getMenuLabel(data.menu),

  status: "未確定",

  memo: data.note ?? "",
};
}