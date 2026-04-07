'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const AREAS = [
  {
    icon: '🏯',
    title: '地域文化の継承と進化',
    desc: '日曜市のような地域の文化や場の魅力を、壊さずにデジタルの力でアップデートする。',
  },
  {
    icon: '🎨',
    title: 'デジタルデザイン',
    desc: '使いやすさと体験価値を両立するUI / UXを考える。見た目だけでなく、人の動きを設計する。',
  },
  {
    icon: '🔬',
    title: 'フィールドリサーチ',
    desc: '机上ではなく、現地と対話から課題を確かめる。行政や地域の人たちと話す経験が積める。',
  },
  {
    icon: '🌏',
    title: '社会へのインパクト',
    desc: '学生の制作物を、地域で役立つ仕組みにまで育てる。「作って終わり」ではない実践をする。',
  },
];

export default function FocusAreas() {
  return (
    <section className="section section-alt">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="eyebrow">Focus Areas</p>
          <h2 className="section-title">高知DX部が向き合う4つの視点</h2>
          <p className="section-lead">
            一つのサービスをつくるだけではなく、課題発見から運用まで通して高知の未来に
            つながる実践力を育てます。
          </p>
        </motion.div>

        <div className="focus-grid">
          {AREAS.map((a, i) => (
            <motion.article
              key={a.title}
              className="focus-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.60, ease, delay: i * 0.09 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              <div className="focus-icon" aria-hidden="true">{a.icon}</div>
              <h3 className="focus-title">{a.title}</h3>
              <p className="focus-desc">{a.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
