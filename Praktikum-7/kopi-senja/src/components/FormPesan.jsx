function FormPesan({ nama, meja, pesan, onUbahNama, onUbahMeja, onKirim }) {
  const inputClass =
    "mt-1 min-h-12 w-full rounded-2xl border-2 border-beige bg-white px-4 text-base focus:border-karamel focus:outline-none";

  return (
    <section aria-labelledby="judul-form" className="rounded-[1.75rem] border-2 border-beige bg-krim p-5">
      <h2 id="judul-form" className="font-judul text-2xl font-bold text-kopi">Kirim Pesanan</h2>
      <form onSubmit={onKirim} noValidate className="mt-3 space-y-3">
        <div>
          <label htmlFor="nama" className="text-sm font-bold">Nama pelanggan</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => onUbahNama(e.target.value)}
            placeholder="Contoh: Salwa"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="meja" className="text-sm font-bold">Nomor meja</label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            value={meja}
            onChange={(e) => onUbahMeja(e.target.value)}
            placeholder="Contoh: 5"
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="min-h-14 w-full rounded-full bg-karamel font-judul text-lg font-bold text-krim hover:bg-kopi"
        >
          Kirim Pesanan
        </button>
      </form>
      
      {/* BAGIAN INI YANG DIUBAH */}
      {pesan.teks !== "" && (
        <p
          role={pesan.tipe === "error" ? "alert" : "status"}
          className={
            "mt-3 rounded-2xl p-3 text-sm font-bold " +
            (pesan.tipe === "error" ? "bg-biru text-espresso" : "bg-mentega text-espresso")
          }
        >
          {pesan.teks}
        </p>
      )}
    </section>
  );
}

export default FormPesan;