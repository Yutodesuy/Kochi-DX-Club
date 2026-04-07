'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const POINTS = [
  {
    title: 'マップで全体をつかむ',
    desc: '広い市の中で、自分がどこから歩き始めるかを決めやすくする。初めてでも迷わない体験を設計します。',
  },
  {
    title: '気になるものを見つけやすくする',
    desc: '検索やカテゴリ整理を通じて、初見でも探索しやすい導線を整える。掘り出し物との出会いをデジタルで再現します。',
  },
  {
    title: '相談しづらさを下げる',
    desc: '案内役の存在で、最初の一声への心理的ハードルを下げる。デジタルが「人との距離」を縮める役割を担います。',
  },
];

const SKILLS = [
  'UI / UX 設計',
  'フロントエンド開発',
  'データ整理と可視化',
  'ユーザーインタビュー設計',
  '行政・地域との対話',
  'プロダクト企画',
];

const THEMES = [
  '観光導線の改善',
  '地域商店と来訪者の接点づくり',
  '高知で暮らす人の不便の解消',
  '若い世代が地域課題に参加できる仕組みづくり',
];

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="eyebrow">First Project</p>
          <h2 className="section-title">
            第一目標は、日曜市デジタルマップの開発
          </h2>
          <p className="section-lead">
            <strong>nicchyo</strong> の方向性をベースに、日曜市を「迷う場所」ではなく
            「楽しみが広がる場所」に変えるためのデジタル体験を磨いていきます。
          </p>
        </motion.div>

        <div className="project-layout">
          {/* Main feature */}
          <motion.article
            className="project-main"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, ease }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <p className="project-main-label">Featured</p>
            <h3 className="project-main-title">
              日曜市をもっと歩きやすく、もっと知りやすく。
            </h3>
            <p className="project-main-desc">
              nicchyo は、地図を見る・気になるものを探す・案内役に相談する、という体験を
              一つにつないだデジタルマップです。目的は効率化そのものではなく、
              日曜市の楽しさを最大化することにあります。
            </p>

            <ul className="project-points">
              {POINTS.map((p, i) => (
                <motion.li
                  key={p.title}
                  className="project-point"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                  viewport={{ once: true, margin: '-20px' }}
                >
                  <p className="project-point-title">{p.title}</p>
                  <p className="project-point-desc">{p.desc}</p>
                </motion.li>
              ))}
            </ul>

            <div style={{ marginTop: '28px' }}>
              <a
                className="btn btn-ghost"
                href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex' }}
              >
                nicchyo を実際に見てみる →
              </a>
            </div>
          </motion.article>

          {/* Side cards */}
          <div className="project-side">
            <motion.article
              className="project-side-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.10 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <p className="project-side-label">このプロジェクトで磨く力</p>
              <h3 className="project-side-title">実案件で身につくスキル</h3>
              <ul className="dot-list">
                {SKILLS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="project-side-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <p className="project-side-label">日曜市の先に広げたいテーマ</p>
              <h3 className="project-side-title">次に挑みたい高知の課題</h3>
              <ul className="dot-list">
                {THEMES.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
