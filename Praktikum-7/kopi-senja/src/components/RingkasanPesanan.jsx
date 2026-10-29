function RingkasanPesanan({ items, jumlahItem, totalHarga, rupiah, onKurang, onTambah }) {
  return (
    <section aria-labelledby="judul-ringkasan" className="rounded-[1.75rem] border-2 border-kopi bg-krim p-5">
      <h2 id="judul-ringkasan" className="font-judul text-2xl font-bold text-kopi">Ringkasan Pesanan</h2>
      
      {items.length === 0 ? (
        <p className="mt-3 rounded-2xl bg-beige/40 p-3 text-sm">Belum ada pesanan. Tekan Tambah pada menu.</p>
      ) : (
        <ul className="mt-3 divide-y divide-kopi/10">
          {items.map((item) => (
            <li key={item.id} className="py-3 text-sm">
              <div className="flex justify-between gap-2 font-bold text-kopi">
                <span>{item.nama}</span>
                <span>{rupiah(item.subtotal)}</span>
              </div>
              
              <div className="mt-2 flex items-center justify-between">
                <p className="text-espresso/70">
                  {rupiah(item.harga)}
                </p>
                
                {/* Kontrol Kuantitas (- / +) */}
                <div className="flex items-center gap-2 rounded-lg border border-kopi/20 bg-white/50 p-1">
                  <button
                    type="button"
                    onClick={() => onKurang(item.id)}
                    className="flex h-6 w-6 items-center justify-center rounded bg-red-100 font-bold text-red-600 transition-colors hover:bg-red-200"
                    aria-label="Kurangi pesanan"
                  >
                    -
                  </button>
                  <span className="w-5 text-center font-bold text-kopi">{item.jumlah}</span>
                  <button
                    type="button"
                    onClick={() => onTambah(item.id)}
                    className="flex h-6 w-6 items-center justify-center rounded bg-[#A9C5CC]/40 font-bold text-kopi transition-colors hover:bg-[#A9C5CC]/70"
                    aria-label="Tambah pesanan"
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <dl className="mt-4 space-y-1 rounded-2xl bg-mentega p-3">
        <div className="flex justify-between text-sm">
          <dt>Jumlah item</dt>
          <dd className="font-bold">{jumlahItem}</dd>
        </div>
        <div className="flex items-baseline justify-between">
          <dt className="font-bold">Total</dt>
          <dd className="font-judul text-2xl font-bold text-karamel">{rupiah(totalHarga)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default RingkasanPesanan;