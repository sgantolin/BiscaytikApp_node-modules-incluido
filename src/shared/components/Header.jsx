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
   // icon: "fa-light fa-users",
   items: [
    {
     label: "Gestión de usuarios",
     url: "/gestion-de-usuarios",
    },
    {
     label: "Asignación de permisos",
     url: "/asignacion-de-permisos",
    },
    {
     label: "Usuarios administradores",
     url: "/usuarios-administradores",
    },
    {
     label: "Listados",
     url: "/listados",
    },

    {
     label: "Acciones masivas",
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
   <form className="BKTT-Search d-flex" role="search">
    <label htmlFor="BKTTSearch" className="visually-hidden">Buscador web</label>
    <div className="input-group">
     <input type="search" id="BKTTSearch" className="form-control" placeholder="Búsqueda..." aria-label="Search" name="q" autoComplete="off"
     />
     <button className="btn btn-primary" type="submit" aria-label="Submit search">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
     </button>
    </div>
   </form>
  </>
 );
 const end =
  <div className="header-right d-flex align-items-center">
   <Dropdown value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.value)} options={languages} optionLabel="name"
    defaultValue={languages[0]} className="ms-2" />
  </div>
  ;


 return (
  <>
   <header className="BKTT-Header fixed-top">
    <div className="container">
     <div className="d-flex align-items-center justify-content-between">
      {/* Logo izquierda */}
       {logo}
      {/* Search centro */}
       {search}
      <nav className="BKTT-Nav header-menu">
       <Menubar model={items} activeitem={window.location.pathname} />
      </nav>

      {/* Dropdown derecha */}
      <div className="BKTT-LangSelect header-end">
       {end}
      </div>
     </div>
    </div>
   </header>
  </>
 );
}

export default Header;
