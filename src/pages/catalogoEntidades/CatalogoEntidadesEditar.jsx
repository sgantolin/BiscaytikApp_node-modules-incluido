import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';


function CatalogoEntidadesEditar() {
  
  const navigate = useNavigate();


  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La entidad se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `La entidad no se ha podido guardar correctamente.`
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
        
        <Card className="card-data-container smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-md-row">
            <h1 className="title-card-data my-3 my-md-0">Editar entidad {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={() => {navigate('/catalogo-entidades')}} icon="fa-regular fa-arrow-left" label="Volver a catálogo de entidades" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Identificador</h3>
                      <p>2001</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Código</h3>
                      <p>Mundaka</p>
                    </div>
                  </div>
                
                </div>

                <div className="row without-border mt-3">

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreEntidadEs" placeholder="Nombre de la entidad en castellano" aria-describedby="nombre-de-la-entidad-en-castellano" className="order-1"/>
                      <label htmlFor="nombreEntidadEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-2">
                    <div className="d-flex flex-column">
                      <InputText id="nombreEntidadEu" placeholder="Nombre de la entidad en euskera" aria-describedby="nombre-de-la-entidad-en-euskera" className="order-1"/>
                      <label htmlFor="nombreEntidadEu" className="order-0">Nombre (Euskera)</label>
                    </div>
                  </div>

                </div>

                <div className="row without-border">
                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                    <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                    <Button onClick={handleGuardarBtn} label="Guardar" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
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

export default CatalogoEntidadesEditar
