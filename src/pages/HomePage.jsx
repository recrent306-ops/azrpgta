import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const carouselImages = [
  'https://avtosfer.az/upload/news/435011.jpg',
  'https://wallpaperaccess.com/full/1567665.jpg',
  'https://img.gazeta.ru/files3/445/11742445/upload-01-pic905-895x505-88191.jpg',
];

const featuredCards = [
  {
    title: 'Pfister',
    subtitle: 'Comet S2',
    value: '2,500',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600',
  },
  {
    title: 'Pegassi',
    subtitle: 'Zentorno',
    value: '4,000',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600',
  },
];

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [donateFeedback, setDonateFeedback] = useState('');
  const [donateAmount, setDonateAmount] = useState('');
  const [donateOption, setDonateOption] = useState('25');
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [location.hash]);

  const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  const handleRegister = (event) => {
    event.preventDefault();
    setRegisterSuccess(true);
    event.currentTarget.reset();
  };

  const handleDonate = (event) => {
    event.preventDefault();
    const amount = Number(donateAmount || donateOption);
    if (amount >= 10) {
      setDonateFeedback(`${amount} LC uğurla əlavə olundu!`);
      setDonateAmount('');
      setDonateOption('25');
    } else {
      setDonateFeedback('Zəhmət olmasa ən az 10 LC daxil edin.');
    }
  };

  return (
    <>
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <header className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h3 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Mağazalar Şəbəkəsi</h3>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">Eksklüziv<br />Kataloq</h1>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 overflow-x-auto pb-4 no-scrollbar w-full md:w-auto">
            <Link to="/catalog" className="bg-[#7a3e1a] hover:bg-orange-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-xl shadow-black/50 hover:scale-105 active:scale-95">
              KATALOG
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-card p-10 rounded-[2.5rem] text-center">
          <h4 className="text-3xl font-black mb-1">15,402</h4>
          <p className="text-[9px] text-white/30 uppercase tracking-widest">Qeydiyyatlı oyunçu</p>
        </div>
        <div className="glass-card p-10 rounded-[2.5rem] text-center border-orange-500/20">
          <h4 className="text-3xl font-black text-orange-500 mb-1">482</h4>
          <p className="text-[9px] text-white/30 uppercase tracking-widest">Hazırda Online</p>
        </div>
        <div className="glass-card p-10 rounded-[2.5rem] text-center">
          <h4 className="text-3xl font-black mb-1">120+</h4>
          <p className="text-[9px] text-white/30 uppercase tracking-widest">Unikal Avtomobil</p>
        </div>
        <div className="glass-card p-10 rounded-[2.5rem] text-center">
          <h4 className="text-3xl font-black mb-1">24/7</h4>
          <p className="text-[9px] text-white/30 uppercase tracking-widest">Texniki Dəstək</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h3 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-4">Tərəfini seç</h3>
          <h2 className="text-5xl font-black tracking-tighter uppercase">Şəhərin Hekayəsini Sən Yaz</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="image-swap-container h-[500px]">
            <img src="https://images.oxu.az/2021/07/02/14/07/13/f0099881-264f-40bc-81a9-d0a4cc47ee7d/_ROM8009:1200.jpg" className="image-swap-main w-full h-full object-cover" alt="Qanunun Keşiyində" />
            <div className="image-swap-hover flex flex-col justify-end p-12 bg-gradient-to-t from-orange-600 to-transparent">
              <h4 className="text-4xl font-black mb-4">Qanunun Keşiyində</h4>
              <p className="text-sm opacity-80 mb-6 font-medium">LSPD sıralarına qoşulun və şəhərdə asayişi bərpa edin. Xüsusi rütbələr və texnika sizi gözləyir.</p>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest self-start">
                Müraciət et
              </button>
            </div>
          </div>
          <div className="image-swap-container h-[500px]">
            <img src="https://axsam.az/img/pics/large/2015-07/51172_3mfznnpq8f.jpg" className="image-swap-main w-full h-full object-cover" alt="Küçələrin Hakimi" />
            <div className="image-swap-hover flex flex-col justify-end p-12 bg-gradient-to-t from-blue-900 to-transparent">
              <h4 className="text-4xl font-black mb-4">Küçələrin Hakimi</h4>
              <p className="text-sm opacity-80 mb-6 font-medium">Cinayət dünyasında öz imperiyanızı qurun. Kartellər, soyğunlar və gizli bizneslər.</p>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest self-start">
                Klan yarat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Atmosfer qalereyası</h2>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
          <div className="carousel-track" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
            {carouselImages.map((src, index) => (
              <div key={index} className="carousel-item">
                <img src={src} className="w-full h-[500px] object-cover rounded-[3rem]" alt={`Carousel ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-start justify-center h-full pt-10">
            <h3 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Eksklüziv</h3>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6 leading-none">Premium<br />Avtopark</h2>
            <p className="text-white/40 mb-10 text-sm font-medium leading-relaxed max-w-xs">
              Şəhərdə seçilmək istəyənlər üçün unikal, limitli sayda gətirilən lüks avtomobillər.
            </p>
            <Link to="/catalog" className="relative z-50">
              <button className="bg-[#7a3e1a] hover:bg-orange-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 shadow-xl shadow-black/50 hover:scale-105 active:scale-95">
                KATALOQA BAX
              </button>
            </Link>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredCards.map((card) => (
              <div key={card.title} className="glass-card p-6 rounded-[3rem] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                <div className="overflow-hidden rounded-[2rem] mb-6 h-52">
                  <img src={card.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={card.subtitle} />
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h4 className="text-white font-black text-lg uppercase tracking-tighter">{card.title}</h4>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{card.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-orange-500 font-black text-xl italic">{card.value}</span>
                    <span className="block text-[8px] text-white/20 font-black uppercase tracking-widest">LC Coins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="play" className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-black mb-20 tracking-tighter uppercase">Necə Qoşulmalı?</h1>
        <div className="grid gap-8 text-left">
          <div className="glass-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
            <div className="text-7xl font-black text-white/5">01</div>
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-2">GTA V Lisenziyası</h3>
              <p className="text-white/40 text-sm mb-6 uppercase tracking-widest font-bold">Steam / Epic / Rockstar</p>
              <button className="bg-white/10 px-8 py-3 rounded-xl text-[10px] font-black uppercase">Mağazaya keç</button>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
            <div className="text-7xl font-black text-white/5">02</div>
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-2">Lemonchello Launcher</h3>
              <p className="text-white/40 text-sm mb-6">Xüsusi launcherimizi yükləyərək bir kliklə serverə daxil olun.</p>
              <button className="bg-orange-500 px-8 py-3 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-orange-500/20">Proqramı Yüklə</button>
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-orange-500 uppercase text-[10px] tracking-widest">Alta serverinin ümumi qaydaları</h2>
          <h1 className="text-4xl font-black">Alta qaydaları</h1>
          <p className="text-white/40 mt-3">Alta serverində oynayarkən oyunçu aşağıdakı qaydalara əməl etməlidir.</p>
        </div>
        <div className="grid gap-4 text-white/80">
          {[
            { title: '1.1 Ekran görüntüsü vəziyyəti', text: 'Ekran görüntüsü vəziyyəti - əvvəlcədən hazırlanmış RP-oyun hadisəsidir, RP-də istifadə üçün skrinşotlarla təsdiqlənməlidir. Ən azı 6 /me və /do atışı və HUD daxil edilməlidir. Etibarlılıq müddəti 3 saatdır.' },
            { title: '1.2 Oyunçulara münasibət', text: 'Oyunculara qarşı zorakılıq, təhqir və aşağılayıcı davranış qadağandır. Dövlət strukturu tutularsa, dizə çəkmək icazəlidir.' },
            { title: '1.3 Prosesi uzatmaq', text: 'RP-prosesini səbəbsiz uzatmaq qadağandır, məsələn uzun karvan və ya lazımsız həbs. 60 dəqiqədən sonra tutulan şəxs azad olmalıdır.' },
            { title: '1.4 Cinayətkar fəaliyyətlər', text: 'Cinayətkar hərəkətlər cinayətkar təşkilata daxil olmayan personajlar üçün qadağandır. Başlıq ərazisində fraksiya nəqliyyat vasitəsinin baqajından oğurluq qadağandır.' },
            { title: '1.5 Elanlar', text: '5VITO-da kateqoriyaya uyğun olmayan elanlar və digər elanları / profilləri reklam etmək qadağandır. Yanlış elanlar silinə və cəzalandırıla bilər.' },
            { title: '1.10 Geyim', text: 'Forma tələb edən işdə şəxsi geyim qadağandır. Növbəyə başlayanda tələb olunan iş forması geyiləcək.' },
            { title: '2.1 Öz-özünə oyun', text: 'Öz tərəfinə qarşı oyun (hoşsuzluq, sənədlər barədə saxta məlumat) 1.1-ə uyğun skrinşot vəziyyəti olmadıqda qadağandır.' },
            { title: '2.2 Taser məhdudiyyətləri', text: 'RP-məqsəd olmadan təkərlərə atəş qadağandır. Taser 3 kartuşda işləyir, atəşlər arasında 5 saniyə fasilə olmalıdır, hərəkətli nəqliyyatdan atəş qadağandır.' },
            { title: '2.3 İkinci personaj', text: 'Əsas personaj dövlət strukturunda və ya digər cinayətkar fraksiyada olduqda ikinci personajı cinayətkar təşkilata daxil etmək qadağandır.' },
            { title: '2.5 RK', text: 'Revenge Kill (RK) qadağandır. Ölüm yerinə qayıdış 15 dəqiqə sonra icazəlidir, xüsusi tədbirlər istisna oluna bilər.' },
            { title: '3.1 & 3.2 İşçilər', text: 'Güvən strukturunun əməkdaşları 2 cüt əl vəzirini daşımalıdır. Eyni vaxtda 2-dən çox şəxs olduqda bağlamaq olmaz, Taser yalnız əsaslı səbəblə istifadə edilməlidir.' },
          ].map((item) => (
            <article key={item.title} className="glass-card p-6 rounded-[2rem] border border-white/10">
              <h3 className="text-lg font-black mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-sm text-white/40">
          <p>Qaydaların pozulması xəbərdarlıq, müvəqqəti və ya daimi banla nəticələnə bilər.</p>
        </div>
      </section>

      <section id="donate" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Xoş Gəldin</h2>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight">Donat Paketləri & Avantajlar</h1>
          <p className="text-white/40 mt-4 max-w-3xl mx-auto">Dəstəyiniz serverin inkişafı və yeni imkanların açılması üçün vacibdir. Hər paket unikal imtiyazlarla gəlir.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Bronze Pack', description: '300 LC + 1x Xüsusi Tag', details: ['10% daha çox XP', 'Oyun içi ünvanda prioritet', '7 günlük VIP status'], price: 300 },
            { title: 'Silver Pack', description: '750 LC + 2x Unikal Dəri', details: ['20% daha çox XP', 'Ticarət bonusu', '15 günlük VIP status'], price: 750 },
            { title: 'Gold Pack', description: '1500 LC + 1x Nadir Avtomobil', details: ['30% daha çox XP', 'Komanda yaratma imkanı', '30 günlük VIP status'], price: 1500 },
          ].map((pack) => (
            <div key={pack.title} className="glass-card p-6 rounded-[2.5rem] border border-white/10 animate-hue-cycle">
              <h3 className="text-xl font-black mb-3 uppercase">{pack.title}</h3>
              <p className="text-white/50 mb-4">{pack.description}</p>
              <ul className="text-white/40 text-sm space-y-2 mb-5">
                {pack.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
              <button className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-xl font-black">Səbətə əlavə et</button>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="glass-card p-8 rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl font-black mb-4">Sürətli Donat Forması</h3>
            <form onSubmit={handleDonate} className="grid gap-4 md:grid-cols-3">
              <input
                value={donateAmount}
                onChange={(event) => setDonateAmount(event.target.value)}
                type="number"
                min="10"
                placeholder="Məbləğ (LC)"
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white placeholder-white/40 focus:border-orange-500"
              />
              <select
                value={donateOption}
                onChange={(event) => setDonateOption(event.target.value)}
                className="bg-white/5 border border-white/10 p-3 rounded-xl text-white"
              >
                <option value="25">25 AZN &gt; 700 LC + 1x kitab</option>
                <option value="50">50 AZN &gt; 1500 LC + 2x dərzilik</option>
                <option value="100">100 AZN &gt; 3200 LC + 5x nadir qutu</option>
              </select>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-xl font-black uppercase tracking-widest">
                Donat Et
              </button>
            </form>
            <p className="mt-4 text-sm text-white/50">{donateFeedback}</p>
          </div>
        </div>
      </section>

      <section id="dashboard" className="max-w-md mx-auto px-6 py-32">
        <div className="glass-card p-10 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-6 text-center uppercase tracking-tighter">Qeydiyyat</h2>
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <input type="text" name="username" placeholder="İstifadəçi adı" required className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition" />
            <input type="email" name="email" placeholder="E-poçt" required className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition" />
            <input type="password" name="password" placeholder="Şifrə" required className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition" />
            <button type="submit" className="bg-orange-500 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 transition">
              Qeydiyyatdan keç
            </button>
          </form>
          {registerSuccess && <div className="mt-6 text-green-400 text-center font-bold">Qeydiyyat uğurla tamamlandı!</div>}
        </div>
      </section>
    </>
  );
}
