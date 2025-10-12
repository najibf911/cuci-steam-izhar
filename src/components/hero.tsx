export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center lg:min-h-screen pt-24 pb-10 lg:py-0 px-6 overflow-hidden text-center lg:px-20"
      style={{
        color: "#fff",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-10 lg:w-full lg:h-full"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2549942/pexels-photo-2549942.jpeg?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Content in front of background */}
      <div className="relative z-10 mx-1 lg:mx-0 w-full max-w-4xl">
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl dark:bg-black/20 light:bg-white/10 backdrop-blur-md ring-1 ring-white/15 shadow-2xl shadow-black/20">
          <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-50 ring-1 ring-white/20">
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-blue-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 7l-9 10L3 11l1.5-1.5L12 14l7.5-8L21 7z" />
          </svg>
          Cuci Steam Motor Profesional
        </span>
          </div>

          <h1 className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow">
          Bersih, Wangi, Puas!
        </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-blue-50/90">
        Solusi lengkap untuk semua kebutuhan laundry Anda. Kami menyediakan layanan
        cuci steam terbaik agar motor Anda tetap bersih dan segar.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          aria-label="Pesan sekarang"
        >
          Pesan Sekarang
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
          aria-label="Pelajari lebih lanjut"
        >
          Selengkapnya
        </a>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1 text-yellow-300">
          {[...Array(5)].map((_, i) => (
            <svg
          key={i}
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
            >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0L6.61 16.282c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.974 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-blue-50/80">
          4.9/5 dari 1.5k+ pelanggan
        </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-blue-50/90">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-sky-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 18h16v2H4v-2zm8-16l7 7h-4v6H9v-6H5l7-7z" />
          </svg>
          <span className="cursor-default">Antar-Jemput Cepat</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-sky-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v11a4 4 0 004 4h10a4 4 0 004-4V5a2 2 0 00-2-2H5zm2 4h10v2H7V7zm0 4h10v2H7v-2z" />
          </svg>
          <span className="cursor-default">Paket Fleksibel & Hemat</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-sky-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
          </svg>
          <span className="cursor-default">Garansi Kepuasan</span>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}