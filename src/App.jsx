import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import './App.scss';

import routes from "./routes";

import Header from './shared/components/Header';
import BreadCrumb  from "./shared/components/Breadcrumb";
import Footer from './shared/components/Footer';


function App() {
    return (
      <BrowserRouter>
        <MainLayout />
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
