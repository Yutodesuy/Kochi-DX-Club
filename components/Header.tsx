'use client';

import { useState, useEffect } from 'react';

const NAV = [
  { href: '#mission', label: '部活の目的' },
  { href: '#project', label: '第一目標' },
  { href: '#learning', label: '学べること' },
  { href: '#join', label: '応募' },
];

export default function Header({ formUrl }: { formUrl: string }) {
  const [heroMode, setHeroMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setHeroMode(y < window.innerHeight * 0.75);
      setScrolled(y > 24);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const modeClass = heroMode ? 'hero-mode' : scrolled ? 'scrolled' : '';
  const ctaHref   = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel    = formUrl ? 'noreferrer' : undefined;

  return (
    <header className={`site-header ${modeClass}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="高知DX部 トップへ">
          <span className="brand-mark">KD</span>
          <span className="brand-text">
            <span className="brand-name">高知DX部</span>
            <span className="brand-sub">Kochi DX Club</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="グローバルナビゲーション">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <a className="header-cta" href={ctaHref} target={ctaTarget} rel={ctaRel}>
          興味のある学生はこちら
        </a>

        <button
          className="menu-btn"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : undefined }} />
          <span style={{ opacity: menuOpen ? 0 : undefined }} />
          <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : undefined }} />
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>
          ))}
          <a
            className="mobile-cta"
            href={ctaHref} target={ctaTarget} rel={ctaRel}
            onClick={() => setMenuOpen(false)}
          >
            興味のある学生はこちら
          </a>
        </nav>
      )}
    </header>
  );
}
