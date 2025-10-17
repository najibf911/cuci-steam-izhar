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
            "url('https://res.cloudinary.com/daud2fvro/image/upload/v1760293622/hero_km8xnm.avif?auto=format&fit=crop&w=1920&q=80')",
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
            Solusi lengkap untuk semua kebutuhan laundry Anda. Kami menyediakan
            layanan cuci steam terbaik agar motor Anda tetap bersih dan segar.
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
              href="#keunggulan"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
              aria-label="Pelajari lebih lanjut"
            >
              Selengkapnya
            </a>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1 text-yellow-300">
              {[...Array(4)].map((_, i) => (
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
              berdasarkan review pelanggan
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-[60%] mx-auto text-blue-50/90">
            {/* link ke sosial media */}
            <a
              href="https://www.facebook.com/share/p/1Cw5yabSC3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Facebook kami"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            >
                <svg
                aria-hidden="true"
                className="h-5 w-5 text-sky-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/cucisteamizhar?igsh=MWZiZWF5amR4d25rag=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Instagram kami"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            >
                <svg
                aria-hidden="true"
                className="h-5 w-5 text-sky-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.5" />
                </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@cucisteamizhar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi TikTok kami"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            >
                <svg
                aria-hidden="true"
                className="h-5 w-5 text-sky-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M21.5 9.5a6 6 0 0 1-6-6h-3v12a4 4 0 1 1-4-4" />
                </svg>
              <span>Tiktok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
