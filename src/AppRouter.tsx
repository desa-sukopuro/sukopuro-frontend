import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import PotensiPertanian from "./pages/PotensiPertanian";
import PotensiUmkm from "./pages/PotensiUmkm";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/potensi-pertanian" element={<PotensiPertanian />} />
          <Route path="/potensi-umkm" element={<PotensiUmkm />} />
          {/* <Route path="/profile" element={<Profile/>}/> Contoh ngisi route*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
