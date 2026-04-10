import { useMemo, useState } from 'react';

const cars = [
  { name: 'Pegassi Zentorno', price: '4,500', cat: 'Super', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&q=80' },
  { name: 'Pfister Comet S2', price: '3,200', cat: 'Sport', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80' },
  { name: 'Grotti Itali RSX', price: '5,100', cat: 'Super', img: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=500&q=80' },
  { name: 'Obey 8F Drafter', price: '1,800', cat: 'Sport', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7fd761?w=500&q=80' },
  { name: 'Bravado Buffalo STX', price: '2,100', cat: 'Muscle', img: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=500&q=80' },
  { name: 'Benefactor Schlagen', price: '2,400', cat: 'Sport', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80' },
  { name: 'Ubermacht Rebla GTS', price: '1,200', cat: 'SUV', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80' },
  { name: 'Karin Kuruma', price: '950', cat: 'Sedan', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80' },
  { name: 'Vapid Dominator', price: '1,600', cat: 'Muscle', img: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500&q=80' },
  { name: 'Enus Deity', price: '3,800', cat: 'Luxury', img: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&q=80' },
  { name: 'Annis ZR350', price: '1,750', cat: 'Sport', img: 'https://images.unsplash.com/photo-1566274360936-696233513361?w=500&q=80' },
  { name: 'Dinka Jester RR', price: '1,900', cat: 'Sport', img: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=500&q=80' },
  { name: 'Lampadati Tigon', price: '4,200', cat: 'Super', img: 'https://images.unsplash.com/photo-1603584173870-7f37fe4e1741?w=500&q=80' },
  { name: 'Pegassi Tezeract', price: '6,000', cat: 'Electric', img: 'https://images.unsplash.com/photo-1566473062277-5b32ff307017?w=500&q=80' },
  { name: 'Albany V-STR', price: '2,200', cat: 'Luxury', img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&q=80' },
  { name: 'Canis Freecrawler', price: '800', cat: 'Off-road', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&q=80' },
  { name: 'Ocelot Jugular', price: '1,450', cat: 'Sport', img: 'https://images.unsplash.com/photo-1616422285623-13ff0167c958?w=500&q=80' },
  { name: 'Mammoth Patriot', price: '2,900', cat: 'Off-road', img: 'https://images.unsplash.com/photo-1558522195-e1201b090344?w=500&q=80' },
  { name: 'Declasse Vigero ZX', price: '1,850', cat: 'Muscle', img: 'https://images.unsplash.com/photo-1615715757401-f30e7b27b912?w=500&q=80' },
  { name: 'Grotti Turismo', price: '2,700', cat: 'Classic', img: 'https://images.unsplash.com/photo-1583412261152-019b7160f0bc?w=500&q=80' },
  { name: 'Imponte Deluxo', price: '8,500', cat: 'Special', img: 'https://images.unsplash.com/photo-1610464242612-2a694a974977?w=500&q=80' },
  { name: 'Pegassi Infernus', price: '3,100', cat: 'Super', img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&q=80' },
  { name: 'Maibatsu Penumbra', price: '1,300', cat: 'Sport', img: 'https://images.unsplash.com/photo-1606148632399-6868af68fa19?w=500&q=80' },
  { name: 'Truffade Nero', price: '5,400', cat: 'Super', img: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=500&q=80' },
  { name: 'Coquette D10', price: '2,800', cat: 'Sport', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80' },
  { name: 'Dewbauchee Vagner', price: '4,900', cat: 'Super', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80' },
  { name: 'Overflod Entity', price: '6,200', cat: 'Super', img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?w=500&q=80' },
  { name: 'Bravado Hellfire', price: '1,700', cat: 'Muscle', img: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=500&q=80' },
  { name: 'Grotti Furia', price: '5,800', cat: 'Super', img: 'https://images.unsplash.com/photo-1542362567-b055002b91f4?w=500&q=80' },
  { name: 'Pegassi Toros', price: '1,100', cat: 'SUV', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80' },
];

const filterMap = {
  All: () => true,
  Super: (car) => car.cat.toLowerCase() === 'super',
  Sport: (car) => car.cat.toLowerCase() === 'sport',
  SUV: (car) => car.cat.toLowerCase() === 'suv',
};

export default function CatalogPage({ showToast }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredCars = useMemo(
    () => cars.filter((car) => filterMap[activeFilter](car)),
    [activeFilter]
  );

  const total = cart.reduce((sum, car) => sum + Number(car.price.replace(/,/g, '')), 0);

  const addToCart = (car) => {
    setCart((prev) => [...prev, car]);
    showToast(`${car.name} əlavə edildi`);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const checkout = () => {
    if (!cart.length) return;
    setCart([]);
    setCartOpen(false);
    window.alert('Sifariş tamamlandı!');
  };

  return (
    <>
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center min-w-0 flex-1">
            <h1 className="text-2xl font-black tracking-tighter uppercase text-orange-500 whitespace-nowrap mr-6">Lemonchello City</h1>
            <div className="hidden md:flex flex-1 justify-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] min-w-0">
              <span className="text-white/40">Kataloq</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen((prev) => !prev)}
            className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition"
          >
            Səbət ({cart.length})
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-40 pt-28">
        <header className="pt-12 pb-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Mağazalar Şəbəkəsi</h3>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase">Eksklüziv Kataloq</h2>
            </div>
            <div className="flex flex-wrap gap-3 overflow-x-auto no-scrollbar">
              {Object.keys(filterMap).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn wave-btn px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    activeFilter === filter ? 'active' : 'text-white/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map((car, index) => (
            <article key={`${car.name}-${index}`} className="glass-card overflow-hidden rounded-[2.5rem] border border-white/10">
              <img src={car.img} alt={car.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tighter">{car.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">{car.cat}</p>
                  </div>
                  <span className="text-orange-500 font-black text-xl">{car.price} LC</span>
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(car)}
                  className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest"
                >
                  Səbətə əlavə et
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <div className={`${cartOpen ? '' : 'hidden'} fixed top-24 right-6 z-50 w-80 max-h-[70vh] overflow-y-auto bg-[#0d0d0d]/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl`}>
        <h4 className="text-sm uppercase text-white/50 tracking-widest mb-3">Səbət</h4>
        <div className="space-y-2">
          {cart.length === 0 && <p className="text-white/40 text-sm">Səbət boşdur.</p>}
          {cart.map((item, index) => (
            <div key={`${item.name}-${index}`} className="flex justify-between items-center bg-white/5 border border-white/10 rounded-lg p-2 text-xs">
              <div className="max-w-[50%] truncate">{item.name}</div>
              <div className="text-white/70">{item.price} LC</div>
              <button type="button" onClick={() => removeFromCart(index)} className="text-orange-400 hover:text-orange-200">
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between items-center text-[12px] font-black">
          <span>Cəmi:</span>
          <span>{total.toLocaleString()} LC</span>
        </div>
        <button type="button" onClick={checkout} className="mt-3 w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-xl uppercase text-[10px] font-black">
          Ödənişi Tamamla
        </button>
      </div>
    </>
  );
}
