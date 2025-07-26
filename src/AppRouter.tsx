import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Peta from "./pages/Peta";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          {/* <Route path="/profile" element={<Profile/>}/> Contoh ngisi route*/}
        </Route>
        <Route path="/peta" element={<Layout />}>
          <Route index element={<Peta />} />
          {/* <Route path="/profile" element={<Profile/>}/> Contoh ngisi route*/}
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
