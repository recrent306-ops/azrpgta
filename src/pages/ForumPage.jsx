import { Link } from 'react-router-dom';

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden relative">
      <div className="blur-bg blur1"></div>
      <div className="blur-bg blur2"></div>
      <div className="center text-center relative z-10 p-6">
        <h1 className="text-7xl md:text-[7rem] font-black text-orange-500 mb-6 tracking-[0.1em]">404</h1>
        <p className="text-white text-lg opacity-80 mb-8">Bağışlayın, bu səhifə mövcud deyil və ya silinib.</p>
        <Link to="/" className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-[0.1em] shadow-xl shadow-orange-500/30 transition hover:scale-105">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}
