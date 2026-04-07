'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const SKILLS = ['調査', '企画', '開発', '広報', '行政連携'];

export default function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.0, 1.06]);

  return (
    <section id="project" style={{ background: 'var(--paper)', padding: '120px 0', position: 'relative' }}>
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
            <span className="project-heading-line">第一目標は、</span>
            <span className="project-heading-line project-heading-nowrap">日曜市デジタルマップの開発。</span>
          </h2>
        </motion.div>

        {/* スプリット */}
        <div
          className="project-split"
          style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
          }}
        >
          {/* 左: 写真 */}
          <motion.div
            className="project-photo"
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
                src="/images/hero/nichiyoichi.jpg"
                alt="高知の日曜市の風景"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              />
            </motion.div>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(10,5,2,0.22), transparent)',
            }} />
          </motion.div>

          {/* 右: テキスト */}
          <motion.div
            className="project-copy"
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
              このプロジェクトを通して、課題発見から発信までを横断して学べます。
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

      <style jsx global>{`
        .project-heading-line {
          display: block;
        }

        @media (min-width: 901px) {
          .project-heading-nowrap {
            white-space: nowrap;
          }
        }

        @media (max-width: 900px) {
          .project-split {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 28px !important;
          }

          .project-photo,
          .project-copy {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
