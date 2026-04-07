'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const STEPS = [
  {
    num: 'Step 1',
    icon: '👁',
    title: '見に行く',
    desc: '現場に入り、困りごとや迷いがどこで生まれているかを観察する。仮説より先に事実を集める。',
  },
  {
    num: 'Step 2',
    icon: '💬',
    title: '聞いて整理する',
    desc: '来訪者、地域の方、行政との対話から、本質的な課題を言語化する。表面ではなく根っこをつかむ。',
  },
  {
    num: 'Step 3',
    icon: '🛠',
    title: 'つくって試す',
    desc: '必要最低限の機能から形にして、実際に触ってもらい、反応を得る。完璧より速さを優先する。',
  },
  {
    num: 'Step 4',
    icon: '🔄',
    title: '改善して広げる',
    desc: '検証結果を踏まえて磨き込み、次の高知の課題にも応用できる形にする。学びを積み重ねていく。',
  },
];

export default function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title">活動の進め方</h2>
          <p className="section-lead">
            高知DX部では「思いついたから作る」のではなく、調査・試作・検証を往復しながら
            一段ずつ精度を上げていきます。
          </p>
        </motion.div>

        <div className="workflow-steps">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              className="workflow-step"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.60, ease, delay: i * 0.10 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              <p className="step-num">{s.num}</p>
              <p className="step-icon" aria-hidden="true">{s.icon}</p>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
