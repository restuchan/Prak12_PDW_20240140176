import React, { useState } from 'react';

// ============================================================
// DATA PRODUK (8 produk - semua hasil laut)
// ============================================================
const fishProducts = [
  {
    id: 1,
    name: "Ikan Tongkol",
    price: 35000,
    category: "Ikan Laut",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=500",
    status: "Tersedia",
    desc: "Ikan tongkol segar hasil tangkapan nelayan lokal, kaya protein dan omega-3."
  },
  {
    id: 2,
    name: "Ikan Kerapu Macan",
    price: 85000,
    category: "Ikan Laut",
    image: "https://images.unsplash.com/photo-1523585559758-0a4a68774f35?q=80&w=500&auto=format&fit=crop",
    status: "Pre-order",
    desc: "Kerapu macan premium, populer untuk restoran dan ekspor. Daging tebal dan lezat."
  },
  {
    id: 3,
    name: "Udang Vaname Segar",
    price: 90000,
    category: "Krustasea",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=500",
    status: "Tersedia",
    desc: "Udang vaname segar ukuran jumbo, cocok untuk berbagai olahan masakan."
  },
  {
    id: 4,
    name: "Ikan Kakap Merah",
    price: 70000,
    category: "Ikan Laut",
    image: "https://images.unsplash.com/photo-1603431776785-4b9c86fe1a40?q=80&w=500&auto=format&fit=crop",
    status: "Tersedia",
    desc: "Kakap merah pilihan, tekstur daging lembut dan rasa gurih alami."
  },
  {
    id: 5,
    name: "Cumi-Cumi Segar",
    price: 55000,
    category: "Moluska",
    image: "https://images.unsplash.com/photo-1599055712783-0f505afa412a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNxdWlkfGVufDB8fDB8fHww",
    status: "Tersedia",
    desc: "Cumi-cumi segar tangkapan harian, ideal untuk cumi bakar, goreng, atau saus tiram."
  },
  {
    id: 6,
    name: "Ikan Tenggiri",
    price: 65000,
    category: "Ikan Laut",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&q=80&w=500",
    status: "Tersedia",
    desc: "Tenggiri segar, bahan utama bakso dan pempek terbaik. Daging putih bersih."
  },
  {
    id: 7,
    name: "Kepiting Bakau",
    price: 120000,
    category: "Krustasea",
    image: "https://images.unsplash.com/photo-1553659971-f01207815844?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VwaXRpbmd8ZW58MHx8MHx8fDA%3D",
    status: "Pre-order",
    desc: "Kepiting bakau hidup berukuran besar, dagingnya padat dan manis alami."
  },
  {
    id: 8,
    name: "Ikan Baronang",
    price: 45000,
    category: "Ikan Laut",
    image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80&w=500",
    status: "Tersedia",
    desc: "Baronang segar hasil laut dangkal, cocok untuk ikan bakar dan pepes ikan."
  }
];

const categories = ["Semua", "Ikan Laut", "Krustasea", "Moluska"];

const formatRupiah = (price) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(price) + " / kg";

// ============================================================
// KOMPONEN: KARTU PRODUK
// ============================================================
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="h-48 overflow-hidden relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&q=80&w=500"; }}
      />
      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        {product.category}
      </span>
      {product.status === "Pre-order" && (
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Pre-order
        </span>
      )}
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-3 flex-1 leading-relaxed">{product.desc}</p>
      <p className="text-teal-600 font-bold text-lg mb-4">{formatRupiah(product.price)}</p>
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium flex items-center gap-1 ${product.status === "Tersedia" ? "text-green-600" : "text-orange-500"}`}>
          <span className={`w-2 h-2 rounded-full inline-block ${product.status === "Tersedia" ? "bg-green-500" : "bg-orange-400"}`}></span>
          {product.status}
        </span>
        <button className={`px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${
          product.status === "Pre-order"
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "bg-teal-600 hover:bg-teal-700 text-white"
        }`}>
          {product.status === "Pre-order" ? "Pre-Order" : "Beli Sekarang"}
        </button>
      </div>
    </div>
  </div>
);

// ============================================================
// KOMPONEN UTAMA: APP
// ============================================================
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeNav, setActiveNav] = useState("beranda");

  const filteredProducts = fishProducts.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = activeCategory === "Semua" || product.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const scrollTo = (id) => {
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── NAVBAR ── */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("beranda")}>
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <span className="text-2xl font-bold text-teal-600 tracking-tight">Nusantara Fishery</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              {[["beranda", "Beranda"], ["katalog", "Katalog Produk"], ["tentang-kami", "Tentang Kami"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className={`font-medium transition-colors ${activeNav === id ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500 hover:text-teal-600"}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header id="beranda" className="relative bg-teal-900 text-white py-20 sm:py-28 overflow-hidden">
        {/* Background overlay image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-teal-700/60 text-teal-200 text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-wide">
            🐟 Langsung dari Nelayan Lokal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Hasil Laut Segar <br />
            <span className="text-teal-300">Berkualitas Tinggi</span>
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 max-w-2xl mx-auto mb-8">
            Temukan berbagai pilihan ikan segar dan produk laut terbaik langsung dari nelayan untuk kebutuhan bisnis atau konsumsi harian Anda.
          </p>
          <button
            onClick={() => scrollTo("katalog")}
            className="inline-block bg-white text-teal-900 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors shadow-lg">
            Lihat Katalog →
          </button>
        </div>
      </header>

      {/* ── STATS ── */}
      <section className="bg-teal-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["8+", "Produk Tersedia"], ["100%", "Kesegaran Terjamin"], ["24/7", "Layanan Pre-order"], ["Local", "Nelayan Lokal"]].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl font-extrabold">{val}</div>
              <div className="text-teal-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── KATALOG ── */}
      <main id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Katalog Produk</h2>
            <p className="text-gray-500 mt-1 text-sm">{filteredProducts.length} produk ditemukan</p>
          </div>
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari ikan..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeCategory === cat
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-teal-500 hover:text-teal-600"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Produk */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-medium">Produk tidak ditemukan.</p>
            <p className="text-gray-400 text-sm mt-1">Coba kata kunci atau kategori lain.</p>
          </div>
        )}
      </main>

      {/* ── TENTANG KAMI ── */}
      <section id="tentang-kami" className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between gap-16">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">Tentang Kami</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Nusantara Fishery</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Nusantara Fishery berdedikasi untuk menyediakan hasil laut segar berkualitas tinggi langsung dari nelayan lokal. Kami menjembatani hasil tangkapan terbaik dengan kebutuhan konsumen harian maupun bisnis skala besar.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dengan standar kesegaran yang ketat, penyimpanan higienis, dan sistem distribusi yang efisien, kami memastikan setiap produk yang sampai ke tangan Anda tetap terjaga kualitas, rasa, dan nutrisinya.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {[["100%", "Kesegaran Terjamin"], ["24/7", "Layanan Pre-order"], ["8+", "Jenis Produk"], ["Local", "Nelayan Lokal"]].map(([val, label]) => (
                  <div key={label} className="bg-teal-50 px-5 py-3 rounded-xl border border-teal-100 text-center">
                    <span className="block text-teal-800 font-bold text-xl">{val}</span>
                    <span className="text-teal-600 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              {/* ✅ DIGANTI: foto nelayan, bukan penyelam */}
              <img
                className="rounded-2xl shadow-xl w-full object-cover h-72 sm:h-96"
                src="https://images.unsplash.com/photo-1587391028604-b370121a40f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2hlcm1hbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Nelayan dengan hasil tangkapan"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507124441518-c9584b9dc520?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaGVybWFufGVufDB8fDB8fHww";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <span className="text-teal-400 font-bold">Nusantara Fishery</span>
            </div>
            <p className="text-gray-400 text-sm">© 2026 Restu Chandra — Nusantara Fishery. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}