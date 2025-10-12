"use client";

import React from "react";
import { produkList, produkImages } from "@/lib/database.json";

export default function Product() {
  const [visibleCount, setVisibleCount] = React.useState(8);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  return (
    <section id="product" className="relative w-full py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h3 className="mb-6 lg:mb-10 text-center text-2xl sm:text-3xl font-bold text-blue-800 dark:text-white">
        Daftar Produk & Layanan
      </h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {produkList.slice(0, visibleCount).map((produk, idx) => (
        <article
          key={idx}
          className="group rounded-xl border border-blue-100/60 bg-white/70 p-0 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/60"
        >
          <a href="#" className="flex flex-col items-center p-6">
          <img
            loading="lazy"
            src={produkImages[idx]}
            alt={produk.nama}
            className="mb-4 h-24 w-24 rounded-full object-cover ring-2 ring-blue-200 transition group-hover:ring-blue-400"
          />
          <span className="mb-1 text-center text-base font-medium text-gray-900 dark:text-gray-100">
            {produk.nama}
          </span>
          <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">
            {produk.harga}
          </span>
          </a>
        </article>
        ))}
      </div>

      {produkList.length > 8 && (
        <div className="mt-8 lg:mt-12 flex items-center justify-center gap-3">
        {visibleCount > 8 && (
          <button
          onClick={() => setVisibleCount((v) => Math.max(8, v - 8))}
          className="cursor-pointer px-4 sm:px-6 py-2 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/30"
          >
          Lihat Lebih Sedikit
          </button>
        )}
        {visibleCount < produkList.length && (
          <button
          onClick={handleShowMore}
          className="cursor-pointer px-4 sm:px-6 py-2 rounded-lg border border-blue-300 text-blue-700 hover:bg-blue-50 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/30"
          >
          Lihat Lebih Banyak
          </button>
        )}
        </div>
      )}
      </div>
    </section>
  );
}

    