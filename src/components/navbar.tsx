import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <div className="fixed top-0 w-full z-50">
        <div className=" mx-2 my-2 rounded-xl bg-gradient-to-r from-blue-800 to-slate-600 px-4 py-3 text-white shadow-lg lg:mx-20 lg:py-4">
          <div className="mx-auto flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 rounded"
            >
              <Image src="https://res.cloudinary.com/daud2fvro/image/upload/v1760292792/Izhar-motowash3_hvovke.png" alt="Logo" width={40} height={40} />
              <h1 className="text-xl font-bold tracking-wide sm:text-2xl">
                Cuci Steam Izhar
              </h1>
            </a>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-6 lg:flex">
                <a
                  href="#home"
                  className="rounded px-3 py-2 font-medium text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                >
                  Home
                </a>
                <a
                  href="#product"
                  className="rounded px-3 py-2 font-medium text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                >
                  Product
                </a>
                <a
                  href="#contact"
                  className="rounded px-3 py-2 font-medium text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                >
                  Contact
                </a>
                <a
                  href="#contact"
                  className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-slate-900 shadow transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                >
                  Book Now
                </a>
              </div>

              <label
                htmlFor="nav-toggle"
                aria-label="Toggle menu"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 lg:hidden"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        <input
          id="nav-toggle"
          type="checkbox"
          className="peer hidden"
          aria-hidden="true"
        />

        <nav className="lg:hidden origin-top scale-y-0 opacity-0 transition-all duration-200 peer-checked:scale-y-100 peer-checked:opacity-100">
          <div className="mx-2 -mt-1 rounded-xl  px-4 py-3 light:bg-white/5 dark:bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-white/5 lg:mx-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 ">
              <a
                href="#home"
                className="rounded px-3 py-2 font-medium light:text-black/90 dark:text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
              >
                Home
              </a>
              <a
                href="#product"
                className="rounded px-3 py-2 font-medium light:text-black/90 dark:text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
              >
                Product
              </a>
              <a
                href="#contact"
                className="rounded px-3 py-2 font-medium light:text-black/90 dark:text-white/90 transition-colors hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
              >
                Contact
              </a>
              
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-slate-900 shadow transition-colors hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
