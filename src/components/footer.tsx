export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="text-white bg-gradient-to-r from-blue-800 to-slate-600 lg:mx-20 lg:my-10 lg:mb-2 lg:rounded-xl"
    >
      <div className="mx-auto flex  flex-col items-center justify-between gap-3 p-5 lg:flex-row">
      <p className="text-2xl font-bold">Cuci Steam Izhar</p>
      <p className="text-sm opacity-90">Made with ❤️ by Izhar team © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}