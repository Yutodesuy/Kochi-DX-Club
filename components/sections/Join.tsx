'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const BENEFITS = [
  {
    icon: '🏆',
    title: '受賞実績のある実案件の創設メンバーになれる',
    desc: 'こうちNPOアワード2025「ワカモノ未来賞」を受賞した nicchyo を、最初から一緒に育てることができます。',
  },
  {
    icon: '🤝',
    title: '行政とも連携する、本物の実践経験が積める',
    desc: '高知市商業振興課と直接連携しながら、社会に出てからも活きるプロジェクト経験を積めます。',
  },
  {
    icon: '🎯',
    title: 'コードが書けなくても参加できる役割がある',
    desc: '開発・デザイン・リサーチ・企画—あなたの得意を活かせる場が必ずあります。',
  },
];

const ROLES = [
  {
    icon: '💻',
    name: 'エンジニア',
    badge: '随時募集',
    skills: ['フロントエンド', 'バックエンド', 'データ設計', 'API連携'],
  },
  {
    icon: '🎨',
    name: 'デザイナー',
    badge: '随時募集',
    skills: ['UI / UX 設計', 'プロトタイプ', 'グラフィック', '情報設計'],
  },
  {
    icon: '🔍',
    name: 'リサーチャー',
    badge: '随時募集',
    skills: ['ユーザーインタビュー', 'フィールドワーク', 'データ分析', '課題整理'],
  },
  {
    icon: '📋',
    name: 'プランナー',
    badge: '随時募集',
    skills: ['企画立案', '渉外・対話', '発表・資料', 'プロジェクト管理'],
  },
];

export default function Join({ formUrl }: { formUrl: string }) {
  const ctaHref = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel = formUrl ? 'noreferrer' : undefined;

  return (
    <section className="section" id="join">
      <div className="container">
        <div className="join-layout">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, ease }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="eyebrow">For Kochi Kosen Students</p>
            <h2 className="join-title">
              高知高専で、<br />
              地域課題に本気で<br />
              向き合う仲間を募集します。
            </h2>
            <p className="join-lead">
              高知DX部は、コードを書く人だけの部活ではありません。リサーチ、デザイン、発表、
              地域との対話まで含めて課題解決をやり切る高知高専生を募集しています。
              <strong>第一期メンバーとして、部活の文化や進め方そのものを最初から一緒につくることができます。</strong>
            </p>

            <div className="join-benefits">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="join-benefit"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                  viewport={{ once: true, margin: '-20px' }}
                >
                  <div className="benefit-icon" aria-hidden="true">{b.icon}</div>
                  <div>
                    <p className="benefit-text-title">{b.title}</p>
                    <p className="benefit-text-desc">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="join-actions">
              <a
                className="btn btn-primary"
                href={ctaHref}
                target={ctaTarget}
                rel={ctaRel}
              >
                興味のある学生はこちら
              </a>
              <a
                className="btn btn-ghost"
                href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
                target="_blank"
                rel="noreferrer"
              >
                まず nicchyo を見る
              </a>
            </div>

            <p className="join-note">
              ※ 応募フォームのURLが決まり次第、ボタンからフォームへ直接移動できるようにします。<br />
              それまでは、気軽に話しかけてみてください。
            </p>
          </motion.div>

          {/* Right: Role cards */}
          <motion.div
            className="role-cards"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, ease, delay: 0.12 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            {ROLES.map((r, i) => (
              <motion.div
                key={r.name}
                className="role-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.12 + i * 0.08 }}
                viewport={{ once: true, margin: '-20px' }}
              >
                <div className="role-header">
                  <div className="role-icon" aria-hidden="true">{r.icon}</div>
                  <span className="role-name">{r.name}</span>
                  <span className="role-badge">{r.badge}</span>
                </div>
                <div className="role-skills">
                  {r.skills.map((s) => (
                    <span key={s} className="role-skill">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
