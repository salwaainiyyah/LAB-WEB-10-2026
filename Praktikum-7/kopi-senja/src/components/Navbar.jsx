function Navbar({ jumlahItem, totalHarga, rupiah }) {
  return (
    <nav className="sticky top-0 z-10 border-b-2 border-kopi/20 bg-krim/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
        <p className="font-judul text-xl font-bold text-karamel sm:text-2xl">
          <span aria-hidden="true">☀ </span>Kedai Kopi Senja
        </p>
        <p className="rounded-full bg-mentega px-4 py-1.5 text-sm font-bold text-kopi sm:text-base">
          {jumlahItem} item · {rupiah(totalHarga)}
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
