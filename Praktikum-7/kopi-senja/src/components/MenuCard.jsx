import { useState } from "react";

function MenuCard({ menu, onTambah, rupiah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);
  const { id, nama, kategori, harga, tersedia, deskripsi } = menu;

  const renderGrafis = (kategori, nama) => {
    let emoji = "☕";
    let bgColor = "bg-karamel/20"; 

    if (kategori === "Kopi") {
      emoji = "☕";
      bgColor = "bg-[#D8C6A8]/40"; 
    } else if (kategori === "Non-Kopi") {
      emoji = nama.toLowerCase().includes("matcha") ? "🍵" : 
              nama.toLowerCase().includes("cokelat") ? "🍫" : "🧋";
      bgColor = "bg-[#A9C5CC]/40"; 
    } else if (kategori === "Makanan") {
      emoji = nama.toLowerCase().includes("pisang") ? "🍌" : 
              nama.toLowerCase().includes("nasi") ? "🍳" : "🍞";
      bgColor = "bg-mentega/60"; 
    }

    return (
      <div className={`mb-4 flex h-36 w-full items-center justify-center rounded-[1.25rem] text-6xl shadow-inner ${bgColor}`}>
        <span className="drop-shadow-md hover:scale-110 transition-transform duration-300 cursor-default">
          {emoji}
        </span>
      </div>
    );
  };

  return (
    <li className={`flex flex-col justify-between rounded-[1.75rem] border-2 border-kopi/20 bg-transparent p-4 sm:p-5 list-none ${tersedia ? "" : "opacity-70"}`}>
      <div>
        {renderGrafis(kategori, nama)}

        <div className="mb-2 flex items-start justify-between gap-2">
          <span className="inline-block rounded-full bg-[#A9C5CC]/30 px-3 py-1 text-xs font-bold text-kopi">
            {kategori}
          </span>
          {!tersedia && (
            <span className="rounded-full bg-espresso px-3 py-1 text-xs font-bold text-krim">
              Habis
            </span>
          )}
        </div>
        
        <h3 className="font-judul text-xl font-bold text-kopi">{nama}</h3>
        
        {/* Kotak deskripsi berubah jadi biru/40 jika habis */}
        {detailTerbuka && (
          <div className={`mt-3 rounded-2xl p-3 text-sm text-espresso ${tersedia ? "bg-mentega/60" : "bg-biru/40"}`}>
            <p className="mb-2">{deskripsi}</p>
            <p>Kode menu: #{id}</p>
            <p>Status: {tersedia ? "Tersedia" : "Sedang habis"}</p>
          </div>
        )}
      </div>

      <div className="mt-5">
        <p className="mb-3 font-judul text-lg font-bold text-kopi">
          {rupiah(harga)}
        </p>
        <div className="flex gap-2">
          {/* Tombol detail berubah border dan teksnya jadi biru jika habis */}
          <button
            type="button"
            onClick={() => setDetailTerbuka(!detailTerbuka)}
            className={`flex-1 rounded-xl border-2 px-4 py-2 font-bold transition-colors ${
              tersedia 
                ? "border-kopi text-kopi hover:bg-kopi/5" 
                : "border-biru text-biru hover:bg-biru/10"
            }`}
          >
            {detailTerbuka ? "Tutup" : "Detail"}
          </button>
          
          <button
            type="button"
            onClick={() => onTambah(id)}
            disabled={!tersedia}
            className={`flex-1 rounded-xl px-4 py-2 font-bold text-krim transition-all ${
              tersedia
                ? "bg-kopi hover:bg-espresso active:scale-95"
                : "cursor-not-allowed bg-kopi/40"
            }`}
          >
            {tersedia ? "Tambah" : "Habis"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuCard;