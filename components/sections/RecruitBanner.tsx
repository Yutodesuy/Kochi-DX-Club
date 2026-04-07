'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const STATS = [
  { value: '1',    unit: '受賞',    desc: 'こうちNPOアワード2025\nワカモノ未来賞' },
  { value: '3',    unit: '回',      desc: '高知市商業振興課との\n行政連携会談' },
  { value: '2026', unit: '年度',    desc: '始動年度\n創設メンバーを募集中' },
];

export default function RecruitBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #120803 0%, #1e1208 50%, #0d1a17 100%)',
        padding: '100px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 右上グロー */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -120, right: -80,
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,63,25,0.18), transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 縦書きサイドラベル */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          left: 16, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12,
        }}
      >
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))' }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontSize: '0.64rem', fontWeight: 800,
          letterSpacing: '0.28em',
          color: 'rgba(255,255,255,0.16)',
        }}>実績</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)' }} />
      </motion.div>

      <div style={{ padding: '0 var(--px)' }}>
        {/* 見出し */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span className="eyebrow" style={{
            color: 'rgba(255,255,255,0.38)',
            marginBottom: 16, display: 'block', letterSpacing: '0.22em',
          }}>Track Record</span>
          <p className="display-serif" style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
            color: '#fff', lineHeight: 1.2,
          }}>
            実績のある実案件に、<br />
            創設メンバーとして参加できる。
          </p>
        </motion.div>

        {/* 数字 3つ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: i * 0.12 }}
              viewport={{ once: true, margin: '-40px' }}
              style={{
                padding: '40px 32px',
                borderRadius: i === 0 ? '20px 0 0 20px' : i === 2 ? '0 20px 20px 0' : 0,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display, serif)',
                fontSize: 'clamp(4rem, 8vw, 8rem)',
                fontWeight: 700,
                lineHeight: 1,
                color: '#fff',
                marginBottom: 4,
              }}>
                {s.value}
                <span style={{ fontSize: '0.35em', color: 'rgba(255,255,255,0.45)', marginLeft: 4 }}>
                  {s.unit}
                </span>
              </div>
              <p style={{
                fontSize: '0.84rem', lineHeight: 1.7,
                color: 'rgba(255,255,255,0.38)',
                whiteSpace: 'pre-line', marginTop: 12,
              }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
