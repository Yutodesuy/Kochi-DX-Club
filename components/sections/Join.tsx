'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

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
            実践型の学びで、<br />
            高知県の未来を<br />
            一緒に考えてみませんか？
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.48)',
            maxWidth: 620, margin: '0 auto',
          }}>
            コードが書けなくても大丈夫。
            高知DX部では、調査、企画、開発、広報を横断して関われます。
            一つの工程から入りつつ、プロジェクト全体を見渡せる力を育てます。
          </p>
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
            高知高専で、地域課題に本気で向き合いたい学生を歓迎します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
