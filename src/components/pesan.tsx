"use client";

import type React from "react";
import { useEffect, useState } from "react";
import db from "@/lib/database.json";

export default function Pesan() {
  const [queue, setQueue] = useState<{
    position: number;
    waitMinutes: number;
    lastUpdated: string;
  } | null>(null);
  const [loadingQueue, setLoadingQueue] = useState(false);

  useEffect(() => {
    const ev = new EventSource("/api/queue/sse");
    ev.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setQueue(data);
      } catch {}
    };
    ev.onerror = () => {
      ev.close();
      // fallback: try a one-time fetch if needed
      fetch("/api/queue", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => d && setQueue(d))
        .catch(() => {});
    };
    return () => ev.close();
  }, []);

  return (
    <section
      id="contact"
      className="px-4 py-16 bg-[#ffffffea] backdrop-blur-sm"
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-lg backdrop-blur">
          <h3 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">
            Pesan Layanan
          </h3>
          <p className="mb-2 text-slate-600">
            Isi formulir di bawah ini untuk memesan via WhatsApp.
          </p>
          <div className="mb-8 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
            <div>
              <p className="text-sm font-medium">Status Antrian</p>
              {queue ? (
                <p className="text-sm">
                  Posisi:{" "}
                  <span className="font-semibold">#{queue.position}</span> ·
                  Estimasi:{" "}
                  <span className="font-semibold">
                    {queue.waitMinutes} menit
                  </span>
                </p>
              ) : (
                <p className="text-sm">Memuat antrian…</p>
              )}
            </div>
            <button
              type="button"
              onClick={async () => {
                setLoadingQueue(true);
                try {
                  const res = await fetch("/api/queue", { cache: "no-store" });
                  if (res.ok) setQueue(await res.json());
                } finally {
                  setLoadingQueue(false);
                }
              }}
              className="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-60"
              disabled={loadingQueue}
            >
              Refresh
            </button>
          </div>

          <form
            className="grid gap-5"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);

              const name = String(data.get("name") || "").trim();
              const service = String(data.get("service") || "").trim();
              const phoneInput = String(data.get("phone") || "").trim();
              const notes = String(data.get("notes") || "").trim();

              const phoneDigits = phoneInput.replace(/[^\d]/g, "");

              if (!name || !service || !phoneDigits) {
                alert("Mohon lengkapi nama, layanan, dan nomor telepon.");
                return;
              }

              // Ganti dengan nomor WhatsApp admin/usaha (format internasional tanpa +, contoh Indonesia: 62812xxxxxxx)
              const adminPhone = "6285920576070";
              // const adminPhone = "6281310833392";

              const message = [
                `Halo, saya ${name}.`,
                `Ingin memesan: ${service}`,
                `Kontak: ${phoneInput}`,
                notes ? `Catatan: ${notes}` : null,
              ]
                .filter(Boolean)
                .join("\n");

              const isMobile = /Android|iPhone|iPad|iPod/i.test(
                navigator.userAgent
              );
              const baseUrl = isMobile
                ? `https://wa.me/${adminPhone}?text=${encodeURIComponent(
                    message
                  )}`
                : `https://web.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(
                    message
                  )}`;

              window.open(baseUrl, "_blank", "noopener,noreferrer");


              
              form.reset();
            }}
          >
            <div className="grid gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700"
              >
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nama Anda"
                className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/40"
              />
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="service"
                className="text-sm font-medium text-slate-700"
              >
                Jenis Layanan
              </label>
              <select
                id="service"
                name="service"
                required
                className="cursor-pointer block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/40"
                defaultValue=""
              >
                <option className="cursor-pointer" value="" disabled>
                  Pilih layanan...
                </option>
                {db.produkList?.map((p: { nama: string; harga: string }) => (
                  <option
                    className="cursor-pointer"
                    key={p.nama}
                    value={`${p.nama} (${p.harga})`}
                  >
                    {p.nama} = {p.harga}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-slate-700"
              >
                Nomor Telepon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                required
                placeholder="Contoh: 0812xxxxxxx atau +62 812xxxxxxx"
                className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/40"
              />
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="notes"
                className="text-sm font-medium text-slate-700"
              >
                Catatan (opsional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Tulis alamat, waktu yang diinginkan, dsb."
                className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/40"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Pesan via WhatsApp
            </button>

            <p className="text-xs text-slate-500">
              Tombol akan membuka WhatsApp dengan pesan yang sudah terisi
              otomatis.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
