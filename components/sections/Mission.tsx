'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const MISSIONS = [
  {
    num: '01',
    icon: '🔍',
    title: '高知の現場から課題を見つける',
    desc: '日曜市のような地域の現場に入り、来訪者・出店者・行政の声を集めながら、本当に困っていることを言語化します。机上の仮説ではなく、現場の事実から始めます。',
  },
  {
    num: '02',
    icon: '⚡',
    title: 'DXを小さく速く試す',
    desc: '調査で見つけた課題に対してプロトタイプを素早くつくり、実際に触ってもらい、改善していくサイクルを回します。完璧を目指すより、試して学ぶことを優先します。',
  },
  {
    num: '03',
    icon: '🌱',
    title: '高知で続く仕組みにする',
    desc: '作品で終わらせず、地域と一緒に育てられる形を目指します。学生の学びと地域の持続性を両立させることが、高知DX部の根っこにある考え方です。',
  },
];

export default function Mission() {
  return (
    <section className="section section-alt" id="mission">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="eyebrow">Mission</p>
          <h2 className="section-title">部活として目指すこと</h2>
          <p className="section-lead">
            高知DX部は、単にアプリをつくる部活ではありません。現場の声を起点に課題を見つけ、
            試作品をつくり、実際に使われる形まで持っていくための部活です。
          </p>
        </motion.div>

        <div className="mission-grid">
          {MISSIONS.map((m, i) => (
            <motion.article
              key={m.num}
              className="mission-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: i * 0.10 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <p className="mission-num">{m.num}</p>
              <div className="mission-icon" aria-hidden="true">{m.icon}</div>
              <h3 className="mission-title">{m.title}</h3>
              <p className="mission-desc">{m.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
