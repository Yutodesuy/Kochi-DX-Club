'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type Event = {
  date: string;
  tag: string;
  title: string;
  desc: string;
  highlight: boolean;
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
};

const EVENTS: Event[] = [
  {
    date: '2026.03',
    tag: '行政連携',
    title: '高知市商業振興課・第3回会談',
    desc: '検証結果を共有し、今後の連携と改善の方向を確認。',
    highlight: false,
    photo: '/images/activities/kochi-city-meeting-3.jpg',
    photoAlt: '高知市商業振興課の担当者と学生たちによる会議の様子',
    photoPosition: 'center',
  },
  {
    date: '2026.02',
    tag: '🏆 受賞',
    title: 'こうちNPOアワード2025「ワカモノ未来賞」',
    desc: '地域文化と若い世代の視点をつなぐ取り組みとして高く評価された。',
    highlight: true,
  },
  {
    date: '2026.01',
    tag: '発表',
    title: 're-KOSEN 最終報告会',
    desc: '調査と開発の成果を整理し、今後の展開まで含めて報告。',
    highlight: false,
  },
  {
    date: '2025.10',
    tag: '現地調査',
    title: '日曜市 来訪者ヒアリング実施',
    desc: '高知高専の旗を立てて日曜市に出向き、来訪者の声を直接収集。迷いや不安の発生箇所を現地で確認した。',
    highlight: false,
    photo: '/images/activities/sunday-market-survey.png',
    photoAlt: '高知高専の旗を掲げて日曜市で来訪者にヒアリングする様子',
    photoPosition: 'center 30%',
  },
  {
    date: '2025.09',
    tag: '行政連携',
    title: '高知市商業振興課・第2回会談',
    desc: 'アンケート実施に向けた準備として、オンラインで連携を進行。',
    highlight: false,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div style={{ padding: '0 var(--px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginBottom: 64 }}
        >
          <span className="eyebrow eyebrow-soil" style={{ marginBottom: 14 }}>Track Record</span>
          <h2 className="display-serif" style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: 'var(--soil-deep)', lineHeight: 1.1,
          }}>
            活動実績
          </h2>
        </motion.div>

        <div style={{ maxWidth: 780, position: 'relative' }}>
          {/* 縦ライン */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-40px' }}
            style={{
              position: 'absolute',
              left: 110, top: 0, bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, var(--sun), rgba(123,63,25,0.12))',
              transformOrigin: 'top',
            }}
          />

          {EVENTS.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.60, ease, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-30px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr',
                gap: 32,
                marginBottom: 16,
              }}
            >
              <time style={{
                fontSize: '0.82rem', fontWeight: 800,
                letterSpacing: '0.10em', color: 'var(--soil)',
                textAlign: 'right',
                paddingTop: 20,
              }}>
                {ev.date}
              </time>

              <div style={{
                padding: '18px 22px',
                borderRadius: 18,
                background: ev.highlight
                  ? 'linear-gradient(135deg, rgba(255,230,130,0.22), rgba(255,248,200,0.22))'
                  : 'rgba(255,255,255,0.80)',
                border: ev.highlight
                  ? '1px solid rgba(200,150,30,0.24)'
                  : '1px solid rgba(123,63,25,0.08)',
                boxShadow: ev.highlight
                  ? '0 4px 20px rgba(160,110,10,0.10)'
                  : '0 2px 12px rgba(14,7,4,0.05)',
                position: 'relative',
              }}>
                {/* ドット */}
                <div style={{
                  position: 'absolute',
                  left: -48,
                  top: 22,
                  width: 12, height: 12,
                  borderRadius: '50%',
                  background: ev.highlight
                    ? 'linear-gradient(135deg, #f5c842, #e09030)'
                    : ev.photo
                    ? 'linear-gradient(135deg, var(--sun), var(--soil))'
                    : 'rgba(123,63,25,0.35)',
                  border: '2px solid var(--paper)',
                  boxShadow: ev.highlight
                    ? '0 0 0 3px rgba(200,150,30,0.25)'
                    : ev.photo
                    ? '0 0 0 3px rgba(224,144,48,0.18)'
                    : undefined,
                }} />

                {/* タグ＋タイトル */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  gap: 12, marginBottom: ev.desc ? 6 : 0,
                }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: 24, padding: '0 10px', borderRadius: 999,
                    fontSize: '0.72rem', fontWeight: 800, flexShrink: 0,
                    background: ev.highlight
                      ? 'rgba(255,215,100,0.35)'
                      : 'rgba(255,255,255,0.90)',
                    border: ev.highlight
                      ? '1px solid rgba(200,160,30,0.25)'
                      : '1px solid rgba(123,63,25,0.10)',
                    color: ev.highlight ? '#7a5000' : 'var(--soil-deep)',
                  }}>
                    {ev.tag}
                  </span>
                  <span style={{
                    fontSize: '0.96rem', fontWeight: ev.highlight ? 800 : 700,
                    color: ev.highlight ? '#6b4400' : 'var(--ink)',
                    lineHeight: 1.45,
                  }}>
                    {ev.title}
                  </span>
                </div>

                {/* 説明文 */}
                {ev.desc && (
                  <p style={{
                    fontSize: '0.86rem', lineHeight: 1.75,
                    color: 'var(--muted)',
                    paddingLeft: ev.tag ? 0 : 0,
                    marginBottom: ev.photo ? 14 : 0,
                  }}>
                    {ev.desc}
                  </p>
                )}

                {/* 写真 */}
                {ev.photo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease, delay: 0.20 }}
                    viewport={{ once: true }}
                    style={{
                      position: 'relative',
                      height: 220,
                      borderRadius: 12,
                      overflow: 'hidden',
                      boxShadow: '0 8px 28px rgba(14,7,4,0.14)',
                    }}
                  >
                    <Image
                      src={ev.photo}
                      alt={ev.photoAlt ?? ''}
                      fill
                      sizes="(max-width: 900px) 100vw, 640px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: ev.photoPosition ?? 'center',
                        transition: 'transform 400ms ease',
                      }}
                      className="timeline-photo"
                    />
                    {/* 写真右下にキャプション縦書き */}
                    <div style={{
                      position: 'absolute', right: 10, top: 0, bottom: 0,
                      display: 'flex', alignItems: 'center',
                    }}>
                      <span style={{
                        writingMode: 'vertical-rl',
                        fontSize: '0.60rem', fontWeight: 700,
                        letterSpacing: '0.22em',
                        color: 'rgba(255,255,255,0.62)',
                        background: 'rgba(0,0,0,0.28)',
                        padding: '8px 4px',
                        borderRadius: 4,
                        backdropFilter: 'blur(4px)',
                      }}>
                        {ev.tag} — {ev.date}
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ホバーエフェクト用CSS */}
      <style>{`
        .timeline-photo:hover { transform: scale(1.03); }
      `}</style>
    </section>
  );
}
