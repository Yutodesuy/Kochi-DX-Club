'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const EVENTS = [
  {
    date: '2026.03.17',
    tag: '行政連携',
    title: '第3回 高知市商業振興課・街路市担当との会談',
    desc: '検証結果を共有し、今後の連携と改善の方向を確認。',
    highlight: false,
  },
  {
    date: '2026.02.28',
    tag: '🏆 受賞',
    title: 'こうちNPOアワード2025「ワカモノ未来賞」受賞',
    desc: '地域文化と若い世代の視点をつなぐ取り組みとして高く評価された。',
    highlight: true,
  },
  {
    date: '2026.01.24',
    tag: '発表',
    title: 're-KOSEN 最終報告会を実施',
    desc: '調査と開発の成果を整理し、今後の展開まで含めて報告。',
    highlight: false,
  },
  {
    date: '2025.10.19',
    tag: '現地調査',
    title: '日曜市での来訪者アンケートを実施',
    desc: '来訪者の声を集め、迷いや不安がどこで生まれるかを現地で確認。',
    highlight: false,
  },
  {
    date: '2025.09.30',
    tag: '行政連携',
    title: '第2回 高知市商業振興課・街路市担当との会談',
    desc: 'アンケート実施に向けた準備として、オンラインで連携を進行。',
    highlight: false,
  },
];

export default function Timeline() {
  return (
    <section className="section section-alt" id="timeline">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="eyebrow">Track Record</p>
          <h2 className="section-title">活動実績と直近の動き</h2>
          <p className="section-lead">
            nicchyo は、すでに調査・発表・行政連携の流れを踏んで前に進んでいます。
            部活が始まる前から、これだけの実績があります。
          </p>
        </motion.div>

        <ul className="timeline">
          {EVENTS.map((ev, i) => (
            <motion.li
              key={ev.title}
              className={`timeline-item${ev.highlight ? ' highlight' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.60, ease, delay: i * 0.07 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              <time className="timeline-date" dateTime={ev.date}>
                {ev.date}
              </time>
              <div className="timeline-body">
                <span className="timeline-tag">{ev.tag}</span>
                <h3 className="timeline-title">{ev.title}</h3>
                <p className="timeline-desc">{ev.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
