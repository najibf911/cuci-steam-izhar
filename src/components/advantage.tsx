export default function Advantage() {
  return (
    <section id="keunggulan" aria-labelledby="keunggulan-heading" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="keunggulan-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Keunggulan Kami
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Fokus pada kenyamanan dan kebersihan maksimal
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <div className="h-12 w-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl">
              ⏱️
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Proses cepat (hemat waktu)
            </h3>
            <p className="mt-5 lg:mt-10 text-sm text-gray-600 dark:text-gray-300">
              Pengerjaan efisien tanpa mengorbankan kualitas, menghemat waktu Anda.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <div className="h-12 w-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl">
              🧰
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Peralatan lengkap dengan teknologi steam
            </h3>
            <p className="mt-5 lg:mt-10 text-sm text-gray-600 dark:text-gray-300">
              Didukung perangkat modern bertenaga uap untuk hasil bersih, higienis, dan aman.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl">
              💬
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Layanan ramah & mudah dihubungi
            </h3>
            <p className="mt-5 lg:mt-10 text-sm text-gray-600 dark:text-gray-300">
              Tim responsif dan ramah. Hubungi via{" "}
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline decoration-emerald-300/60"
              >
                WhatsApp
              </a>{" "}
              atau media sosial.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <div className="h-12 w-12 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl">
              ✨
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Kenyamanan & kebersihan maksimal
            </h3>
            <p className="mt-5 lg:mt-10 text-sm text-gray-600 dark:text-gray-300">
              Prioritas pada kenyamanan pelanggan dengan hasil akhir bersih menyeluruh.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}