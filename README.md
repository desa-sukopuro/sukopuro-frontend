# Sukopuro Frontend

Frontend aplikasi Sukopuro menggunakan React + TypeScript + Vite + Tailwind CSS.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Jalankan aplikasi:

### Development mode (dengan hot reload):
```bash
npm run dev
```

### Production build:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Development Server

- Development: `http://localhost:5173`

## Project Structure

```
sukopuro-frontend/
├── index.html          # Entry HTML file
├── package.json        # Dependencies dan scripts
├── .gitignore         # File yang diabaikan git
├── vite.config.ts     # Konfigurasi Vite
├── tsconfig.json      # Konfigurasi TypeScript
├── eslint.config.js   # Konfigurasi ESLint
├── public/            # Static assets
│   └── vite.svg       # Static files
└── src/               # Source code
    ├── main.tsx       # Entry point aplikasi
    ├── App.tsx        # Root component
    ├── App.css        # App styles
    ├── index.css      # Global styles
    ├── vite-env.d.ts  # Vite type definitions
    └── assets/        # Asset files
        └── react.svg  # Component assets
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool dan dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Environment Variables

Buat file `.env` untuk konfigurasi environment:
```
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Sukopuro
```

## Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Menjalankan ESLint