import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Supabaseの環境変数(NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)が設定されていません。",
  );
}

// ブラウザ側(クライアントコンポーネント)から使うSupabaseクライアント。
// publishable keyのみを使用するため、RLS(Row Level Security)前提のテーブルアクセスを想定している。
// セッションをCookieで管理し、サーバー側からも同じセッションを参照できるようにするため@supabase/ssrを使用する。
export const supabase = createBrowserClient(supabaseUrl, supabasePublishableKey);
