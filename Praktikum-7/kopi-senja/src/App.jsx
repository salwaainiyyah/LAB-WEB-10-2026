import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const menus = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
  { id: 10, nama: "Teh", kategori: "Non-Kopi", harga: 10000, tersedia: true, deskripsi: "Teh panas yang lezat." },
  { id: 11, nama: "Dimsum", kategori: "Cemilan", harga: 25000, tersedia: true, deskripsi: "Dimsum lezat dengan saus khusus." },
];

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});
const rupiah = (angka) => formatter.format(angka).replace(/\s/g, "");

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); 
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [pesan, setPesan] = useState({ tipe: "", teks: "" });

  const itemPesanan = pesanan.map((p) => {
    const menu = menus.find((m) => m.id === p.id);
    return { ...menu, jumlah: p.jumlah, subtotal: menu.harga * p.jumlah };
  });
  const jumlahItem = pesanan.reduce((total, p) => total + p.jumlah, 0);
  const totalHarga = itemPesanan.reduce((total, i) => total + i.subtotal, 0);

  const menuTampil =
    kategoriAktif === "Semua" ? menus : menus.filter((m) => m.kategori === kategoriAktif);

  const handleTambah = (id) => {
    const menu = menus.find((m) => m.id === id);
    if (!menu || !menu.tersedia) return; // cek ketersediaan di logika
    
    setPesan({ tipe: "", teks: "" });
    
    setPesanan((lama) => {
      const ada = lama.some((p) => p.id === id);
      if (ada) return lama.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p));
      return [...lama, { id, jumlah: 1 }];
    });
  };

  const handleKurang = (id) => {
    setPesanan((lama) => {
      const item = lama.find((p) => p.id === id);
      if (!item) return lama;
      
      // Jika jumlah sisa 1, hapus item dari array pesanan
      if (item.jumlah === 1) {
        return lama.filter((p) => p.id !== id);
      }
      
      // Jika lebih dari 1, kurangi jumlahnya
      return lama.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p));
    });
  };

  const handleKirim = (e) => {
    e.preventDefault();
    
    const namaBersih = nama.trim();
    const mejaBersih = meja.trim();
    const angkaMeja = Number(mejaBersih);

    //keranjang kosong untuk menampung semua error
    let daftarError = [];

    if (namaBersih === "") {
      daftarError.push("Nama pelanggan belum diisi");
    }

    if (mejaBersih === "") {
      daftarError.push("Nomor meja belum diisi");
    } else if (isNaN(angkaMeja) || !Number.isInteger(angkaMeja)) {
      daftarError.push("Nomor meja harus berupa angka bulat");
    } else if (angkaMeja <= 0) {
      daftarError.push("Nomor meja tidak valid");
    } else if (angkaMeja > 10) {
      daftarError.push("Nomor meja hanya sampai 10");
    }

    if (pesanan.length === 0) {
      daftarError.push("Pesanan masih kosong");
    }

    if (daftarError.length > 0) {
      setPesan({ 
        tipe: "error", 
        teks: daftarError.join(" & ") + "." 
      });
    } else {
      setPesan({
        tipe: "sukses",
        teks: `Terima kasih, ${namaBersih}! Pesanan Anda untuk meja ${angkaMeja} berhasil dikirim dan sedang diproses.`,
      });
      // Kosongkan formulir dan pesanan setelah sukses
      setPesanan([]);
      setNama("");
      setMeja("");
    }
  };

  return (
    <div className="min-h-screen bg-krim font-teks text-espresso">
      <Navbar jumlahItem={jumlahItem} totalHarga={totalHarga} rupiah={rupiah} />
      <header className="mx-auto max-w-7xl px-4 pt-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-[repeating-linear-gradient(90deg,#A9C5CC_0_22px,#FFF5E9_22px_34px,#D8C6A8_34px_56px,#FFF5E9_56px_68px)] p-5 sm:p-7">
          
          <div className="relative mx-auto w-full max-w-2xl rounded-[2.5rem_1.5rem_2.5rem_1.5rem] bg-karamel p-6 text-krim sm:p-8 text-center flex flex-col items-center">
            <p className="font-judul text-sm font-medium uppercase tracking-widest text-mentega">
              Pesan sendiri dari meja
            </p>
            <h1 className="mt-1 font-judul text-3xl font-bold leading-tight sm:text-5xl">
              Kopi kecil, jeda yang berarti.
            </h1>
            <p className="mt-3 text-base text-krim/90 max-w-lg">
              Pilih kategori, tekan Tambah, lalu isi nama dan nomor mejamu. Kami antar sampai ke meja.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[1fr_22rem]">
        <MenuList
          menus={menuTampil}
          kategoriAktif={kategoriAktif}
          onPilihKategori={setKategoriAktif}
          onTambah={handleTambah}
          rupiah={rupiah}
        />
        <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
          <RingkasanPesanan
            items={itemPesanan}
            jumlahItem={jumlahItem}
            totalHarga={totalHarga}
            rupiah={rupiah}
            onKurang={handleKurang}
            onTambah={handleTambah}
          />
          <FormPesan
            nama={nama}
            meja={meja}
            pesan={pesan}
            onUbahNama={setNama}
            onUbahMeja={setMeja}
            onKirim={handleKirim}
          />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;