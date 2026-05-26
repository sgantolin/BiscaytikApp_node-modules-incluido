import { useState, useRef } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';



function GestionUsuariosCrear() {
  
  //radio button estado
  const [estado, setEstado] = useState(true);
  const [estado2, setEstado2] = useState(true);

  //calendar state
  const [bornDate, setBornDate] = useState(null);

  //tipo identificacion
  const tiposDeIdentificacion = [
    { name: 'DNI', code: 'dni' },
    { name: 'NIE', code: 'nie' },
  ];
  const [tipoIdentificacion, setTipoIdentificacion] = useState(tiposDeIdentificacion[0]);

  addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
  });

  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success', 
                            detail: 'El usuario se ha creado correctamente.'
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


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Crear usuario</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a gestión de usuarios" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">

                <div className="row">
                  <div className="col">
                    <h2 className="form-section-title">Datos personales</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 col-lg-4 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="tipoIdentificacion" aria-describedby="tipo-de-identificacion" value={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.value)} options={tiposDeIdentificacion} optionLabel="name" className="order-1" defaultValue={tiposDeIdentificacion[0]}/>
                      <label htmlFor="tipoIdentificacion" className="order-0">Tipo de identificación</label>
                      <p className="errorMsg order-2">Selecciona una opción</p>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-8 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nIdentificacion" placeholder="Numero de identificación" aria-describedby="numero-de-identificacion" className="order-1"/>
                      <label htmlFor="nIdentificacion" className="order-0">Número de identificación</label>
                    </div>
                  </div>

                  <div className="col-md-5 col-lg-4 mb-3">
                    <div className="d-flex flex-column">
                      <Calendar id="fechaNacimiento" showIcon icon="fa-regular fa-calendar" placeholder="Seleccionar fecha" className="order-1" value={bornDate} onChange={(e) => setBornDate(e.value)} aria-describedby="fecha-de-nacimiento" locale="es" dateFormat="dd/mm/yy"/>
                      <label htmlFor="fechaNacimiento" className="order-0">Fecha de nacimiento</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombre" placeholder="Nombre de usuario" aria-describedby="nombre" className="order-1"/>
                        <label htmlFor="nombre" className="order-0">Nombre</label>
                      </div>
                    </div>

                    <div className="col-md-12 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="apellido1" placeholder="Primer apellido de usuario" aria-describedby="primer-apellido" className="order-1"/>
                        <label htmlFor="apellido1" className="order-0">Primer apellido</label>
                      </div>
                    </div>

                    <div className="col-md-12 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="apellido2" placeholder="Segundo apellido de usuario" aria-describedby="segundo-apellido" className="order-1"/>
                        <label htmlFor="apellido2" className="order-0">Segundo apellido</label>
                      </div>
                    </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <h2 className="form-section-title">Contacto</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="email" type="email" placeholder="Correo electrónico del usuario" aria-describedby="segundo-apellido" className="order-1"/>
                      <label htmlFor="email" className="order-0">Correo electrónico</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="mobileNumber" type="tel" placeholder="Número de teléfono móvil del usuario" aria-describedby="segundo-apellido" className="order-1"/>
                      <label htmlFor="mobileNumber" className="order-0">Nº teléfono móvil</label>
                    </div>
                  </div>

                  
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <h2 className="form-section-title">Preferencias</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 d-flex flex-column mb-3">
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

                  <div className="col-md-12 d-flex flex-column mb-3">
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

                <div className="row">
                  <div className="col buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
                    <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                    <Button onClick={handleGuardarBtn} label="Crear" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
                      <div className="container-bar">
                        <div className="bar"></div>
                      </div>
                    </Button>
                  </div>
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

export default GestionUsuariosCrear
