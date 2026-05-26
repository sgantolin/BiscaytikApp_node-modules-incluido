import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from "primereact/autocomplete";

import { PerfilesService } from '../../services/PerfilesService';

function GrupoAPerfiles() {
  

  //dropdown autocomplete aplicacion
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete aplicacion

  //dropdown grupo de permisos mockup
  const listaGruposPermisos = [
    { name: 'Grupo de permiso 01', code: 'gp01' },
    { name: 'Grupo de permiso 02', code: 'gp02' },
    { name: 'Grupo de permiso 03', code: 'gp03' },
    { name: 'Grupo de permiso 04', code: 'gp04' },
    { name: 'Grupo de permiso 05', code: 'gp05' },
    { name: 'Grupo de permiso 06', code: 'gp06' },
    { name: 'Grupo de permiso 07', code: 'gp07' },
    { name: 'Grupo de permiso 08', code: 'gp08' }
  ];
  const [grupoPermisos, setGrupoPermisos] = useState();
  //FIN dropdown grupo de permisos mockup
  
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
  const [perfiles, setPerfiles] = useState([]);

  //seleccionar fila
  const [selectedPerfil, setSelectedPerfil] = useState(null);


  useEffect(() => {
    PerfilesService.getPerfiles().then(data => setPerfiles(data));
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
            <h1 className="title-card-data">Asignar grupo de permisos a perfiles (Acción masiva)</h1>
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
                      <Dropdown inputId="grupoPermisos" disabled={!mostrarContainer} placeholder="Seleccionar grupo de permisos" aria-describedby="grupo-de-permisos" value={grupoPermisos} onChange={(e) => setGrupoPermisos(e.value)} options={listaGruposPermisos} optionLabel="name" className="order-1"/>
                      <label htmlFor="grupoPermisos" className="order-0">Grupo de permisos</label>
                    </div>
                  </div>

                </div>

                {mostrarContainer && (
                  <div id="toDisplayContainer" className="row">

                    <div className="col inner-card-table">
                      <label htmlFor="tablePerfiles">Asignar perfiles</label>
                      <DataTable  value={perfiles}
                                  size="normal"
                                  stripedRows
                                  removableSort
                                  id="tablePerfiles"
                                
                                  emptyMessage="No se han encontrado resultados"
                                  selectionMode="multiple"
                                  selection={selectedPerfil} 
                                  onSelectionChange={(e) => setSelectedPerfil(e.value)} dataKey="id" metaKeySelection={false}
                                  scrollable
                                  scrollHeight="410px"
                                  tableStyle={{ minWidth: '20rem', fontSize: '15px' }}>
                          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                          <Column field="codigo" header="Identificador" sortable headerStyle={{ minWidth: '170px', width: '170px' }}></Column>
                          <Column field="nombrePerfil" header="Nombre del perfil" sortable headerStyle={{ minWidth: '350px' }}></Column>
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

export default GrupoAPerfiles
