import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import './App.scss';

import routes from "./routes";

import Header from './shared/components/Header';
import BreadCrumb  from "./shared/components/Breadcrumb";
import Footer from './shared/components/Footer';

import Login from "./pages/login/Login";
import ChangePassword from "./pages/login/ChangePassword";
import Autentification from "./pages/login/Autentification";
import RolSelection from "./pages/login/RolSelection";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/autentification" element={<Autentification />} />
          <Route path="/seleccionar-rol" element={<RolSelection />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      
      </BrowserRouter>
    )
}

function MainLayout() {
  const location = useLocation();
  // Aquí puedes poner cualquier lógica para mostrar o no el Header
  const showHeader = location.pathname !== "/login";

  return (
    <>
      {showHeader && <Header />}
      <BreadCrumb/>
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
