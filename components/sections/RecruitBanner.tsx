'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const ROLES = ['開発したい', 'デザインしたい', '地域調査したい', '企画したい'];

export default function RecruitBanner({ formUrl }: { formUrl: string }) {
  const ctaHref = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel = formUrl ? 'noreferrer' : undefined;

  return (
    <section className="recruit-banner">
      <div className="container">
        <motion.div
          className="recruit-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div>
            <p className="recruit-eyebrow">Recruiting Now — 2026年度</p>
            <h2 className="recruit-title">
              創設メンバーとして、<br />
              部活をゼロから一緒につくる。
            </h2>
            <p className="recruit-desc">
              高知DX部は2026年度からスタートする高知高専の新しい実践型部活です。
              日曜市デジタルマップの開発を入口に、高知県の課題をDXで解決する仲間を探しています。
              初年度メンバーだからこそ、部活の文化や進め方そのものに最初から関われます。
            </p>
          </div>

          <div className="recruit-right">
            <div className="recruit-tags">
              {ROLES.map((r) => (
                <span key={r} className="recruit-tag">{r}</span>
              ))}
            </div>
            <a
              className="btn btn-primary"
              href={ctaHref}
              target={ctaTarget}
              rel={ctaRel}
              style={{
                background: 'rgba(255,255,255,0.16)',
                border: '1.5px solid rgba(255,255,255,0.28)',
                color: '#fff',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            >
              参加について詳しく見る
            </a>
            <p className="recruit-note">
              ※ 応募フォームは準備が整い次第このページに掲載します
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
