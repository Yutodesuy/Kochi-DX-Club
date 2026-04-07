'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const HERO_BACKGROUNDS = [
  {
    src: '/images/hero/nichiyoichi.jpg',
    alt: '日曜市の風景',
    position: 'center 45%',
    label: '日曜市',
  },
  {
    src: '/images/hero/kochi-kosen-pic.jpg',
    alt: '高知高専の風景',
    position: 'center 38%',
    label: '高知高専',
  },
  {
    src: '/images/hero/agri-pic.jpg',
    alt: '高知の農業風景',
    position: 'center 42%',
    label: '地域の現場',
  },
] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const stageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={ref} id="top" className="hero-section">
      <div aria-hidden="true" className="hero-orb hero-orb-soil" />
      <div aria-hidden="true" className="hero-orb hero-orb-leaf" />

      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-badges">
            {['高知高専発', '2026年度始動', '部員大募集'].map((tag) => (
              <span key={tag} className="hero-badge">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-award">
            <span className="hero-award-mark">🏆</span>
            <span style={{ lineHeight: 1.4 }}>
              <span className="hero-award-title">
                こうちNPOアワード2025「ワカモノ未来賞」受賞
              </span>
              <span className="hero-award-sub">
                高知市商業振興課と連携した実案件
              </span>
            </span>
          </div>

          <h1 className="display-serif hero-title">
            <span>高知高専から、</span>
            <span>高知の課題を</span>
            <span>DXで解決する。</span>
          </h1>
        </div>

        <div className="hero-visual-column">
          <motion.div
            aria-hidden="true"
            className="hero-visual-stage"
            style={{ y: stageY }}
          >
            {HERO_BACKGROUNDS.map((background, index) => (
              <motion.div
                key={background.src}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 1.3, ease }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={background.src}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1040px) 100vw, 42vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: background.position,
                  }}
                />
              </motion.div>
            ))}
            <div className="hero-visual-shade" />
          </motion.div>

          <div className="hero-visual-meta">
            <div>
              <div className="hero-visual-kicker">Visual Story</div>
              <div className="hero-visual-current">
                {HERO_BACKGROUNDS[activeIndex].label}
              </div>
            </div>

            <div className="hero-visual-tabs" aria-label="ヒーロー画像の切り替え">
              {HERO_BACKGROUNDS.map((background, index) => (
                <button
                  key={background.src}
                  type="button"
                  className={`hero-visual-tab${activeIndex === index ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={background.alt}
                  aria-pressed={activeIndex === index}
                >
                  {background.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
