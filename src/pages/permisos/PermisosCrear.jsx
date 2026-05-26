import { useState, useRef, useEffect } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from "primereact/autocomplete";
import { TreeSelect } from 'primereact/treeselect';

import { ElementsTreeService } from '../../services/ElementsTreeService';


function PermisosCrear() {

  //dropdown autocomplete codigo aplicacion
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete codigo aplicacion


  const [elements, setElements] = useState(null);
  const [selectedElementsKeys, setSelectedElementsKeys] = useState(null);
  
  useEffect(() => {
      ElementsTreeService.getElementsTreeNodes().then((data) => setElements(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  //tipos de acceso mockup
  const tiposDeAccesos = [
    { name: 'Consulta', code: 'ta01' },
    { name: 'Edición e inserción', code: 'ta02' },
    { name: 'Eliminación', code: 'ta03' },
    { name: 'Sin acceso', code: 'ta04' }
  ];
  const [tipoAcceso, setTipoAcceso] = useState();

  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El permiso se ha creado correctamente.'
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

  //habilitar resto de campos al seleccionar una aplicacion en el select
  const [habilitarCampos, setHabilitarCampos] = useState(true);

  const handleSelectionChange = (e) => {
    setValue(e.value);
    setHabilitarCampos(false);
  };

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Crear permiso</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a catálogo de permisos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          <div className="card-data">
            <div className="data">
              <form action="">

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete id="codigoAplicacion" 
                                    className="order-1" 
                                    placeholder="Añadir o seleccionar código de aplicación" 
                                    aria-describedby="codigo-aplicacion" 
                                    value={value} 
                                    suggestions={items} 
                                    completeMethod={search} 
                                    onChange={handleSelectionChange} 
                                    dropdown />
                      <label htmlFor="codigoAplicacion" className="order-0">Código de aplicación</label>
                      <p className="errorMsg order-2">Selecciona una opción</p>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                    <TreeSelect value={selectedElementsKeys} 
                                onChange={(e) => setSelectedElementsKeys(e.value)} 
                                options={elements} 
                                metaKeySelection={false} 
                                className="order-1"
                                selectionMode="checkbox" 
                                disabled={habilitarCampos}
                                display="chip" 
                                placeholder="Seleccionar elemento de aplicación"/>
                    <label htmlFor="entidad" className="order-0">Elemento de aplicación</label>
                    <p className="errorMsg order-2">Es necesario seleccionar un elemento</p>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-6 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="tipoAcceso" disabled={habilitarCampos} placeholder="Seleccionar tipo de acceso" aria-describedby="tipo-de-acceso" value={tipoAcceso} onChange={(e) => setTipoAcceso(e.value)} options={tiposDeAccesos} optionLabel="name" className="order-1"/>
                      <label htmlFor="tipoAcceso" className="order-0">Tipo de acceso</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombrePermisoEs" disabled={habilitarCampos} placeholder="Nombre del permiso en Castellano" aria-describedby="nombre-del-permiso-en-castellano" className="order-1"/>
                      <label htmlFor="nombrePermisoEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombrePermisoEu" disabled={habilitarCampos} placeholder="Nombre del permiso en Euskera" aria-describedby="nombre-del-permiso-en-euskera" className="order-1"/>
                      <label htmlFor="nombrePermisoEu" className="order-0">Nombre (Euskera)</label>
                    </div>
                  </div>

                </div>
                <div className="row">
                  <div className="col">
                    <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
                      <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                      <Button onClick={handleGuardarBtn} label="Crear" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
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

export default PermisosCrear
