'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const PANELS = [
  {
    num: '01',
    numJa: '一',
    label: '現場',
    headline: '現場で、\n課題を見つける。',
    sub: '日曜市の現場に入り、来訪者・出店者・行政の声を集める。机上の仮説ではなく、現場の事実から始める。',
    bg: 'rgba(28, 10, 4, 0.82)',
    accent: 'rgba(224,144,48,0.14)',
    photo: '/images/activities/sunday-market-survey.png',
    photoPosition: 'center 30%',
  },
  {
    num: '02',
    numJa: '二',
    label: '試作',
    headline: '小さく速く、\n試す。',
    sub: 'プロトタイプを素早くつくり、触ってもらい、改善していく。完璧より速さを優先する。',
    bg: 'linear-gradient(145deg, #1a1008 0%, #3a2010 55%, #5c3015 100%)',
    accent: 'rgba(255,200,80,0.12)',
    photo: null as string | null,
    photoPosition: 'center',
  },
  {
    num: '03',
    numJa: '三',
    label: '継続',
    headline: '高知に根ざした、\n仕組みにする。',
    sub: '作品で終わらせず、地域と一緒に育てられる形を目指す。学生の学びと地域の持続性を両立させる。',
    bg: 'linear-gradient(145deg, #071812 0%, #0e3028 55%, #155c56 100%)',
    accent: 'rgba(21,92,86,0.30)',
    photo: null as string | null,
    photoPosition: 'center',
  },
];

function MissionPanel({
  p,
  i,
}: {
  p: (typeof PANELS)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const numberY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);

  return (
    <div
      ref={ref}
      style={{
        background: p.bg ?? '#1c0e06',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {p.photo && (
        <>
          <motion.div style={{ position: 'absolute', inset: 0, scale: photoScale }}>
            <Image
              src={p.photo}
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: p.photoPosition,
              }}
            />
          </motion.div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(120deg, rgba(20,8,3,0.86) 0%, rgba(40,16,6,0.78) 60%, rgba(60,25,10,0.72) 100%)',
            }}
          />
        </>
      )}

      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: i % 2 === 0 ? '65%' : '25%',
          transform: 'translate(-50%,-50%)',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${p.accent}, transparent 65%)`,
          pointerEvents: 'none',
          scale: glowScale,
        }}
      />

      <div
        className="mission-panel-grid"
        style={{
          padding: '80px var(--px) 80px var(--px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
          minHeight: '60vh',
        }}
      >
        <motion.div
          className="mission-panel-number-wrap"
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ order: i % 2 === 0 ? 0 : 1, y: numberY }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(6rem, 16vw, 18rem)',
              fontWeight: 700,
              lineHeight: 0.85,
              color: 'rgba(255,255,255,0.07)',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            {p.num}
          </div>
        </motion.div>

        <motion.div
          className="mission-panel-content"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ order: i % 2 === 0 ? 1 : 0, y: contentY }}
        >
          <span
            style={{
              display: 'block',
              fontSize: '0.70rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
              marginBottom: 20,
            }}
          >
            0{i + 1} / 03
          </span>
          <h3
            className="display-serif"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
              color: '#fff',
              lineHeight: 1.15,
              whiteSpace: 'pre-line',
              marginBottom: 24,
            }}
          >
            {p.headline}
          </h3>
          <p
            className="mission-panel-copy"
            style={{
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 420,
            }}
          >
            {p.sub}
          </p>

          {p.photo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 28,
                padding: '8px 16px 8px 10px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--sun), var(--soil))',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.60)',
                  letterSpacing: '0.06em',
                }}
              >
                撮影：2025年10月 日曜市来訪者ヒアリング
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Mission() {
  return (
    <section id="mission">
      {/* セクションヘッド */}
      <div style={{
        background: 'var(--paper)',
        padding: '100px var(--px) 64px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="eyebrow eyebrow-soil" style={{ marginBottom: 16 }}>Mission</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 4.8rem)',
            color: 'var(--soil-deep)', lineHeight: 1.1,
          }}>
            部活として目指すこと
          </h2>
        </motion.div>
      </div>

      {PANELS.map((p, i) => (
        <MissionPanel key={p.num} p={p} i={i} />
      ))}

      <style jsx global>{`
        @media (max-width: 900px) {
          .mission-panel-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 20px !important;
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }

          .mission-panel-number-wrap {
            position: absolute;
            top: 28px;
            right: max(var(--px), 24px);
            z-index: 0;
            opacity: 0.95;
            pointer-events: none;
          }

          .mission-panel-content {
            order: 1 !important;
            position: relative;
            z-index: 1;
            width: 100% !important;
            max-width: none !important;
            justify-self: stretch !important;
          }

          .mission-panel-copy {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
