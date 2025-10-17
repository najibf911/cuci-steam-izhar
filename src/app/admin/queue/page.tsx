"use client";

import { useEffect, useState } from "react";

type Q = { position: number; waitMinutes: number; lastUpdated: string };

export default function AdminQueuePage() {
  const [token, setToken] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [waitMinutes, setWaitMinutes] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [queue, setQueue] = useState<Q | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ev = new EventSource("/api/queue/sse");
    ev.onmessage = (e) => {
      try {
        const data: Q = JSON.parse(e.data);
        setQueue(data);
      } catch {}
    };
    ev.onerror = () => ev.close();
    return () => ev.close();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const sanitized = token.replace(/^Bearer\s+/i, "").trim();
      const res = await fetch("/api/queue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sanitized}`,
        },
        body: JSON.stringify({
          position: Number(position),
          waitMinutes: Number(waitMinutes),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => null);
        throw new Error(j?.error || `Request failed: ${res.status}`);
      }
      // success - rely on SSE to refresh
      setPosition("");
      setWaitMinutes("");
    } catch (err: any) {
      setError(err?.message || "Gagal memperbarui antrian");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-semibold">Admin · Update Antrian</h1>

      <section className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-700">Status sekarang:</p>
        {queue ? (
          <p className="mt-1 text-slate-900">
            Posisi: <b>#{queue.position}</b> · Estimasi: <b>{queue.waitMinutes} menit</b>
            <span className="ml-2 text-xs text-slate-500">(update: {new Date(queue.lastUpdated).toLocaleTimeString()})</span>
          </p>
        ) : (
          <p className="mt-1 text-slate-500">Memuat…</p>
        )}
      </section>

      <form onSubmit={submit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Token (Bearer)</label>
          <input
            type="password"
            placeholder="QUEUE_ADMIN_TOKEN"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30"
            required
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Posisi</label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30"
            placeholder="Contoh: 3"
            required
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-slate-700">Estimasi (menit)</label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            value={waitMinutes}
            onChange={(e) => setWaitMinutes(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30"
            placeholder="Contoh: 10"
            required
          />
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={saving}
          className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-60"
        >
          {saving ? "Menyimpan…" : "Simpan"}
        </button>
      </form>
    </main>
  );
}
