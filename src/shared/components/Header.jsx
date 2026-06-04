import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Menu } from 'primereact/menu';

import logoHERRIZ from "../../assets/themes/default/logo.png";

function Header() {

 //lenguajes
 const languages = [
  { name: "ES", code: "es" },
  { name: "EU", code: "eu" },
 ];
 const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

 //menu
 const items = [
  // {
  //   label: "Inicio",
  //   icon: "fa-regular fa-house-blank",
  //   url: "/inicio",
  // },
  {
   label: "Layouts",
   className: "BKTT-Link",
   // icon: "fa-regular fa-pen-to-square",
   items: [
    {
     label: "Listado",
     url: "/catalogo-aplicaciones",
    },
    {
     label: "Detalle",
     url: "/catalogo-entidades",
    },
    {
     label: "Relación Aplicación-Entidad",
     url: "/relacion-aplicacion-entidad",
    },
   ],
  },
  {
   label: "Temas",
   className: "BKTT-Link",
   // icon: "fa-light fa-rectangle-list",
   items: [
    {
     label: "Permisos",
     url: "/permisos",
    },
    {
     label: "Grupos de permisos",
     url: "/grupos-de-permisos",
    },
    {
     label: "Perfiles",
     url: "/perfiles",
    },
    {
     label: "Acciones masivas",
     items: [
      {
       label: "Asignar permisos a grupos de permisos",
       url: "/asignar-permiso-a-grupos-de-permisos",
      },
      {
       label: "Asignar grupo de permisos a perfiles",
       url: "/asignar-grupo-de-permisos-a-perfiles",
      },
      {
       label: "Crear permisos asociados a formularios",
       url: "/crear-permisos-asociados-a-formularios",
      },
     ],
    },
   ],
  },
  {
   label: "Design System",
   className: "BKTT-Link",
   icon: "BKTT-Icon fa-light fa-newspaper",//habrá que defiir una variable o configuración de sharepoint
   items: [
    {
     label: "Gestión de usuarios",
     url: "/gestion-de-usuarios",
     icon: "BKTT-Icon fa-light fa-user",
    },
    {
     label: "Asignación de permisos",
     url: "/asignacion-de-permisos",
     icon: "BKTT-Iconfa-light fa-key",
    },
    {
     label: "Usuarios administradores",
     url: "/usuarios-administradores",
     icon: "BKTT-Iconfa-light fa-user-shield",
    },
    {
     label: "Listados",
     url: "/listados",
     icon: "BKTT-Icon fa-light fa-list",
    },

    {
     label: "Acciones masivas",
     icon: "BKTT-Icon fa-light fa-rectangle-list",
     items: [
      {
       label: "Baja masiva de usuarios",
       url: "/baja-masiva-de-usuarios",
      },
      {
       label: "Reactivación masiva de usuarios",
       url: "/reactivacion-masiva-de-usuarios",
      },
     ],
    },
   ],
  },
 ];


 const logo = (
  <>
   <div className="BKTT-Logo logo">
    <Link to="/inicio">
     <img src={logoHERRIZ} alt="Biscaytik logo" />
    </Link>
   </div>
  </>
 );
 const search = (
  <>
   <form className="BKTT-Search" role="search">
    <label htmlFor="BKTTSearch" className="visually-hidden">Buscador web</label>
    <div className="input-group d-flex align-items-center">
     <input type="search" id="BKTTSearch" className="form-control" placeholder="Búsqueda..." aria-label="Search" name="q" autoComplete="off"
     />
     <button className="BKTT-Button btn btn-primary" type="submit" aria-label="Submit search">
      <span className="BKTT-Icon fa-light fa-search"></span>
     </button>
     <a href="#toggle-search" class="BKTT-Button btn btn-primary d-lg-none" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="toggle-search">
      <span className="BKTT-Icon fa-light fa-search"></span>
     </a>
    </div>
   </form>

   <div class="BKTT-Search--mobile navbar-collapse collapse" id="toggle-search">
    <div class="container">
     <form action="" method="GET" role="search">
      <div class="input-group">
       <input type="text" class="form-control" name="q" placeholder="Búsqueda..." />
       <span class="input-group-btn">
        <button class="BKTT-Button btn btn-primary" type="reset"><span class="BKTT-Icon fa-light fa-search"></span></button>
       </span>
      </div>
     </form>
    </div>
   </div>
  </>
 );
 const end =
  <div className="header-right d-flex align-items-center">
   <span class="BKTT-Icon fa-light fa-globe"></span>
   <select class="form-select form-select-lg" aria-label="selector de idioma">
    <option selected>ES</option>
    <option value="1">EU</option>
   </select>
  </div>
  ;


 return (
  <>
   <header className="BKTT-Header fixed-top">
    <div className="container">
     <div className="d-flex align-items-center justify-content-between">
      {/* Logo izquierda */}
      {logo}
      <div class="d-flex align-items-center">
       {search}
       <nav class="BKTT-Nav navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="BKTT-Icon fa-regular fa-bars"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item dropdown">
            <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Agenda
             <span class="BKTT-Icon fa fa-chevron-down ms-2"></span>
            </a>

            <ul class="dropdown-menu">
             <div class="row">
              <div class="col">
               <h2>Agenda</h2>
              </div>
              <li class="col">
               <ul>
                <li>
                 <a class="dropdown-item" href="#">
                  <span class="BKTT-Icon fa-light fa-music me-2"></span>
                  Action</a>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                 <a class="dropdown-item" href="#">Something else here</a>
                </li>
               </ul>
              </li>
             </div>
            </ul>
           </li>
           <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Qué ver</a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Gastronomía</a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Alojamientos</a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Planifica</a>
           </li>
           <li class="nav-item">
            <a class="nav-link" href="#">
             <span class="BKTT-Icon far fa-newspaper me-2"></span>Noticias
            </a>
           </li>
           <div className="BKTT-LangSelect">
            {end}
           </div>
          </ul>
         </div>
        </div>
       </nav>
       {/* Dropdown derecha */}
       <div className="BKTT-LangSelect header-end">
        {end}
       </div>
      </div>

     </div>
    </div>
   </header>
  </>
 );
}

export default Header;
