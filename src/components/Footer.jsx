import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 Lemonchello City. Bütün hüquqlar qorunur.</div>
        <div className="flex gap-6">
          <Link to="/forum" className="text-white/20 hover:text-orange-500 transition">
            Instagram
          </Link>
          <Link to="/forum" className="text-white/20 hover:text-orange-500 transition">
            YouTube
          </Link>
          <Link to="/forum" className="text-white/20 hover:text-orange-500 transition">
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
