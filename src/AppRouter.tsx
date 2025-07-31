import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Administrasi from "./pages/Administrasi";
import AdministrasiDetail from "./pages/Administrasi-Detail";
import ImageDetail from "./components/ImageDetail";
import PotensiPertanian from "./pages/PotensiPertanian";
import PotensiUmkm from "./pages/PotensiUmkm";
import Peta from "./pages/Peta";
import Struktur from "./pages/StrukturDesa";
import PotensiDesa from "./pages/PotensiDesa"; 
import PariwisataDesa from "./pages/PariwisataDesa";
import PengumumanPage from './pages/PengumumanPage';
import DetailPengumuman from "./pages/DetailPengumuman";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/administrasi" element={<Administrasi/>} />
          <Route path="/administrasi-detail" element={<AdministrasiDetail/>} />
          <Route path="/pertanian" element={<PotensiPertanian />} />
          <Route path="/umkm" element={<PotensiUmkm />} />
          <Route path="/peta" element={<Peta />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/potensi" element={<PotensiDesa />} />
          <Route path="/pariwisata" element={<PariwisataDesa />} />
          <Route path="/pengumuman" element={<PengumumanPage />} />
          <Route path="/pengumuman/:id" element={<DetailPengumuman />} />
          <Route path="*" element={<ImageDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
