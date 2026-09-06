import { supabase } from "@/lib/supabase/client";
import type { Reservation } from "@/types/reservation";
import type { ReservationFormData } from "@/app/lib/schemas/reservationSchema";
import { mapReservationRow, type ReservationRow } from "../reservationUtils";

// Supabaseのreservationsテーブルから予約一覧を取得する。
// RLSによりauthenticatedのみ取得できる(SELECTポリシー: authenticated / USING true)。
// 取得に失敗した場合や0件の場合も、呼び出し側が落ちないよう空配列を返す。
export async function getReservations(): Promise<Reservation[]> {
  const { data, error } = await supabase
    .from("reservations")
    .select("id, customer_name, email, menu, datetime, status, memo")
    .overrideTypes<ReservationRow[], { merge: false }>();

  if (error) {
    console.error("予約一覧の取得に失敗しました:", error);
    return [];
  }

  return (data ?? []).map(mapReservationRow);
}

// フォーム入力からSupabaseへ新規予約をINSERTし、作成された行をReservation型で返す。
// id/status/created_at/updated_atはDB側(default)に任せ、クライアントからは送信しない。
export async function insertReservation(
  data: ReservationFormData,
): Promise<Reservation> {
  const { data: row, error } = await supabase
    .from("reservations")
    .insert({
      customer_name: data.name,
      email: data.email,
      menu: data.menu,
      datetime: new Date(data.datetime).toISOString(),
      memo: data.note ?? "",
    })
    .select("id, customer_name, email, menu, datetime, status, memo")
    .single()
    .overrideTypes<ReservationRow, { merge: false }>();

  if (error || !row) {
    throw error ?? new Error("予約の作成に失敗しました");
  }

  return mapReservationRow(row);
}
