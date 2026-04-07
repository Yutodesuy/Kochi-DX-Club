'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const vertBase: React.CSSProperties = {
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
  letterSpacing: '0.26em',
  userSelect: 'none',
};

export default function Hero({ formUrl }: { formUrl: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imgY   = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const textY  = useTransform(scrollYProgress, [0, 0.6], ['0px', '-60px']);
  const textOp = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const ctaHref   = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel    = formUrl ? 'noreferrer' : undefined;

  return (
    <section
      ref={ref}
      id="top"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#0e0704',
      }}
    >
      {/* 背景写真（視差） */}
      <motion.div
        aria-hidden="true"
        style={{ position: 'absolute', inset: '-25% 0', y: imgY }}
      >
        <Image
          src="/nichiyoichi.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
        />
      </motion.div>

      {/* オーバーレイ */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,5,2,0.90) 0%, rgba(10,5,2,0.52) 45%, rgba(10,5,2,0.18) 100%)',
      }} />

      {/* ── 縦書き：左サイド「高知高専 × 地域DX」 ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        style={{
          position: 'absolute',
          left: 22,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{
          width: 1, height: 60,
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.28))',
        }} />
        <span style={{
          ...vertBase,
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.28)',
        }}>
          高知工業高等専門学校
        </span>
        <div style={{
          width: 1, height: 60,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.28), transparent)',
        }} />
      </motion.div>

      {/* ── 縦書き：右サイド「2026年度始動」 ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        style={{
          position: 'absolute',
          right: 22,
          top: 'calc(var(--header-h) + 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{
          ...vertBase,
          fontSize: '0.66rem',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.22)',
        }}>
          二〇二六年度始動
        </span>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.20), transparent)',
        }} />
      </motion.div>

      {/* 受賞バッジ */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.8 }}
        style={{
          position: 'absolute',
          top: 'calc(var(--header-h) + 24px)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '9px 18px 9px 10px',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.09)',
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(10px)',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'linear-gradient(135deg,#f5c842,#e09030)',
          display: 'grid', placeItems: 'center',
          fontSize: 15, flexShrink: 0,
        }}>🏆</span>
        <span style={{ lineHeight: 1.4 }}>
          <span style={{
            display: 'block', fontSize: '0.70rem', fontWeight: 800,
            color: '#ffd87a', letterSpacing: '0.04em',
          }}>
            こうちNPOアワード2025「ワカモノ未来賞」受賞
          </span>
          <span style={{ display: 'block', fontSize: '0.66rem', color: 'rgba(255,255,255,0.55)' }}>
            高知市商業振興課と連携した実案件
          </span>
        </span>
      </motion.div>

      {/* メインコンテンツ */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%', left: 0, right: 0,
          padding: '0 var(--px)',
          y: textY,
          opacity: textOp,
        }}
      >
        <div style={{ maxWidth: 820 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}
          >
            {['高知高専発', '2026年度始動', '部員大募集'].map((t) => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center',
                height: 30, padding: '0 14px', borderRadius: 999,
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.22)',
                fontSize: '0.78rem', fontWeight: 800,
                color: '#fff', letterSpacing: '0.06em',
              }}>{t}</span>
            ))}
          </motion.div>

          <motion.h1
            className="display-serif"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.35 }}
            style={{
              fontSize: 'clamp(3.2rem, 7vw, 8rem)',
              lineHeight: 1.04,
              color: '#fff',
              marginBottom: 28,
              textShadow: '0 2px 24px rgba(0,0,0,0.30)',
            }}
          >
            高知の課題を、<br />
            DXでほどく。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.50 }}
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.62)',
              marginBottom: 36,
              maxWidth: 500,
            }}
          >
            高知高専の学生が地域課題に本気で向き合う、<br />
            新しい実践型部活。2026年度から始動します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, ease, delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}
          >
            <a className="btn btn-primary" href={ctaHref} target={ctaTarget} rel={ctaRel}>
              部員として参加する
            </a>
            <a
              className="btn btn-outline-white"
              href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
              target="_blank" rel="noreferrer"
            >
              nicchyo を見る
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: 'absolute', bottom: 32,
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8,
        }}
      >
        <motion.span
          style={{
            ...vertBase,
            fontSize: '0.60rem', fontWeight: 800,
            letterSpacing: '0.30em',
            color: 'rgba(255,255,255,0.38)',
          }}
          animate={{ opacity: [0.38, 0.70, 0.38] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          スクロール
        </motion.span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.35)' }}
        />
      </motion.div>
    </section>
  );
}
