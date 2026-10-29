import MenuCard from "./MenuCard";

function MenuList({ menus, kategoriAktif, onPilihKategori, onTambah, rupiah }) {
  const kategoriList = ["Semua", "Kopi", "Non-Kopi", "Makanan", "Cemilan"];

  return (
    <section aria-labelledby="judul-menu">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="judul-menu" className="font-judul text-3xl font-bold text-kopi">
          Yuk PilihMenu Kami
        </h2>
      </div>

      {/* Filter Kategori */}
      <div className="mb-6 flex flex-wrap gap-2">
        {kategoriList.map((kat) => (
          <button
            key={kat}
            onClick={() => onPilihKategori(kat)}
            className={`rounded-full border-2 border-kopi px-5 py-2 font-bold transition-colors ${
              kategoriAktif === kat
                ? "bg-kopi text-krim"
                : "bg-transparent text-kopi hover:bg-kopi/10"
            }`}
          >
            {kat}
          </button>
        ))}
      </div>

      {/* Grid Menu - Memanggil MenuCard */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {menus.map((menu) => (
          <MenuCard 
            key={menu.id} 
            menu={menu} 
            onTambah={onTambah} 
            rupiah={rupiah} 
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;