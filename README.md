# HanNa AI Dashboard

React + Next.js (App Router) + TypeScript + Tailwind CSS で構築するダッシュボードアプリです。
最初の機能として Instagram テンプレートメーカーを実装予定です。

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

## フォルダ構成

```
app/         Next.js App Router のルーティング・ページ
components/  複数の機能から共通で使う再利用可能なUIコンポーネント
features/    機能単位のコード(例: instagram-template-maker)。UI・ロジックをまとめて置く
public/      画像などの静的ファイル
styles/      グローバルスタイル(globals.css など)
docs/        設計・仕様に関するドキュメント
```

新しい機能を追加するときは `features/` 配下に機能名でフォルダを作り、
その機能専用のコンポーネントやロジックをまとめます。
複数の機能で使い回すUIパーツだけを `components/` に置きます。

## 使用技術

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
