import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from "primereact/autocomplete";

import { GruposPermisosService } from '../../services/GruposPermisosService';

function PermisoAGrupos() {
  

  //dropdown autocomplete aplicacion
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete aplicacion

  //dropdown permisos mockup
  const permisos = [
    { name: 'Permiso 01', code: 'p01' },
    { name: 'Permiso 02', code: 'p02' },
    { name: 'Permiso 03', code: 'p03' },
    { name: 'Permiso 04', code: 'p04' },
    { name: 'Permiso 05', code: 'p05' },
    { name: 'Permiso 06', code: 'p06' },
    { name: 'Permiso 07', code: 'p07' },
    { name: 'Permiso 08', code: 'p08' }
  ];
  const [permiso, setPermiso] = useState();
  //FIN dropdown permisos mockup
  
  //mostrar container con tabla y habilitar el select permiso
  const [mostrarContainer, setMostrarContainer] = useState(false);
  const [aplicacion, setAplicacion] = useState('');

  const mostrarToDisplayContainer = () => {
    if (aplicacion !== '') {
      setMostrarContainer(true);
    } else {
      setMostrarContainer(false);
    }
  };

  const handleTipoListadoChange = (e) => {
    setAplicacion(e.value);
    mostrarToDisplayContainer();
  };

  //tabla datos
  const [gruposPermisos, setGruposPermisos] = useState([]);

  //seleccionar fila
  const [selectedGrupo, setSelectedGrupo] = useState(null);


  useEffect(() => {
    GruposPermisosService.getGruposPermisos().then(data => setGruposPermisos(data));
    mostrarToDisplayContainer();
  }, [aplicacion]);


  //funciones botones guardar
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'Los permisos se han asignado correctamente a los grupos seleccionados.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `Los permisos no se han podido asignar correctamente a los grupos seleccionados`
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
            <h1 className="title-card-data">Asignar permiso a grupos de permisos (Acción masiva)</h1>
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

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="permiso" disabled={!mostrarContainer} placeholder="Seleccionar permiso" aria-describedby="permiso" value={permiso} onChange={(e) => setPermiso(e.value)} options={permisos} optionLabel="name" className="order-1"/>
                      <label htmlFor="permiso" className="order-0">Permiso</label>
                    </div>
                  </div>

                </div>

                {mostrarContainer && (
                  <div id="toDisplayContainer" className="row">

                    <div className="col inner-card-table">
                      <label htmlFor="tableGrupos">Asignar grupos de permisos</label>
                      <DataTable  value={gruposPermisos}
                                  size="normal"
                                  stripedRows
                                  removableSort
                                  id="tableGrupos"
                                
                                  emptyMessage="No se han encontrado resultados"
                                  selectionMode="multiple"
                                  selection={selectedGrupo} 
                                  onSelectionChange={(e) => setSelectedGrupo(e.value)} dataKey="id" metaKeySelection={false}
                                  scrollable
                                  scrollHeight="410px"
                                  tableStyle={{ minWidth: '20rem', fontSize: '15px' }}>
                          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                          <Column field="identificador" header="Identificador" sortable headerStyle={{ minWidth: '170px', width: '170px' }}></Column>
                          <Column field="nombreGrupo" header="Nombre del grupo" sortable headerStyle={{ minWidth: '350px' }}></Column>
                      </DataTable>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col">
                    <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                      <Button onClick={handleGuardarBtn} label="Guardar" type="button" className="p-button-primary btn-loading">
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

export default PermisoAGrupos
