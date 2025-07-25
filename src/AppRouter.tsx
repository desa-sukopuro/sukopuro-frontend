import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import PotensiDesa from "./pages/PotensiDesa"; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="potensi" element={<PotensiDesa />} />
          {/* <Route path="/profile" element={<Profile/>}/> Contoh ngisi route*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
