import { useState, useRef  } from "react";
import { Link } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Menu } from 'primereact/menu';

import logoBiscaytik from "../../assets/images/biscaytik-logo.svg";

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

  const menuLogin = useRef(null);
  const menuLoginItems = [
    {
        label: "Editar perfil",
        url: "/gestion-de-usuarios/editar-usuario",
    },
    {
        label: "Cerrar sesión",
        url: "/login",
    },
    

  ];

  const logo = 
    <div className="logo">
      <Link to="/inicio">
        <img src={logoBiscaytik} alt="Biscaytik logo" />
      </Link>
    </div>
  ;

  const end = 
    <div className="header-right d-flex align-items-center">
        <Dropdown value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.value)} options={languages} optionLabel="name" 
                    defaultValue={languages[0]} className="ms-2" />
        <div className="user-login">
            <Menu model={menuLoginItems} popup ref={menuLogin}>
              {menuLoginItems.map((item, index) => (
                <Link key={index} to={item.url}>
                  {item.label}
                </Link>
              ))}
            </Menu>
            <div className="d-flex user-login-button-block">
                <Button rounded icon="fa-regular fa-circle-user" onClick={(e) => menuLogin.current.toggle(e)} />
                <p onClick={(e) => menuLogin.current.toggle(e)}>
                  <span>Amaia Ruiz Costa</span>
                </p>
            </div>
            
        </div>
    </div>
    ;


  return (
    <>
      <header className="fixed-top">
        <Menubar model={items} start={logo} end={end} activeitem={window.location.pathname}/>
      </header>
    </>
  );
}

export default Header;
