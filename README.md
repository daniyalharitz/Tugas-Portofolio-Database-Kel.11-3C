# Tugas-Portofolio-Database-Kel.11-3C

Website portofolio tim **Database Group 11**, bertema *Retro Terminal / CLI Console*.
Dibuat sebagai situs statis (HTML, CSS, JavaScript) untuk tugas mata kuliah Database.

## Struktur

| File         | Fungsi                                     |
| ------------ | ------------------------------------------ |
| `index.html` | Struktur halaman dan data anggota          |
| `style.css`  | Tema terminal hijau, grid bento, responsif |
| `script.js`  | Animasi fade-in saat scroll                |
| `assets/`    | Foto anggota (rasio 3:4, dari CV)          |
| `.github/workflows/deploy.yml` | Workflow deploy ke GitHub Pages |

## Anggota

| Nama                          | Peran                           |
| ----------------------------- | ------------------------------- |
| Shafwan Anwar                 | Fullstack Developer             |
| Muhammad Ghassan Dzul Hannan  | Git Specialist and Deployment   |
| Daniyal Haritz                | UI/UX Designer and Technical Writer |

## Menjalankan secara lokal

Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
python3 -m http.server 8000
```

## Deployment (GitHub Pages)

Deployment berjalan otomatis lewat GitHub Actions (`.github/workflows/deploy.yml`)
setiap ada push ke branch `main`.

Pengaturan satu kali:

1. Buka **Settings → Pages** di repository ini.
2. Pada **Source**, pilih **GitHub Actions**.
3. Jalankan ulang workflow lewat tab **Actions → Deploy to GitHub Pages → Run workflow**
   (atau push commit baru ke `main`).
4. Situs akan tersedia di `https://daniyalharitz.github.io/Tugas-Portofolio-Database-Kel.11-3C/`.
