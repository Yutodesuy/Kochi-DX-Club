'use client';

import { motion } from 'framer-motion';
import { LEARNING_STAGES } from '@/lib/learningStages';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const AREAS = [
  { key: 'research', sub: '現地観察、ヒアリング、アンケートで課題をつかむ' },
  { key: 'planning', sub: '集めた声を整理し、仕様や体験の設計につなげる' },
  { key: 'development', sub: 'UI / UX と実装を通じて、使える形まで仕上げる' },
  { key: 'promotion', sub: '活動や成果を発信し、仲間と協力者を増やしていく' },
] as const;

export default function FocusAreas() {
  return (
    <section
      id="learning"
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
          <span className="eyebrow eyebrow-light" style={{ marginBottom: 14 }}>End-to-End Learning</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: '#fff', lineHeight: 1.1,
          }}>
            調査・企画・開発・広報を、<br />一気通貫で学べる。
          </h2>
          <p style={{
            marginTop: 18,
            maxWidth: 760,
            color: 'rgba(255,255,255,0.56)',
            lineHeight: 1.9,
          }}>
            高知DX部では、一つの役割に閉じず、プロジェクトを前に進めるために必要な流れ全体を経験します。
            だからこそ、作る力だけでなく、見つける力、伝える力まで育てられます。
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {AREAS.map((a, i) => (
            <motion.div
              key={a.key}
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
              {(() => {
                const stage = LEARNING_STAGES[a.key];
                const Icon = stage.icon;

                return (
                  <>
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: 22,
                        background: stage.badgeBackground,
                        border: `1.5px solid ${stage.badgeBorder}`,
                        boxShadow: stage.badgeShadow,
                      }}
                    >
                      <Icon
                        aria-hidden="true"
                        style={{
                          width: 34,
                          height: 34,
                          color: stage.iconColor,
                          strokeWidth: 1.8,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.38)',
                        marginBottom: 8,
                      }}
                    >
                      {stage.label}
                    </div>
                    <h3 style={{
                fontSize: '1.1rem', fontWeight: 800,
                color: '#fff', lineHeight: 1.35,
                marginBottom: 8,
                    }}>{stage.title}</h3>
                  </>
                );
              })()}
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
