'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease, delay },
});

export default function Hero({ formUrl }: { formUrl: string }) {
  const ctaHref = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel = formUrl ? 'noreferrer' : undefined;

  return (
    <section className="hero" id="top">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container hero-grid">
        {/* ── Left: Copy ── */}
        <div className="hero-copy">
          {/* Award badge */}
          <motion.div {...fadeUp(0.05)}>
            <div className="award-badge">
              <span className="award-icon" aria-hidden="true">🏆</span>
              <span className="award-text">
                <span className="award-name">こうちNPOアワード2025「ワカモノ未来賞」受賞</span>
                <span className="award-sub">高知市商業振興課と連携した実案件</span>
              </span>
            </div>
          </motion.div>

          {/* Flags */}
          <motion.div className="flag-group" {...fadeUp(0.12)}>
            <span className="flag">高知高専発</span>
            <span className="flag">2026年度始動</span>
            <span className="flag">部員大募集</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero-h1" {...fadeUp(0.18)}>
            高知高専から、<br />
            高知の課題を<br />
            <em>DXでほどく。</em>
          </motion.h1>

          {/* Lead */}
          <motion.p className="hero-lead" {...fadeUp(0.26)}>
            高知DX部は、高知工業高等専門学校の学生が地域課題に本気で向き合うための新しい部活です。
            2026年度から始動し、第一プロジェクトとして高知県の日曜市をもっと歩きやすく、
            もっと楽しくするデジタルマップ <strong>「nicchyo」</strong> を育てています。
            開発だけでなく、デザイン、調査、企画まで含めて高知高専らしい実践をつくっていきます。
          </motion.p>

          {/* Actions */}
          <motion.div className="hero-actions" {...fadeUp(0.32)}>
            <a className="btn btn-primary" href={ctaHref} target={ctaTarget} rel={ctaRel}>
              興味のある学生はこちら
            </a>
            <a
              className="btn btn-ghost"
              href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
              target="_blank"
              rel="noreferrer"
            >
              nicchyo を確認する
            </a>
          </motion.div>

          {/* Stats */}
          <motion.ul className="hero-stats" {...fadeUp(0.40)}>
            <li className="hero-stat">
              <p className="hero-stat-label">Campus</p>
              <p className="hero-stat-value">高知高専の新しい課題解決部活</p>
            </li>
            <li className="hero-stat">
              <p className="hero-stat-label">Start</p>
              <p className="hero-stat-value">2026年度から始動</p>
            </li>
            <li className="hero-stat">
              <p className="hero-stat-label">Recruit</p>
              <p className="hero-stat-value">開発・デザイン・調査の仲間を募集</p>
            </li>
          </motion.ul>
        </div>

        {/* ── Right: Visual ── */}
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.20 }}
        >
          {/* Photo */}
          <figure className="photo-frame" style={{ margin: 0 }}>
            <Image
              src="/nichiyoichi.jpg"
              alt="高知の日曜市の風景"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <figcaption className="photo-caption">
              <span className="photo-caption-label">Top Visual</span>
              <span className="photo-caption-text">
                日曜市を起点に、高知高専の学生が地域課題に挑む。
              </span>
            </figcaption>
          </figure>

          {/* Nicchyo card */}
          <motion.div
            className="nicchyo-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.45 }}
          >
            <p className="nicchyo-label">First Project</p>
            <h2 className="nicchyo-title">nicchyo</h2>
            <p className="nicchyo-desc">
              はじめての日曜市でも迷わず歩けるように。マップ・検索・案内役・現地検証を
              一つの体験につなぐデジタルマップを育てています。
            </p>
            <div className="nicchyo-pills">
              <span className="nicchyo-pill">地図</span>
              <span className="nicchyo-pill">検索</span>
              <span className="nicchyo-pill">案内役</span>
              <span className="nicchyo-pill">フィールドワーク</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
