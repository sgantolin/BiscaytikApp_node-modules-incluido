import { useState, useRef } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { AutoComplete } from "primereact/autocomplete";

function PermisosAFormularios() {
  
  //dropdown autocomplete aplicacion
  const [items, setItems] = useState([]);
  const [aplicacion, setAplicacion] = useState('');

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }

  const handleTipoListadoChange = (e) => {
    setAplicacion(e.value);
  };
  //FIN dropdown autocomplete aplicacion

  //funciones botones guardar
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'Se han creado los permisos asociados a los formularios de la aplicación seleccionada.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se han podido crear los permisos asociados a los formularios de la aplicación seleccionada.`
                          });
      setGuardarExitoso(true);
    }
  };
  //FIN funciones botones guardar

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2">
          <div className="title-card-container">
            <h1 className="title-card-data">Crear permisos asociados a formularios (Acción masiva)</h1>
          </div>
          <div className="card-data">
            <div className="data">

              <form action="">
                
                <div className="row">

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete id="aplicacion" onChange={handleTipoListadoChange} className="order-1" placeholder="Añadir o seleccionar código de la aplicación" aria-describedby="aplicacion" value={aplicacion} suggestions={items} completeMethod={search} dropdown />
                      <label htmlFor="aplicacion" className="order-0">Código de la aplicación</label>
                      <p className="errorMsg order-2">Seleccionar una aplicación</p>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col">
                    <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                      <Button onClick={handleGuardarBtn} label="Crear permisos" type="button" className="p-button-primary btn-loading">
                        <div className="container-bar">
                          <div className="bar"></div>
                        </div>
                      </Button>
                    </div>
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

export default PermisosAFormularios
