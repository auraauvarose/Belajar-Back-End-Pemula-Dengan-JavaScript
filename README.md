# Catatan Proyek Belajar Back‑End dengan JavaScript

Repositori ini berisi dua aplikasi kecil yang saling berkomunikasi:

* `notes-app-back-end` – server Express sederhana (default port **3000**).
* `notes-app-frontend-1` – klien Next.js yang meminta data lewat `fetch()`.

## Menjalankan proyek

1. buka terminal dan pindah ke folder backend:
   ```bash
   cd "03. Membangun Web Service menggunakan Node.js/javascript-project/notes-app-back-end"
   npm install   # sekali saja
   npm start     # nodemon akan memulai server pada port 3000
   ```
   Anda dapat mengubah port melalui variabel lingkungan, misalnya
   `PORT=8080 npm start` jika ingin menyelaraskan dengan front-end.

2. buka terminal lain untuk front‑end:
   ```bash
   cd "03. Membangun Web Service menggunakan Node.js/javascript-project/notes-app-frontend-1"
   npm install
   npm run dev -p 8080    # Next.js akan melayani halaman pada 8080
   ```

   Ketika halaman dibuka pertama kali, bar atas akan menampilkan URL
   base yang digunakan untuk memanggil API. tombol **Change URL** dapat
   dipakai jika server back‑end berjalan pada port yang berbeda.

## Debugging

* Periksa konsol browser dan tab Network untuk melihat request
  `POST /notes` dan pastikan base URL mengarah ke port tempat server
  hidup.
* Jika Anda melihat pesan
  `TypeError: Failed to fetch` di alert, biasanya berarti:
  * server tidak berjalan pada alamat tersebut, atau
  * response CORS tidak disetel (server sudah diperbaiki di `server.js`).

Semoga catatan ini membantu menghilangkan kebingungan!
