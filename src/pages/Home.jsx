import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';


function Home() {

 const [visible, setVisible] = useState(true);
 const [loading, setLoading] = useState(true);
 const [grupoPermisos, setGrupoPermisos] = useState(null);
 const [listaGruposPermisos, setListaGruposPermisos] = useState([
  { name: 'Administradores', code: 'admin' },
  { name: 'Usuarios estándar', code: 'user' },
  { name: 'Auditores', code: 'audit' },
 ]);
 const [mostrarContainer, setMostrarContainer] = useState(true);

 useEffect(() => {

  const shouldShowModal = !localStorage.getItem('modalClosed');
  setVisible(shouldShowModal);
  setLoading(false);

  // Agregar la clase al body
  document.body.classList.add('home-page');

  // Eliminar la clase cuando se desmonte el componente
  return () => {
   document.body.classList.remove('home-page');
  };
 }, []);

 const onHide = () => {
  localStorage.setItem('modalClosed', true);
  setVisible(false);
 };

 const footerContent = (
  <div>
   <Button label="Entendido" onClick={() => onHide()} className="p-button-primary" />
  </div>
 );

 const navigate = useNavigate();

 return (
  <>
   <section className="container py-4 py-md-5">
    <h1>H1 Bienvenido a la aplicación</h1>
    <h2>H2 Explora las funcionalidades disponibles</h2>
    <h3>H3 Cabecera de nivel</h3>
    <h4>H4 Cabecera de nivel</h4>
    <h5>H5 Cabecera de nivel</h5>
    <h6>H6 Cabecera de nivel</h6>
    <p>Este es un párrafo de ejemplo para demostrar el estilo de texto en la página de inicio.</p>
    <p>Lorem ipsum dolor <a href="#">sit amet</a>, consectetur <strong>adipiscing elit</strong>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>Iconos BKTT-Icon</h2>
    <h2>BKTT-LinkList</h2>
    <ul>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
    </ul>
    <ol>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
     <li><a href="#" className="BKTT-Link">Enlace 1</a></li>
    </ol>
    <h3>BKTT-Nav</h3>
    <nav class="BKTT-Nav header-menu">
     <div class="p-menubar p-component" activeitem="/">
      <ul class="p-menubar-root-list" role="menubar">
       <li role="none" class="p-menuitem BKTT-Link">
        <a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-text">Layouts</span>
        </a>
       </li>
       <li role="none" class="p-menuitem BKTT-Link"><a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-text">Temas</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-submenu-icon" aria-hidden="true"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg></a>
       </li><li role="none" class="p-menuitem BKTT-Link"><a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="true"><span class="p-menuitem-icon BKTT-Icon fa-light fa-newspaper"></span><span class="p-menuitem-text">Design System</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon p-submenu-icon" aria-hidden="true"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg></a></li></ul></div></nav>
    <h2>Form</h2>
    <form action="">
    <h3>BKTT-Input</h3>
    <div className="row">
     <div className="col-md-3 mb-3">
      <div className="d-flex flex-column">
       <label htmlFor="grupoPermisos" className="BKTT-Input">Label input</label>
       <InputText keyfilter="int" placeholder="Valor del campo" />
      </div>
     </div>
    </div>
    <h3>BKTT-Select</h3>
    <h3>BKTT-Dropdown</h3>
     <div className="row">
      <div className="col-md-3 mb-3">
       <div className="d-flex flex-column">
        <label htmlFor="grupoPermisos" className="BKTT-Dropdown">Dropdown</label>
        <Dropdown inputId="grupoPermisos" disabled={!mostrarContainer} placeholder="Seleccionar grupo de permisos" aria-describedby="grupo-de-permisos" value={grupoPermisos} onChange={(e) => setGrupoPermisos(e.value)} options={listaGruposPermisos} optionLabel="name" className="BKTT-Dropdown" />
       </div>
      </div>
     </div>
    </form>
      </section>
      <section className="container py-4 py-md-5">
       <h2 className="section-title">Tablas maestras</h2>
       <p className="section-subtitle">
        Agrupación de los diferentes catálogos de la aplicación.
       </p>
       <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
         <Card className="home-card h-100"
          onClick={() => { navigate('/catalogo-aplicaciones') }}>
          <h3 className="card-title">Catálogo de aplicaciones</h3>
          <p>
           Permite gestionar para qué aplicaciones se puede configurar el control de acceso y la seguridad mediante los diferentes niveles de acceso.
          </p>
          <i className="fa-regular fa-circle-arrow-right"></i>
         </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
         <Card className="home-card h-100"
          onClick={() => { navigate('/catalogo-entidades') }}>
          <h3 className="card-title">Catálogo de entidades</h3>
          <p>
           El catálogo de entidades permite gestionar las entidades que aparecen en los mantenimientos de control de acceso y seguridad.
          </p>
          <i className="fa-regular fa-circle-arrow-right"></i>
         </Card>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
         <Card className="home-card h-100"
          onClick={() => { navigate('/relacion-aplicacion-entidad') }}>
          <h3 className="card-title">Relación entre aplicaciones y entidades</h3>
          <p>
           Gestiona qué entidades se van a controlar dentro de cada aplicación.
          </p>
          <i className="fa-regular fa-circle-arrow-right"></i>
         </Card>
        </div>
       </div>
      </section>
      <section className="py-4 py-md-5">
       <div className="container">
        <h2 className="section-title">Introducir listado cards con autolayout</h2>
        <p className="section-subtitle">
         Creación de usuarios, asignación de estos a las aplicaciones para las que deban tener acceso, y la gestión de los permisos, grupos, perfiles y entidades que se le otorgan a cada uno.
        </p>
        <div className="row">
         <div className="col-md-6 col-lg-4 mb-4">
          <Card className="home-card h-100"
           onClick={() => { navigate('/gestion-de-usuarios') }}>
           <h3 className="card-title">Gestión de usuarios</h3>
           <p>
            Permite visualizar, gestionar y crear los usuarios del sistema. A estos usuarios se les podrá asignar los diferentes niveles de elementos para la gestión de la seguridad en las aplicaciones.
           </p>
           <i className="fa-regular fa-circle-arrow-right"></i>
          </Card>
         </div>
         <div className="col-md-6 col-lg-4 mb-4">
          <Card className="home-card h-100"
           onClick={() => { navigate('/asignacion-de-permisos') }}>
           <h3 className="card-title">Asignación de permisos</h3>
           <p>
            Permite crear, gestionar o eliminar los diferentes permisos, grupos, perfiles y entidades que se le otorgan a cada usuario para cada una de las aplicaciones dadas de alta en el sistema.
           </p>
           <i className="fa-regular fa-circle-arrow-right"></i>
          </Card>
         </div>
         <div className="col-md-6 col-lg-4 mb-4">
          <Card className="home-card h-100"
           onClick={() => { navigate('/usuarios-administradores') }}>
           <h3 className="card-title">Usuarios administradores</h3>
           <p>
            Permite seleccionar los usuarios que tienen el perfil de administrador en el sistema, así como quitar ese perfil a un usuario.
           </p>
           <i className="fa-regular fa-circle-arrow-right"></i>
          </Card>
         </div>
        </div>
       </div>

      </section>



      {loading ? (
       ""
      ) : (
       <Dialog visible={visible} onHide={onHide} className='BKTT-ModalAlert system-dialog' footer={footerContent}>
        <div className="dialog-advise d-flex align-items-center mb-4">
         <i className="fa-regular fa-circle-info me-3"></i>
         Aviso a los usuarios del sistema
        </div>
        <p className='px-3'>
         {
          `El uso de este sistema sólo está permitido a los usuarios autorizados. El acceso no autorizado está terminantemente prohibido y podrá ser objeto de acciones disciplinarias, sin perjuicio de las restantes acciones de naturaleza legal a las que hubiere lugar. Toda la actividad de este sistema se registra y es revisada periódicamente por el personal designado por la dirección del <<ORGANISMO>>.`
         }
        </p>
        <p className='px-3'>
         {
          `Cualquier usuario que acceda al sistema lo hace declarando conocer y aceptar íntegramente estas reglas y la Normativa General de Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>, accesibles en <<URL>> y <<localización física>>.`
         }
        </p>
       </Dialog>
      )}
     </>
     )
}

     export default Home