import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ForumPage from './pages/ForumPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function Toast({ message }) {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-3 rounded-2xl shadow-2xl font-bold text-xs uppercase tracking-widest transition-all duration-500 z-[100] ${
        message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {message || 'Kopyalandı!'}
    </div>
  );
}

function AppContent() {
  const [toastText, setToastText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!toastText) return undefined;
    const timer = window.setTimeout(() => setToastText(''), 1500);
    return () => window.clearTimeout(timer);
  }, [toastText]);

  const showToast = (text) => {
    setToastText(text);
  };

  return (
    <div className="min-h-screen relative">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        onMenuClose={() => setMobileMenuOpen(false)}
        onCopyIp={() => showToast('Kopyalandı!')}
      />

      <Routes>
        <Route path="/" element={<HomePage onCopyIp={() => showToast('Kopyalandı!')} />} />
        <Route path="/catalog" element={<CatalogPage showToast={showToast} />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="*" element={<ForumPage />} />
      </Routes>

      <Footer />
      <Toast message={toastText} />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
