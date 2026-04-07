'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const PANELS = [
  {
    title: 'DXとは何か',
    body:
      'DXは、単に紙をPDFにすることでも、フォームをオンライン化することでもありません。情報の流れ、判断の流れ、引き継ぎの流れを、デジタルを前提に組み替えることです。アプリやツールは手段であって、目的ではありません。',
  },
  {
    title: 'なぜDXが必要か',
    body:
      '理由は単純です。人手は限られ、現場の知識は属人化しやすく、毎回同じ説明や確認が発生するからです。気合いで回る仕組みは、一見すると維持できますが、長くは続きません。DXが必要というより、放置のコストが上がっています。',
  },
] as const;

export default function DxPrimer() {
  return (
    <section className="dx-primer">
      <div className="dx-primer-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          viewport={{ once: true, margin: '-60px' }}
          className="dx-primer-header"
        >
          <span className="eyebrow eyebrow-soil" style={{ marginBottom: 16 }}>
            Why DX
          </span>
          <h2 className="display-serif dx-primer-title">
            日常生活で
            <br />
            「これ、めんどくさいな」と感じたことはありませんか？
          </h2>
          <p className="dx-primer-lead">
            DXは社会全体でまだ十分に進んでいるとは言えません。
            とくに地方である高知県では、あらゆる場面で実現できているとは言いがたく、
            まだ多くの余地が残っているのが実情です。
          </p>
        </motion.div>

        <div className="dx-primer-grid">
          {PANELS.map((panel, index) => (
            <motion.article
              key={panel.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
              className="dx-primer-card"
            >
              <div className="dx-primer-index">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="dx-primer-card-title">{panel.title}</h3>
              <p className="dx-primer-card-body">{panel.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          viewport={{ once: true, margin: '-40px' }}
          className="dx-primer-note"
        >
          地方では、余力の少なさそのものが前提です。だからこそ、情報を整理し、無駄な往復を減らし、次の人が引き継げる形にする意味があります。
        </motion.div>
      </div>

      <style jsx>{`
        .dx-primer {
          position: relative;
          padding: 88px 0 96px;
          background:
            linear-gradient(180deg, rgba(243, 237, 228, 0.9) 0%, var(--paper) 100%);
          border-top: 1px solid rgba(81, 36, 11, 0.08);
          border-bottom: 1px solid rgba(81, 36, 11, 0.08);
        }

        .dx-primer-inner {
          padding: 0 var(--px);
        }

        .dx-primer-header {
          max-width: 760px;
          margin-bottom: 40px;
        }

        .dx-primer-title {
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1.15;
          color: var(--soil-deep);
        }

        .dx-primer-lead {
          margin-top: 18px;
          max-width: 680px;
          font-size: 1rem;
          line-height: 1.9;
          color: var(--muted);
        }

        .dx-primer-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .dx-primer-card {
          padding: 28px 28px 30px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(81, 36, 11, 0.10);
          box-shadow: 0 10px 28px rgba(14, 7, 4, 0.04);
        }

        .dx-primer-index {
          margin-bottom: 14px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: var(--soil);
        }

        .dx-primer-card-title {
          margin: 0 0 12px;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--soil-deep);
        }

        .dx-primer-card-body {
          margin: 0;
          font-size: 0.96rem;
          line-height: 1.9;
          color: var(--muted);
        }

        .dx-primer-note {
          margin-top: 18px;
          padding: 20px 22px;
          border-radius: 20px;
          background: rgba(81, 36, 11, 0.04);
          border: 1px solid rgba(81, 36, 11, 0.08);
          font-size: 0.92rem;
          line-height: 1.8;
          color: rgba(29, 36, 48, 0.72);
        }

        @media (max-width: 900px) {
          .dx-primer {
            padding: 72px 0 80px;
          }

          .dx-primer-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
