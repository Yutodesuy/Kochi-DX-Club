'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const SKILLS = ['UI / UX 設計', 'フロントエンド開発', 'データ設計', 'ユーザーリサーチ', '行政連携'];

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  return (
    <section id="project" style={{ background: 'var(--paper)', padding: '120px 0', position: 'relative' }}>
      {/* 縦書きサイドラベル */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: 18, top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(123,63,25,0.20))' }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontSize: '0.64rem', fontWeight: 800,
          letterSpacing: '0.28em',
          color: 'rgba(123,63,25,0.22)',
        }}>プロジェクト</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(123,63,25,0.20), transparent)' }} />
      </div>

      <div style={{ padding: '0 var(--px)' }}>
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 64 }}
        >
          <span className="eyebrow eyebrow-soil" style={{ marginBottom: 14 }}>First Project</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            color: 'var(--soil-deep)', lineHeight: 1.1,
            maxWidth: 680,
          }}>
            第一目標は、<br />日曜市デジタルマップの開発。
          </h2>
        </motion.div>

        {/* スプリット */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}>
          {/* 左: 写真 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease }}
            viewport={{ once: true, margin: '-60px' }}
            style={{
              position: 'relative',
              borderRadius: 32,
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 32px 80px rgba(14,7,4,0.18)',
            }}
          >
            <motion.div style={{ scale: imgScale, width: '100%', height: '100%' }}>
              <Image
                src="/nichiyoichi.jpg"
                alt="高知の日曜市の風景"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </motion.div>
            {/* 写真上の縦書きキャプション */}
            <div style={{
              position: 'absolute', right: 16, top: 0, bottom: 0,
              display: 'flex', alignItems: 'center',
              zIndex: 2,
            }}>
              <span style={{
                writingMode: 'vertical-rl',
                fontSize: '0.66rem', fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.55)',
                background: 'rgba(0,0,0,0.25)',
                padding: '10px 5px',
                borderRadius: 4,
                backdropFilter: 'blur(4px)',
              }}>
                高知県 日曜市
              </span>
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(10,5,2,0.22), transparent)',
            }} />
          </motion.div>

          {/* 右: テキスト */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.10 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(4rem, 8vw, 9rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              color: 'var(--soil-deep)',
              letterSpacing: '-0.02em',
              marginBottom: 28,
            }}>
              nicchyo
            </div>

            <p style={{
              fontSize: '1.08rem', lineHeight: 1.9,
              color: 'var(--muted)',
              marginBottom: 36, maxWidth: 440,
            }}>
              はじめての日曜市でも迷わず歩けるように。
              マップ・検索・案内役を一つにつないだ
              デジタルマップを育てています。
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: 34, padding: '0 16px', borderRadius: 999,
                    background: 'rgba(123,63,25,0.09)',
                    border: '1px solid rgba(123,63,25,0.14)',
                    fontSize: '0.86rem', fontWeight: 700,
                    color: 'var(--soil-deep)',
                  }}
                >{s}</motion.span>
              ))}
            </div>

            <a
              href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
              target="_blank" rel="noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-flex' }}
            >
              nicchyo を実際に見てみる →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
