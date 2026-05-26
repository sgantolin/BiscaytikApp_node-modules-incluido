import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { AutoComplete } from "primereact/autocomplete";
import { Dialog } from 'primereact/dialog';
import { MultiSelect } from 'primereact/multiselect';


function BajaMasivaUsuarios() {

  //dropdown autocomplete entidades
  const [value, setValue] = useState('');

  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete entidades

  //habilitar resto de campos al seleccionar una aplicacion en el select
  const [aplicacion, setAplicacion] = useState('');
  const [habilitarRestoDeCampos, setHabilitarRestoDeCampos] = useState(true);

  const habilitarRestoDeCamposFunction = () => {
    if (aplicacion !== '') {
      setHabilitarRestoDeCampos(true);
    } else {
      setHabilitarRestoDeCampos(false);
    }
  };

  const handleAplicacionSelectionChange = (e) => {
    setAplicacion(e.value);
    setValue(e.value)
    habilitarRestoDeCamposFunction();
  };

  useEffect(() => {
    habilitarRestoDeCamposFunction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aplicacion]);
  

  //funciones botones guardar baja masiva y cerrar dialog
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success', 
                            summary: 'Baja masiva correcta', 
                            detail: 'Se han dado de baja los usuarios seleccionados.'
                        });
      setGuardarExitoso(false);
      setVisible(false);
      setVisible2(false);
    }else{
      toast.current.show({  severity: 'error', 
                            summary: 'Error baja masiva', 
                            detail: `No se han podido dar de baja los usuarios seleccionados.`
                          });
      setGuardarExitoso(true);
      
    }
  };
  //FIN funciones botones guardar y volver a la pag anterior

  //dialog entidad
  const [selectedEntidades, setSelectedEntidades] = useState(null);
  const entidades = [
      { name: 'Entidad 01', code: 'e01' },
      { name: 'Entidad 02', code: 'e02' },
      { name: 'Entidad 03', code: 'e03' },
      { name: 'Entidad 04', code: 'e04' },
      { name: 'Entidad 05', code: 'e05' }
  ];

  const [visible, setVisible] = useState(false);

  const handleBajaEntidadesBtn = () => {
      setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog()} text />
      <Button label="Dar de baja" onClick={() => handleGuardarBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin dialog entidad

  //dialog usuarios
  const [selectedUsuarios, setSelectedUsuarios] = useState(null);
  const usuarios = [
      { name: 'Usuario 01', code: 'u01' },
      { name: 'Usuario 02', code: 'u02' },
      { name: 'Usuario 03', code: 'u03' },
      { name: 'Usuario 04', code: 'u04' },
      { name: 'Usuario 05', code: 'u05' }
  ];

  const [visible2, setVisible2] = useState(false);

  const handleBajaUsuariosBtn = () => {
      setVisible2(true);
  };

  const hideDialog2 = () => {
    setVisible2(false);
  }

  const footerContent2 = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog2()} text />
      <Button label="Dar de baja" onClick={() => handleGuardarBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin dialog usuarios
  

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        <h1 className="section-title">Baja masiva de usuarios</h1>
        {/* <p className="section-subtitle">
          La baja masiva de usuarios permite dar de baja masivamente a los usuarios del sistema, tanto en la propia aplicación como en LDAP.
        </p> */}
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2 with-autocompletes-component">
          
          <div className="card-data">
            <div className="data">
              <form action="">
              
                <div className="row">
                  {/* <p className="section-subtitle mb-4">
                    La baja masiva de usuarios permite dar de baja masivamente a los usuarios del sistema, tanto en la propia aplicación como en LDAP.
                  </p> */}
                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete onChange={handleAplicacionSelectionChange} id="codigoAplicacion" className="order-1" placeholder="Ingresar o seleccionar código de aplicación" aria-describedby="aplicacion" value={value} suggestions={items} completeMethod={search} dropdown />
                      <label htmlFor="codigoAplicacion" className="order-0">Código de aplicación</label>
                    </div>
                  </div>
                </div>
                {habilitarRestoDeCampos && (
                  <>
                    <div className="row">
                      <div className="col mb-3 mt-4 d-flex flex-column flex-md-row justify-content-end">
                          <Button onClick={handleBajaEntidadesBtn} label="Baja por entidades" icon="fa-regular fa-building" type="button" className="p-button-outlined w-30 me-0 me-md-4 mb-3 mb-md-0" />
                          <Button onClick={handleBajaUsuariosBtn} label="Baja por usuarios" icon="fa-regular fa-user-large" type="button" className="p-button-outlined w-30" />
                      </div>
                    </div>
                  </>
                )}

              </form>
            </div>
          </div>
        </Card>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog clonar-dialog dialog-min-width dialog-smaller">
          <h4 className="pb-4">Baja por entidades</h4>
              <p className="mt-0">
                Seleccione una o varias entidades para las que se deseen dar de baja los usuarios asociados.
              </p>
              <div className="d-flex flex-column mt-4 mb-5">
                <MultiSelect value={selectedEntidades} 
                              onChange={(e) => setSelectedEntidades(e.value)} 
                              options={entidades} optionLabel="name" 
                              placeholder="Seleccionar entidades" 
                              className="order-1"/>
                <label htmlFor="entidad" className="order-0">Entidades</label>
              </div>
        </Dialog>

        <Dialog visible={visible2} onHide={hideDialog2} footer={footerContent2} className="system-dialog clonar-dialog dialog-min-width dialog-smaller">
          <h4 className="pb-4">Baja por usuarios</h4>
              <p className="mt-0">
                Seleccione uno o varios usuarios a los que se deseen dar de baja de la aplicación seleccionada.
              </p>
              <div className="d-flex flex-column mt-4 mb-5">
                <MultiSelect value={selectedUsuarios} 
                              onChange={(e) => setSelectedUsuarios(e.value)} 
                              options={usuarios} optionLabel="name" 
                              placeholder="Seleccionar usuarios" 
                              className="order-1" />
                <label htmlFor="entidad" className="order-0">Usuarios</label>
              </div>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default BajaMasivaUsuarios
