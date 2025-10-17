export default function Information() {
  const mapsUrl =
    "https://maps.google.com/?q=Jl.+Lumbu+Timur+III+G+Rawalumbu+Bekasi"

  return (
    <section aria-labelledby="info-title" className="flex justify-center">
      <div className="flex flex-col items-center overflow-hidden w-full rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-md backdrop-blur-sm transition hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60 sm:p-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 ring-1 ring-inset ring-indigo-600/20"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </span>
          <h2 id="info-title" className="text-xl font-semibold text-slate-900 dark:text-white">
            Informasi Alamat
          </h2>
        </div>

        <address className="mt-4 not-italic text-slate-600 dark:text-slate-300">
          Jl. Lumbu Timur III G, Rawalumbu, Bekasi
        </address>

        <div className="mt-5">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M10 7h7v7" />
            </svg>
            Buka di Google Maps
          </a>
        </div>

        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>
    </section>
  )
}