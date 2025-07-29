import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Administrasi from "./pages/Administrasi";
import AdministrasiDetail from "./pages/Administrasi-Detail";
import Error from "./pages/Error";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/administrasi" element={<Administrasi/>} />
          <Route path="/administrasi-detail" element={<AdministrasiDetail/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
