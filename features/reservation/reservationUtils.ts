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

// すでに "YYYY/MM/DD HH:mm" 形式になっている値かどうかを判定する
const isFormattedDateTime = (value: string): boolean =>
  /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/.test(value);

// 予約日時を画面表示用の "YYYY/MM/DD HH:mm" 形式に統一する。
// 既存データ("2026/08/03 10:00")はすでにこの形式なのでnew Date()を経由せずそのまま返し、
// ISO形式("2026-09-06T05:11:12.260Z")などそれ以外の値だけをパースして、
// ブラウザのローカル時刻でこの形式に変換する。
// 解釈できない値が渡された場合は、表示が壊れないよう元の文字列をそのまま返す。
export function formatReservationDateTime(value: string): string {
  if (isFormattedDateTime(value)) {
    return value;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

export function createReservation(
  data: ReservationFormData
): Reservation {

 return {
  id: crypto.randomUUID(),

  customerName: data.name,

  email: data.email,

  datetime: new Date(data.datetime).toISOString(),

  menu: getMenuLabel(data.menu),

  status: "未確定",

  memo: data.note ?? "",
};
}