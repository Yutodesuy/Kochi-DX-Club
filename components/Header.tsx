'use client';

import { useState, useEffect } from 'react';

const NAV = [
  { href: '#mission', label: '部活の目的' },
  { href: '#project', label: '第一目標' },
  { href: '#workflow', label: '進め方' },
  { href: '#timeline', label: '活動実績' },
  { href: '#join', label: '参加する' },
];

export default function Header({ formUrl }: { formUrl: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaHref = formUrl || '#join';
  const ctaTarget = formUrl ? '_blank' : undefined;
  const ctaRel = formUrl ? 'noreferrer' : undefined;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand */}
        <a className="brand" href="#top" aria-label="高知DX部 トップへ">
          <span className="brand-mark">KD</span>
          <span className="brand-text">
            <span className="brand-name">高知DX部</span>
            <span className="brand-sub">Kochi DX Club</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="グローバルナビゲーション">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a className="header-cta" href={ctaHref} target={ctaTarget} rel={ctaRel}>
          興味のある学生はこちら
        </a>

        {/* Mobile hamburger */}
        <button
          className="menu-btn"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span
            style={{
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : undefined,
            }}
          />
          <span style={{ opacity: menuOpen ? 0 : undefined }} />
          <span
            style={{
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : undefined,
            }}
          />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="モバイルナビゲーション">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={closeMenu}>
              {n.label}
            </a>
          ))}
          <a
            className="mobile-cta"
            href={ctaHref}
            target={ctaTarget}
            rel={ctaRel}
            onClick={closeMenu}
          >
            興味のある学生はこちら
          </a>
        </nav>
      )}
    </header>
  );
}
