import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import PengumumanPage from './pages/PengumumanPage';
import DetailPengumuman from "./pages/DetailPengumuman";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/pengumuman" element={<PengumumanPage />} />
          <Route path="/pengumuman/:id" element={<DetailPengumuman />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
