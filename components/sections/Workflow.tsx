'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const STEPS = [
  { n: '1', icon: '👁',  label: '見に行く',    sub: '現場で観察する' },
  { n: '2', icon: '💬', label: '聞いて整理',   sub: '課題を言語化する' },
  { n: '3', icon: '🛠',  label: 'つくって試す', sub: '速くプロトを出す' },
  { n: '4', icon: '🔄', label: '改善・拡大',   sub: '磨いて次へ広げる' },
];

export default function Workflow() {
  return (
    <section id="workflow" style={{ background: 'var(--paper-2)', padding: '120px 0' }}>
      <div style={{ padding: '0 var(--px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 72, maxWidth: 520 }}
        >
          <span className="eyebrow eyebrow-soil" style={{ marginBottom: 14 }}>How We Work</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: 'var(--soil-deep)', lineHeight: 1.1,
          }}>
            調査→試作→検証を<br />繰り返しながら前に進む。
          </h2>
        </motion.div>

        {/* ステップ */}
        <div style={{ position: 'relative' }}>
          {/* 繋ぐライン */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-40px' }}
            style={{
              position: 'absolute',
              top: 40, left: 'calc(12.5% + 16px)', right: 'calc(12.5% + 16px)',
              height: 1,
              background: 'linear-gradient(90deg, var(--sun), var(--soil))',
              transformOrigin: 'left',
            }}
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
          }}>
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: i * 0.12 }}
                viewport={{ once: true, margin: '-30px' }}
                style={{ textAlign: 'center' }}
              >
                {/* 円 */}
                <div style={{
                  width: 80, height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(224,144,48,0.15), rgba(123,63,25,0.10))',
                  border: '1.5px solid rgba(123,63,25,0.16)',
                  display: 'grid', placeItems: 'center',
                  margin: '0 auto 24px',
                  fontSize: 28,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 0 0 6px var(--paper-2)',
                }}>
                  {s.icon}
                </div>

                <div style={{
                  fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--soil)', marginBottom: 8,
                }}>
                  Step {s.n}
                </div>
                <h3 style={{
                  fontSize: '1.15rem', fontWeight: 800,
                  color: 'var(--soil-deep)', marginBottom: 6,
                }}>{s.label}</h3>
                <p style={{
                  fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.6,
                }}>{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
