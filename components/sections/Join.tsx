'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const ROLES = [
  { icon: '💻', label: 'エンジニア',   sub: 'フロント / バック / データ' },
  { icon: '🎨', label: 'デザイナー',   sub: 'UI/UX / グラフィック' },
  { icon: '🔍', label: 'リサーチャー', sub: 'インタビュー / 現地調査' },
  { icon: '📋', label: 'プランナー',   sub: '企画 / 渉外 / 発表' },
];

export default function Join({ formUrl }: { formUrl: string }) {
  const ctaHref   = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel    = formUrl ? 'noreferrer' : undefined;

  return (
    <section
      id="join"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(150deg, #0e0704 0%, #1e1008 40%, #0c1810 100%)',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      {/* 装飾グロー */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,63,25,0.14), transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '40vw', height: '40vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,92,86,0.12), transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* 縦書き：左端「参加する」 */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          left: 16, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12,
        }}
      >
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14))' }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontSize: '0.64rem', fontWeight: 800,
          letterSpacing: '0.30em',
          color: 'rgba(255,255,255,0.15)',
        }}>参加する</span>
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)' }} />
      </motion.div>

      {/* 縦書き：右端「二〇二六年度始動」 */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          right: 16, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12,
        }}
      >
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.14))' }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-display, serif)',
          fontSize: '0.78rem', fontWeight: 700,
          letterSpacing: '0.24em',
          color: 'rgba(255,255,255,0.12)',
        }}>二〇二六年度始動</span>
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)' }} />
      </motion.div>

      <div style={{ padding: '0 var(--px)', position: 'relative' }}>
        {/* メインコピー */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="eyebrow" style={{
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 24, display: 'block', letterSpacing: '0.22em',
          }}>
            For Kochi Kosen Students — 2026年度
          </span>

          <h2
            className="display-serif"
            style={{
              fontSize: 'clamp(2.6rem, 6vw, 7rem)',
              lineHeight: 1.06, color: '#fff', marginBottom: 28,
            }}
          >
            高知高専で、<br />
            課題解決の<br />
            最前線に立つ。
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.48)',
            maxWidth: 520, margin: '0 auto',
          }}>
            コードが書けなくても大丈夫。<br />
            開発・デザイン・調査・企画、あなたの得意を活かせる場がある。
          </p>
        </motion.div>

        {/* ロールカード */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.12 }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            maxWidth: 880, margin: '0 auto 56px',
          }}
        >
          {ROLES.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                padding: '28px 20px', borderRadius: 20,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                textAlign: 'center', cursor: 'default',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{r.icon}</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>
                {r.label}
              </div>
              <div style={{ fontSize: '0.80rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.35)' }}>
                {r.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease, delay: 0.30 }}
          viewport={{ once: true, margin: '-40px' }}
          style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 20,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <a className="btn btn-primary" style={{ minWidth: 220 }}
              href={ctaHref} target={ctaTarget} rel={ctaRel}>
              興味のある学生はこちら
            </a>
            <a
              className="btn btn-outline-white"
              href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
              target="_blank" rel="noreferrer"
            >
              nicchyo を見る
            </a>
          </div>

          <p style={{
            fontSize: '0.82rem', color: 'rgba(255,255,255,0.28)',
            textAlign: 'center', lineHeight: 1.7,
          }}>
            ※ 応募フォームは準備が整い次第このページに掲載します。<br />
            まずは気軽に話しかけてみてください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
