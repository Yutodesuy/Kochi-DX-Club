'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const vertBase: React.CSSProperties = {
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
};

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
        <div aria-hidden="true" style={{
          position: 'absolute', left: 20, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(123,63,25,0.22))' }} />
          <span style={{
            ...vertBase,
            fontSize: '0.68rem', fontWeight: 800,
            letterSpacing: '0.28em',
            color: 'rgba(123,63,25,0.30)',
          }}>ミッション</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(123,63,25,0.22), transparent)' }} />
        </div>

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

      {/* 各パネル */}
      {PANELS.map((p, i) => (
        <div
          key={p.num}
          style={{
            background: p.bg ?? '#1c0e06',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* 写真背景（パネル01のみ） */}
          {p.photo && (
            <>
              <div style={{ position: 'absolute', inset: 0 }}>
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
              </div>
              {/* 暗いオーバーレイ（視認性確保） */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(120deg, rgba(20,8,3,0.86) 0%, rgba(40,16,6,0.78) 60%, rgba(60,25,10,0.72) 100%)',
              }} />
            </>
          )}

          {/* 背景グロー */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '50%', left: i % 2 === 0 ? '65%' : '25%',
            transform: 'translate(-50%,-50%)',
            width: '55vw', height: '55vw', borderRadius: '50%',
            background: `radial-gradient(circle, ${p.accent}, transparent 65%)`,
            pointerEvents: 'none',
          }} />

          {/* 縦書き：左端ラベル */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 44,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 14,
              borderRight: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span style={{
              ...vertBase,
              fontSize: '0.64rem', fontWeight: 800,
              letterSpacing: '0.30em',
              color: 'rgba(255,255,255,0.22)',
            }}>
              {p.label}
            </span>
            <span style={{
              ...vertBase,
              fontFamily: 'var(--font-display, serif)',
              fontSize: '1.4rem', fontWeight: 700,
              color: 'rgba(255,255,255,0.10)',
              letterSpacing: '0.10em',
            }}>
              {p.numJa}
            </span>
          </motion.div>

          <div style={{
            padding: '80px var(--px) 80px calc(var(--px) + 44px)',
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
            gap: 48,
            alignItems: 'center',
            position: 'relative',
            minHeight: '60vh',
          }}>
            {/* 大きな数字（装飾） */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease }}
              viewport={{ once: true, margin: '-80px' }}
              style={{ order: i % 2 === 0 ? 0 : 1 }}
            >
              <div style={{
                fontFamily: 'var(--font-display, serif)',
                fontSize: 'clamp(6rem, 16vw, 18rem)',
                fontWeight: 700,
                lineHeight: 0.85,
                color: 'rgba(255,255,255,0.07)',
                userSelect: 'none',
                letterSpacing: '-0.02em',
              }}>
                {p.num}
              </div>
            </motion.div>

            {/* テキスト */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.80, ease, delay: 0.12 }}
              viewport={{ once: true, margin: '-60px' }}
              style={{ order: i % 2 === 0 ? 1 : 0 }}
            >
              <span style={{
                display: 'block',
                fontSize: '0.70rem', fontWeight: 800,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.38)',
                marginBottom: 20,
              }}>
                0{i + 1} / 03
              </span>
              <h3
                className="display-serif"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3.8rem)',
                  color: '#fff', lineHeight: 1.15,
                  whiteSpace: 'pre-line',
                  marginBottom: 24,
                }}
              >
                {p.headline}
              </h3>
              <p style={{
                fontSize: '1rem', lineHeight: 1.9,
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 420,
              }}>
                {p.sub}
              </p>

              {/* 写真パネルの場合のみ撮影日バッジ */}
              {p.photo && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginTop: 28, padding: '8px 16px 8px 10px',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--sun), var(--soil))',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700,
                    color: 'rgba(255,255,255,0.60)',
                    letterSpacing: '0.06em',
                  }}>
                    撮影：2025年10月 日曜市来訪者ヒアリング
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
