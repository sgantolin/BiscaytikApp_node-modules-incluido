import { useState, useRef } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Checkbox } from 'primereact/checkbox';


function CatalogoAplicacionesCrear() {
  
  const [checked, setChecked] = useState(false);

  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La aplicación se ha creado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `La aplicación no se ha podido crear correctamente.`
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
            <h1 className="title-card-data my-3 my-md-0">Crear aplicación</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a catálogo de aplicaciones" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data">
            <div className="data">
              <form action="">
                <div className="row">

                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="codigoAplicacion" placeholder="Código de la aplicación" aria-describedby="codigo-de-la-aplicacion" className="order-1"/>
                      <label htmlFor="codigoAplicacion" className="order-0">Código</label>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 mb-3">
                    <div className="form-checkbox flex align-items-center ms-0 ms-md-4 mt-0 pt-1 mt-md-4">
                      <Checkbox inputId="controlPorEntidades" name="controlPorEntidades" value="controlPorEntidades" onChange={e => setChecked(e.checked)} checked={checked} />
                      <label htmlFor="controlPorEntidades" className="ms-2">Control por entidades</label>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreAplicacionEs" placeholder="Nombre de la aplicación en castellano" aria-describedby="nombre-de-la-aplicacion-en-castellano" className="order-1"/>
                      <label htmlFor="nombreAplicacionEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="d-flex flex-column">
                      <InputText id="nombreAplicacionEu" placeholder="Nombre de la aplicación en euskera" aria-describedby="nombre-de-la-aplicacion-en-euskera" className="order-1"/>
                      <label htmlFor="nombreAplicacionEu" className="order-0">Nombre (Euskera)</label>
                    </div>
                  </div>

                </div>

                <div className="row mt-4">
                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
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

export default CatalogoAplicacionesCrear
