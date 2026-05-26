import { useState, useEffect, useRef } from "react";

import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { PermisosService } from '../../services/PermisosService';


function GruposDePermisosCrear() {
  
  //tabla datos
  const [permisos, setPermisos] = useState([]);

  //seleccionar fila
  const [selectedPermiso, setSelectedPermiso] = useState(null);

  //carga datos tabla
  useEffect(() => {
      PermisosService.getPermisos().then(data => setPermisos(data));
  }, []);

  const isSelectable = (data) => data.estado != 'Baja';
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  
  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El registro se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido guardar el registro correctamente.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior
  

  //dropdown autocomplete entidades
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete entidades
  
  const handleSelectionChange = (e) => {
    setValue(e.value);
  };


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Crear grupo de permisos</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a grupos de permisos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            <div className="data">
              <form action="">
                <div className="row">

                  <div className="col-lg-4 mb-3">
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
                      <label htmlFor="codigoAplicacion" className="order-0">Código de la aplicación</label>
                      <p className="errorMsg order-2">Selecciona una opción</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="codigoGrupo" placeholder="Código del grupo" value="CGP" aria-describedby="codigo-del-grupo" className="order-1"/>
                      <label htmlFor="codigoGrupo" className="order-0">Código del grupo</label>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombreGrupoEs" placeholder="Nombre del grupo en Castellano" aria-describedby="nombre-del-grupo-en-castellano" className="order-1"/>
                        <label htmlFor="nombreGrupoEs" className="order-0">Nombre (Castellano)</label>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex flex-column">
                        <InputText id="nombreGrupoEu" placeholder="Nombre del grupo en Euskera" aria-describedby="nombre-del-grupo-en-euskera" className="order-1"/>
                        <label htmlFor="nombreGrupoEu" className="order-0">Nombre (Euskera)</label>
                      </div>
                    </div>

                  

                </div>

                {/* Esta tabla solo se muestra si se ha seleccionado una aplicación */}
                <div className="inner-card-table">
                  <div className="row mt-3">
                    <label htmlFor="tablePermisos">Asignar permisos</label>
                    <PaginatorLabel />
                    <DataTable  value={permisos}
                                size="normal"
                                stripedRows
                                removableSort
                                id="tablePermisos"
                                filtermode="contains"
                                filterDisplay="row"
                              
                                emptyMessage="No se han encontrado resultados"
                                selectionMode="single"
                                selection={selectedPermiso} 
                                onSelectionChange={(e) => setSelectedPermiso(e.value)} dataKey="id" metaKeySelection={false}
                                isDataSelectable={isRowSelectable}
                                rowClassName={rowClassName}
                                paginator
                                scrollable
                                scrollHeight="635px"
                                rows={5}
                                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                                tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>

                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="codigo" header="Código permiso" sortable headerStyle={{ minWidth: '170px', width: '170px' }}></Column>
                        <Column field="nombrePermiso" header="Nombre permiso" sortable headerStyle={{ minWidth: '350px' }}></Column>
                        <Column field="tipoAcceso" header="Tipo de acceso" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por tipo de acceso" headerStyle={{ minWidth: '230px' }}></Column>
                        <Column field="elemento" header="Elemento" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por elemento" headerStyle={{ minWidth: '200px' }}></Column>
                    </DataTable>
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

export default GruposDePermisosCrear
