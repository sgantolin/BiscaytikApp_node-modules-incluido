import { useState,  useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';


function CatalogoAplicacionesEditar() {
  
  const navigate = useNavigate();

  //comprobar si se han echo cambios en los campos con este estado
  const [tieneCambios, setTieneCambios] = useState(true);


  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {


    if(tieneCambios){
      handleSalirSinGuardar();
      setTieneCambios(false);
      return;
    }
    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La aplicación se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
      setTieneCambios(true);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `La aplicación no se ha podido guardar correctamente.`
                          });
      setGuardarExitoso(true);
      setTieneCambios(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior

  //dialog2 salir sin guardar
  const [visibleDialogSinGuardar, setVisibleDialogSinGuardar] = useState(false);
  

  const footerContentDialogSinGuardar = (
    <div>
      <Button label="Volver a modo edición" onClick={() => hideDialogSinGuardar()} text />
      <Button label="Si, salir sin guardar" onClick={() => {navigate('/catalogo-aplicaciones')}} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );

  const hideDialogSinGuardar = () => {
    setVisibleDialogSinGuardar(false);
  }

  const handleSalirSinGuardar = () => {
    setVisibleDialogSinGuardar(true);
  };
  //fin dialog2 salir sin guardar

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-md-row">
            <h1 className="title-card-data my-3 my-md-0">Editar aplicación {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={() => {navigate('/catalogo-aplicaciones')}} icon="fa-regular fa-arrow-left" label="Volver a catálogo de aplicaciones" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Identificador</h3>
                      <p>1001</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Código</h3>
                      <p>GAM</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="d-flex flex-column">
                      <h3>Control por entidades</h3>
                      <p>Si</p>
                    </div>
                  </div>
                
                </div>

                <div className="row without-border mt-3">

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreAplicacionEs" placeholder="Nombre de la aplicación en castellano" aria-describedby="nombre-de-la-aplicacion-en-castellano" className="order-1"/>
                      <label htmlFor="nombreAplicacionEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-2">
                    <div className="d-flex flex-column">
                      <InputText id="nombreAplicacionEu" placeholder="Nombre de la aplicación en euskera" aria-describedby="nombre-de-la-aplicacion-en-euskera" className="order-1"/>
                      <label htmlFor="nombreAplicacionEu" className="order-0">Nombre (Euskera)</label>
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

        <Dialog visible={visibleDialogSinGuardar} onHide={hideDialogSinGuardar} footer={footerContentDialogSinGuardar} className="system-dialog without-maxwidth-dialog more-width">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Salir sin guardar</h4>
          <p className='px-3 text-center'>
            ¿Seguro que deseas salir del modo edición?
            <br/>
            Se han realizado <strong>cambios</strong> en los campos que no se han guardado.
          </p>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default CatalogoAplicacionesEditar
