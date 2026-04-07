# Kochi-DX-Club

高知高専で2026年度から始動する「高知DX部」の Next.js サイトです。

## Development

```powershell
npm install
npm run dev
```

## Main files

- `app/page.tsx`: トップページの組み立て
- `app/layout.tsx`: メタデータと共通レイアウト
- `app/globals.css`: グローバルスタイル
- `components/sections/*`: 各セクション

## Note

応募導線の Googleフォーム URL は `app/page.tsx` の `FORM_URL` に設定する想定です。
