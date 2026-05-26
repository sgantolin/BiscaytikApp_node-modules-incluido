import { useState, useEffect, useRef } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { GruposPermisosService } from '../../services/GruposPermisosService';


function PerfilesEditar() {
  
  //tabla datos
  const [gruposPermisos, setGruposPermisos] = useState([]);

  //seleccionar fila
  const [selectedPermiso, setSelectedPermiso] = useState(null);

  //carga datos tabla
  useEffect(() => {
    GruposPermisosService.getGruposPermisos().then(data => setGruposPermisos(data));
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
                            detail: 'El perfil se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido guardar el perfil correctamente.`
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
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Editar perfil {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a perfiles" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            <div className="data">
              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-3">
                    <div className="d-flex flex-column">
                      <h3>Identificador del perfil</h3>
                      <p>R-01-00001</p>
                    </div>
                  </div>

                </div>

                <div className="row without-border mt-3">
                  <div className="col-md-6 col-lg-3 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="codigoPerfil" placeholder="Código del perfil" value="XXXXXX" aria-describedby="codigo-del-perfil" className="order-1"/>
                        <label htmlFor="codigoPerfil" className="order-0">Código del perfil</label>
                      </div>
                    </div>
                </div>

                <div className="row without-border">

                  <div className="col-lg-6 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombrePerfilEs" placeholder="Nombre del perfil en Castellano" value="Perfil de consulta" aria-describedby="nombre-del-perfil-en-castellano" className="order-1"/>
                        <label htmlFor="nombrePerfilEs" className="order-0">Nombre (Castellano)</label>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombrePerfilEu" placeholder="Nombre del perfil en Euskera" value="Perfil de consulta" aria-describedby="nombre-del-perfil-en-euskera" className="order-1"/>
                        <label htmlFor="nombrePerfilEu" className="order-0">Nombre (Euskera)</label>
                      </div>
                    </div>

                </div>

                <div className="inner-card-table">
                  <div className="row mt-2 without-border border-0">
                    <label htmlFor="tablePermisos">Grupos de permisos asignados</label>
                    <PaginatorLabel />
                    <DataTable  value={gruposPermisos}
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
                        <Column field="codigo" header="Código grupo" sortable headerStyle={{ minWidth: '170px', width: '170px' }}></Column>
                        <Column field="aplicacion" header="Aplicación" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por aplicación" headerStyle={{ width:'250px', minWidth: '250px' }}></Column>
                        <Column field="nombreGrupo" header="Nombre" sortable headerStyle={{ minWidth: '350px' }}></Column>
                    </DataTable>
                  </div>
                </div>

                <div className="row mt-4 without-border">
                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
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

export default PerfilesEditar
