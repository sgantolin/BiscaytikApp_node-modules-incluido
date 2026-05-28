import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


function Home() {

  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);

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
        <h2 className="section-title">Tablas maestras</h2>
        <p className="section-subtitle">
          Agrupación de los diferentes catálogos de la aplicación.
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
              <Card   className="home-card h-100"
                      onClick={() => {navigate('/catalogo-aplicaciones')}}>
                  <h3 className="card-title">Catálogo de aplicaciones</h3>
                  <p>
                    Permite gestionar para qué aplicaciones se puede configurar el control de acceso y la seguridad mediante los diferentes niveles de acceso.
                  </p>
                  <i className="fa-regular fa-circle-arrow-right"></i>
              </Card>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
              <Card   className="home-card h-100"
                      onClick={() => {navigate('/catalogo-entidades')}}>
                  <h3 className="card-title">Catálogo de entidades</h3>
                  <p>
                    El catálogo de entidades permite gestionar las entidades que aparecen en los mantenimientos de control de acceso y seguridad.
                  </p>
                  <i className="fa-regular fa-circle-arrow-right"></i>
              </Card>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
              <Card   className="home-card h-100"
                      onClick={() => {navigate('/relacion-aplicacion-entidad')}}>
                  <h3 className="card-title">Relación entre aplicaciones y entidades</h3>
                  <p>
                    Gestiona qué entidades se van a controlar dentro de cada aplicación.
                  </p>
                  <i className="fa-regular fa-circle-arrow-right"></i>
              </Card>
          </div>
        </div>
      </section>


      <section className="py-4 py-md-5 secondary-section">
        <div className="container">
          <h2 className="section-title">Permisos, grupos y perfiles</h2>
          <p className="section-subtitle">
            Definición de los catálogos de permisos para cada aplicación, y con ellos, los grupos de permisos y perfiles que existirán para cada una de las aplicaciones presentes en el sistema.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/permisos')}}>
                    <h3 className="card-title">Catálogo de permisos</h3>
                    <p>
                      Gestiona todos los permisos y privilegios existentes en una aplicación para configurar el acceso y la seguridad mediante los diferentes niveles.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/grupos-de-permisos')}}>
                    <h3 className="card-title">Grupos de permisos</h3>
                    <p>
                      Los grupos de permisos permiten crear, gestionar o eliminar los diferentes grupos para cada una de las aplicaciones dadas de alta en el sistema.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/perfiles')}}>
                    <h3 className="card-title">Perfiles o roles</h3>
                    <p>
                      Los perfiles o roles permiten crear, gestionar o eliminar los diferentes perfiles para cada una de las aplicaciones dadas de alta en el sistema.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <Card   className="home-card h-100"
                      onClick={() => {navigate('/asignar-permiso-a-grupos-de-permisos')}}>
                  <h3 className="card-title">Acciones masivas</h3>
                  <p>
                    Permite asignar el mismo grupo de permisos a varios perfiles distintos de forma masiva.
                  </p>
                  <i className="fa-regular fa-circle-arrow-right"></i>
              </Card>
          </div>
          </div>
        </div>
        
      </section>

      <section className="py-4 py-md-5">
        <div className="container">
          <h2 className="section-title">Usuarios</h2>
          <p className="section-subtitle">
            Creación de usuarios, asignación de estos a las aplicaciones para las que deban tener acceso, y la gestión de los permisos, grupos, perfiles y entidades que se le otorgan a cada uno.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/gestion-de-usuarios')}}>
                    <h3 className="card-title">Gestión de usuarios</h3>
                    <p>
                      Permite visualizar, gestionar y crear los usuarios del sistema. A estos usuarios se les podrá asignar los diferentes niveles de elementos para la gestión de la seguridad en las aplicaciones.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/asignacion-de-permisos')}}>
                    <h3 className="card-title">Asignación de permisos</h3>
                    <p>
                      Permite crear, gestionar o eliminar los diferentes permisos, grupos, perfiles y entidades que se le otorgan a cada usuario para cada una de las aplicaciones dadas de alta en el sistema.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/usuarios-administradores')}}>
                    <h3 className="card-title">Usuarios administradores</h3>
                    <p>
                     Permite seleccionar los usuarios que tienen el perfil de administrador en el sistema, así como quitar ese perfil a un usuario.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/listados')}}>
                    <h3 className="card-title">Listados</h3>
                    <p>
                     Se ofrece una serie de listados disponibles para conocer los elementos asignados a los usuarios para cada aplicación y poder descargarlos en el formato deseado.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/baja-masiva-de-usuarios')}}>
                    <h3 className="card-title">Baja masiva de usuarios</h3>
                    <p>
                     Permite dar de baja masivamente a los usuarios del sistema, tanto en la propia aplicación como en LDAP.
                    </p>
                    <i className="fa-regular fa-circle-arrow-right"></i>
                </Card>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
                <Card   className="home-card h-100"
                        onClick={() => {navigate('/reactivacion-masiva-de-usuarios')}}>
                    <h3 className="card-title">Reactivación masiva de usuarios</h3>
                    <p>
                     Permite dar de alta masivamente a los usuarios que se encuentran dados de baja en el sistema. 
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