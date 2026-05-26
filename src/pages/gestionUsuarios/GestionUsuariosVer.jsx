import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function GestionUsuariosVer() {

  const navigate = useNavigate();

  //funciones volver a la pag anterior
  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones volver a la pag anterior


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Detalle del usuario {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
              <Button onClick={handleVolverBtn} label="Volver a gestión de usuarios" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
              <Button onClick={() => {navigate('/gestion-de-usuarios/editar-usuario')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">

                <div className="row without-border gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Datos personales</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Identificador del usuario</h3>
                      <p>JCG01X</p>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Tipo de identificación</h3>
                      <p>DNI</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Número de identificación</h3>
                      <p>62157031Z</p>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="d-flex flex-column">
                      <h3>Fecha de nacimiento</h3>
                      <p>29/10/1984</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Nombre</h3>
                      <p>Pedro</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Primer apellido</h3>
                      <p>Perez</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Segundo apellido</h3>
                      <p>Garcia</p>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Contacto</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Correo electrónico</h3>
                      <p>pedro.perez.garcia@biscaytik.eus</p>
                    </div>
                  </div>
                  </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Nº teléfono móvil</h3>
                      <p>657 609 543</p>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Preferencias</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-8 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Método de autentificación doble factor</h3>
                      <p>Correo electrónico</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Preferencia de idioma</h3>
                      <p>Castellano</p>
                    </div>
                  </div>
                </div>

                <div className="row mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Información cuenta</h2>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-fle4 flex-column">
                      <h3>Validez de la contraseña</h3>
                      <p>04/01/2023</p>
                    </div>
                  </div>

                </div>
                <div className="row">

                  <div className="col-md-4">
                    <div className="d-flex flex-column">
                      <h3>Estado del usuario</h3>
                      <p>Activo</p>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de alta</h3>
                      <p>04/10/2022</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de baja</h3>
                      <p>12/04/2023</p>
                    </div>
                  </div>

                </div>

              </form>
             
            </div>
          </div>
        </Card>
        
      </section>
    </>
  )
}

export default GestionUsuariosVer
