import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { RadioButton } from 'primereact/radiobutton';


function GestionUsuariosEditar() {
  
  //radio button estado
  const [estado, setEstado] = useState(true);
  const [estado2, setEstado2] = useState(true);

  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El usuario se ha modificado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `Se han de completar todos los campos.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior


  const navigate = useNavigate();
  
  //funcion boton cambiar contraseña
  const handleChangePasswordBtn = () => {
    navigate('/change-password');
  };


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-md-row">
            <h1 className="title-card-data my-3 my-md-0">Editar usuario {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={() => {navigate('/gestion-de-usuarios')}} icon="fa-regular fa-arrow-left" label="Volver a gestión de usuarios" text type="button" className="p-button pe-4 pe-sm-0" />
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

                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Nombre</h3>
                      <p>Pedro</p>
                    </div>
                  </div>
                  </div>

                <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Primer apellido</h3>
                      <p>Perez</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="d-flex flex-column">
                      <h3>Segundo apellido</h3>
                      <p>Garcia</p>
                    </div>
                  </div>
                </div>

                

                <div className="row without-border mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Contacto</h2>
                  </div>
                </div>

                <div className="row without-border">
                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="email" type="email" value={"pedro.perez.garcia@biscaytik.eus"} aria-describedby="segundo-apellido" className="order-1"/>
                      <label htmlFor="email" className="order-0">Correo electrónico</label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <InputText id="mobileNumber" type="tel" value={"657 609 543"} aria-describedby="segundo-apellido" className="order-1"/>
                      <label htmlFor="mobileNumber" className="order-0">Nº teléfono móvil</label>
                    </div>
                  </div>

                  
                </div>

                <div className="row without-border mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Preferencias</h2>
                  </div>
                </div>

                <div className="row without-border">

                  <div className="col-md-12 d-flex flex-column mb-4">
                    <div className="d-flex order-1 mt-1" id="radioDF">
                      <div className="d-flex align-items-center">
                          <RadioButton inputId="authCorreo" name="authCorreo" onChange={(e) => setEstado(e.value)} checked={estado === true} />
                          <label htmlFor="authCorreo">Correo electrónico</label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                          <RadioButton inputId="authSms" name="authSms" onChange={(e) => setEstado(e.value)} checked={estado === false} />
                          <label htmlFor="authSms">SMS al móvil</label>
                      </div>
                    </div>
                    <label htmlFor="radioDF" className="mb-2 order-0">Método de autentificación doble factor</label>
                  </div>

                  <div className="col-md-12 d-flex flex-column">
                    <div className="d-flex order-1 mt-1" id="radioLanguage">
                      <div className="d-flex align-items-center">
                          <RadioButton inputId="langEs" name="langEs" onChange={(e) => setEstado2(e.value)} checked={estado2 === true} />
                          <label htmlFor="langEs">Castellano</label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                          <RadioButton inputId="langEu" name="langEu" onChange={(e) => setEstado2(e.value)} checked={estado2 === false} />
                          <label htmlFor="langEu">Euskera</label>
                      </div>
                    </div>
                    <label htmlFor="radioLanguage" className="mb-2 order-0">Preferencia de idioma</label>
                  </div>

                </div>

                <div className="row mt-5 p-0 gx-0">
                  <div className="col">
                    <h2 className="form-section-title">Información cuenta</h2>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Validez de la contraseña</h3>
                      <p>04/01/2023</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Estado del usuario</h3>
                      <p>Activo</p>
                    </div>
                  </div>

                </div>

                {/* <div className="without-border mt-4">
                  <div className="title-button-container ms-md-auto">
                    <Button onClick={handleChangePasswordBtn} label="Cambiar contraseña" icon="fa-regular fa-unlock" type="button" className="p-button-outlined me-0 me-md-auto" />
                  </div>
                </div> */}

                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                  <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                  <Button onClick={handleGuardarBtn} label="Guardar" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>
                
              </form>
              
            </div>
          </div>
          
        </Card>

        

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default GestionUsuariosEditar
