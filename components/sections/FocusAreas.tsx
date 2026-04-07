'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const AREAS = [
  { icon: '🏯', title: '地域文化の継承と進化', sub: '壊さず、アップデートする' },
  { icon: '🎨', title: 'デジタルデザイン',      sub: 'UX設計から実装まで' },
  { icon: '🔬', title: 'フィールドリサーチ',    sub: '現地と行政との対話' },
  { icon: '🌏', title: '社会実装',              sub: '地域に使われる仕組みへ' },
];

export default function FocusAreas() {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #0e0704 0%, #1c1008 60%, #0c1a16 100%)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景グロー */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -120, left: '30%',
        width: '60vw', height: '60vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,92,86,0.12), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ padding: '0 var(--px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 64 }}
        >
          <span className="eyebrow eyebrow-light" style={{ marginBottom: 14 }}>Focus Areas</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: '#fff', lineHeight: 1.1,
          }}>
            4つの視点で、<br />高知の未来をつくる。
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {AREAS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: i * 0.10 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                padding: '36px 28px',
                borderRadius: 24,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'default',
              }}
            >
              <div style={{
                fontSize: 40,
                marginBottom: 20,
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.30))',
              }}>{a.icon}</div>
              <h3 style={{
                fontSize: '1.1rem', fontWeight: 800,
                color: '#fff', lineHeight: 1.35,
                marginBottom: 8,
              }}>{a.title}</h3>
              <p style={{
                fontSize: '0.86rem', lineHeight: 1.65,
                color: 'rgba(255,255,255,0.42)',
              }}>{a.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
