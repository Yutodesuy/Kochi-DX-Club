export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand-name">高知DX部</p>
          <p className="footer-copy">
            高知高専から、高知県の課題をDXで解決するための実践コミュニティ。
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a
              href="https://nicchyo-platform-git-develop-yutodesuys-projects.vercel.app?_vercel_share=xjdcMGY6Nrr6Rqse5BEqdPlOfu9fru58"
              target="_blank"
              rel="noreferrer"
            >
              nicchyo を見る
            </a>
            <a href="#mission">部活の目的</a>
            <a href="#join">参加する</a>
          </div>
          <p className="footer-small">© {year} Kochi DX Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
