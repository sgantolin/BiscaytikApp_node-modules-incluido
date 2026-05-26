import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from "primereact/autocomplete";



function GenerarListados() {
  
  //radio button estado
  const [estado, setEstado] = useState('');

  //dropdown autocomplete entidades
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete entidades

  //tipo de listados
  const tiposDeListados = [
    { 
      name: 'Listado de usuarios que poseen un permiso para una aplicación',
      code: 'list01' 
    },
    { 
      name: 'Listado de usuarios que poseen un grupo de permisos para una aplicación',
      code: 'list02' 
    },
    { 
      name: 'Listado de usuarios que poseen un perfil',
      code: 'list03' 
    },
    { 
      name: 'Listado de usuarios que poseen un permiso concreto para una entidad de una aplicación',
      code: 'list04' 
    },
    { 
      name: 'Listado de usuarios que poseen un grupo de permisos concreto para una entidad de una aplicación',
      code: 'list05' 
    },
    { 
      name: 'Listado de usuarios que poseen un perfil concreto para una entidad',
      code: 'list06' 
    },

  ];
  const [tipoListado, setTipoListado] = useState('');

  //funcion para mostrar container con campos del listado
  const [mostrarContainer, setMostrarContainer] = useState(false);


  const mostrarToDisplayContainer = () => {
    if (tipoListado !== '' && estado !== '') {
      setMostrarContainer(true);
    } else {
      setMostrarContainer(false);
    }
  };

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

  const handleTipoListadoChange = (e) => {
    setTipoListado(e.value);
    mostrarToDisplayContainer();
  };

  const handleEstadoChange = (e) => {
    setEstado(e.value);
    mostrarToDisplayContainer();
  };

  useEffect(() => {
    mostrarToDisplayContainer();
    habilitarRestoDeCamposFunction();
  }, [tipoListado, estado, aplicacion]);


  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El listado se esta generando en segundo plano, en cuanto este listo se descargará automaticamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `Se han de completar todos los campos.`
                          });
      setGuardarExitoso(true);
    }
  };
  //FIN funciones botones guardar y volver a la pag anterior

  

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">


       <h1 className="section-title">Listados</h1> 
        {/* <p className="section-subtitle">
          En la aplicación se genera mucha cantidad de información relativa a los permisos, grupos de permisos, perfiles, y los elementos asociados a las entidades para cada aplicación y usuario.
          Es por ello, que se ofrece la capacidad de generar una serie de listados disponibles para conocer los elementos asignados a los usuarios para cada aplicación.
        </p> */}
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2 with-autocompletes-component">
          <div className="title-card-container">
            <h1 className="title-card-data">Generación de listados</h1>
          </div>
          <div className="card-data">
            <div className="data">

              <form action="">
                
                <div className="row">
                  {/* <p className="section-subtitle mb-4">
                    En la aplicación se genera mucha cantidad de información relativa a los permisos, grupos de permisos, perfiles, y los elementos asociados a las entidades para cada aplicación y usuario.
                    Es por ello, que se ofrece la capacidad de generar una serie de listados disponibles para conocer los elementos asignados a los usuarios para cada aplicación.
                  </p> */}
                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="tipoListado" onChange={handleTipoListadoChange} aria-describedby="tipo-de-listado" value={tipoListado} options={tiposDeListados} optionLabel="name" className="order-1" placeholder="Selecciona un listado de la lista"/>
                      <label htmlFor="tipoListado" className="order-0">Listado</label>
                      <p className="errorMsg order-2">Es necesario seleccionar un tipo de listado</p>
                    </div>
                  </div>

                  <div className="col-md-12 d-flex flex-column mb-3">
                    <div className="d-flex order-1 mt-1" id="radioFormat">
                      <div className="d-flex align-items-center">
                          <RadioButton inputId="pdfFormat" onChange={handleEstadoChange} name="pdfFormat" value="PDF" checked={estado === "PDF"} />
                          <label htmlFor="pdfFormat">PDF</label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                          <RadioButton inputId="csvFormat" onChange={handleEstadoChange} name="csvFormat" value="CSV" checked={estado === "CSV"} />
                          <label htmlFor="csvFormat">CSV</label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                          <RadioButton inputId="xlsFormat" onChange={handleEstadoChange} name="xlsFormat" value="XLS" checked={estado === "XLS"} />
                          <label htmlFor="xlsFormat">XLS</label>
                      </div>
                    </div>
                    <label htmlFor="radioFormat" className="mb-2 order-0">Formato</label>
                  </div>

                </div>

                

                {mostrarContainer && (
                  <>
                    <div className="row">
                      <div className="col">
                        <hr className="mb-4"/>
                      </div>
                    </div>
                    
                    <div id="toDisplayContainer" className="row">

                        <div className="col-md-12 mb-3">
                          <div className="d-flex flex-column">
                            <AutoComplete id="aplicacion" onChange={handleAplicacionSelectionChange} className="order-1" placeholder="Seleccionar aplicación" aria-describedby="aplicacion" value={value} suggestions={items} completeMethod={search} dropdown />
                            <label htmlFor="aplicacion" className="order-0">Aplicación</label>
                            <p className="errorMsg order-2">Selecciona una opción</p>
                          </div>

                          <div className="dialog-advise no-results-msg info-advise d-flex align-items-center mt-3">
                            <i className="fa-regular fa-circle-info me-3"></i>
                            Muestra las aplicaciones disponibles y en estado de {'"Alta"'} en el sistema.
                          </div>
                        </div>

                        <div className="clearfix"></div>
                        {habilitarRestoDeCampos && (
                          <>
                            <div className="col-md-12 mb-3">
                              <div className="d-flex flex-column">
                                <AutoComplete id="permiso" className="order-1" placeholder="Seleccionar permiso" aria-describedby="permiso" value={value2} suggestions={items} completeMethod={search} onChange={(e) => setValue2(e.value)} dropdown />
                                <label htmlFor="permiso" className="order-0">Permiso</label>
                                <p className="errorMsg order-2">Selecciona una opción</p>
                              </div>
                            </div>
                            
                            <div className="col-md-12 mb-3">
                              <div className="d-flex flex-column">
                                <AutoComplete id="grupoPermisos" className="order-1" placeholder="Seleccionar grupo de permisos" aria-describedby="grupo de permisos" value={value3} suggestions={items} completeMethod={search} onChange={(e) => setValue3(e.value)} dropdown />
                                <label htmlFor="grupoPermisos" className="order-0">Grupo de permisos</label>
                                <p className="errorMsg order-2">Selecciona una opción</p>
                              </div>
                            </div>

                            <div className="col-md-12 mb-3">
                              <div className="d-flex flex-column">
                                <AutoComplete id="entidad" className="order-1" placeholder="Seleccionar entidad" aria-describedby="entidad" value={value5} suggestions={items} completeMethod={search} onChange={(e) => setValue5(e.value)} dropdown />
                                <label htmlFor="entidad" className="order-0">Entidad</label>
                                <p className="errorMsg order-2">Selecciona una opción</p>
                              </div>
                            </div>
                          </>

                        )}
                        {/* El autocomplete perfil solo se ha de mostrar cuando se seleccione un listado de perfiles */}
                        <div className="col-md-12 mb-3">
                          <div className="d-flex flex-column">
                            <AutoComplete id="perfil" className="order-1" placeholder="Seleccionar perfil" aria-describedby="perfil" value={value4} suggestions={items} completeMethod={search} onChange={(e) => setValue4(e.value)} dropdown />
                            <label htmlFor="perfil" className="order-0">Perfil</label>
                            <p className="errorMsg order-2">Selecciona una opción</p>
                          </div>
                        </div>

                    </div>
                  </>
                )}

              </form>
              <div className="row">
                <div className="col">
                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-3 pt-md-4">
                    <Button onClick={handleGuardarBtn} label="Generar listado" disabled type="button" className="p-button-primary btn-loading">
                      <div className="container-bar">
                        <div className="bar"></div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </Card>

        

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default GenerarListados
