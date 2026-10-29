# Kedai Kopi Senja (Praktikum 7: React Hooks, State & Props)

Halaman pemesanan mandiri dengan React + Vite + Tailwind CSS (v3).

## Menjalankan
```bash
cd kopi-senja
npm install
npm run dev
```
Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Pengujian fitur
1. **Filter**: klik Kopi / Non-Kopi / Makanan, daftar menyesuaikan. "Semua Menu" menampilkan 9 menu.
2. **Detail**: klik Detail pada satu kartu; kartu lain tidak ikut terbuka.
3. **Habis**: Teh Tarik dan Pisang Goreng berlabel Habis, tombolnya nonaktif.
4. **Tambah**: tambah Kopi Susu 2x dan Americano 1x, hasilnya 3 item dan Rp51.000 di Navbar dan Ringkasan.
5. **Validasi**: kirim dengan nama kosong, meja bukan bilangan bulat positif (mis. 0, abc, -2), atau pesanan kosong, muncul pesan error dan data tidak hilang.
6. **Kirim**: isi data valid, muncul ucapan terima kasih; form dan pesanan kosong, total kembali Rp0.
