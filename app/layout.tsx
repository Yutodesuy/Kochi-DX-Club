import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: false,
});

const notoSerif = Noto_Serif_JP({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: '高知DX部 | 高知高専発、2026年度始動',
  description:
    '高知高専で2026年度から始動する高知DX部のホームページ。第一プロジェクトは高知・日曜市デジタルマップ「nicchyo」。こうちNPOアワード2025「ワカモノ未来賞」受賞。部員募集中。',
  keywords: ['高知DX部', '高知高専', 'DX', '部員募集', 'nicchyo', '日曜市'],
  openGraph: {
    title: '高知DX部 — 高知高専から、高知の課題をDXでほどく',
    description:
      '高知高専で2026年度から始動。こうちNPOアワード2025「ワカモノ未来賞」受賞の実案件に、創設メンバーとして参加しませんか？',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          本文へ移動
        </a>
        {children}
      </body>
    </html>
  );
}
