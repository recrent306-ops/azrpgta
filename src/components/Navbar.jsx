import { Link } from 'react-router-dom';

function Icon({ path }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

const navItems = [
  { label: 'Ana Səhifə', to: '/' },
  { label: 'Necə oynamalı?', to: { pathname: '/', hash: '#play' } },
  { label: 'Profil', to: { pathname: '/', hash: '#dashboard' } },
  { label: 'Qaydalar', to: { pathname: '/', hash: '#rules' } },
];

function Navbar({ mobileMenuOpen, onToggleMobileMenu, onMenuClose, onCopyIp }) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0 flex-1">
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-orange-500 cursor-pointer whitespace-nowrap mr-6">
            AZNEXT <span className="text-white text-[10px] font-light tracking-[0.4em] ml-1">roleplay</span>
          </Link>
          <div className="hidden md:flex flex-1 justify-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] min-w-0">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="liquid-anim-link hover:text-orange-500 transition">
                {item.label}
              </Link>
            ))}
            <Link to="/catalog" className="liquid-anim-link hover:text-orange-500 transition">
              Kataloq
            </Link>
            <Link to="/forum" className="liquid-anim-link opacity-50 hover:opacity-100 transition">
              Forum
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={onCopyIp}
            className="copy-ip-btn flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-500 font-black text-xs uppercase tracking-widest hover:bg-orange-500/10 hover:text-white transition-all"
          >
            <span className="relative flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              play.nextazrp.az
            </span>
          </button>
          <button
            id="burgerBtn"
            type="button"
            onClick={onToggleMobileMenu}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 relative z-[60] group ml-2 ${
              mobileMenuOpen ? 'active' : ''
            }`}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`fixed inset-0 bg-black/80 z-[55] flex flex-col items-end px-0 pt-0 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'open' : ''
        }`}
      >
        <div className="w-4/5 max-w-xs h-full bg-[#181818] shadow-2xl flex flex-col justify-between p-8 relative">
          <div>
            <div className="text-2xl font-black tracking-tighter uppercase text-orange-500 mb-8">
              AZNEXT <span className="text-white text-[10px] font-light tracking-[0.4em] ml-1">roleplay</span>
            </div>
            <nav className="flex flex-col gap-6 text-[13px] font-bold uppercase tracking-[0.2em]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onMenuClose}
                  className="liquid-anim-link hover:text-orange-500 transition"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/catalog" onClick={onMenuClose} className="liquid-anim-link hover:text-orange-500 transition">
                Kataloq
              </Link>
              <Link to="/forum" onClick={onMenuClose} className="liquid-anim-link opacity-50 hover:opacity-100 transition">
                Forum
              </Link>
            </nav>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="text-xs text-white/40 mb-2">Biz sosial şəbəkələrdə</div>
            <div className="flex gap-6">
              <button type="button" className="social-ico" aria-label="Instagram">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4.5" />
                  <rect x="2" y="2" width="20" height="20" rx="6" />
                  <circle cx="18" cy="6" r="1.2" />
                </svg>
              </button>
              <button type="button" className="social-ico" aria-label="YouTube">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="12" rx="4" />
                  <polygon points="10,9 16,12 10,15" />
                </svg>
              </button>
              <button type="button" className="social-ico" aria-label="Telegram">
                <svg className="social-svg" viewBox="0 0 24 24">
                  <polygon points="3,12 21,3 17,21 12,17 7,21 9,14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
