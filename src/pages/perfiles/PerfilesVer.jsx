import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { GruposPermisosService } from '../../services/GruposPermisosService';

function PerfilesVer() {

  const navigate = useNavigate();
  
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

  //funciones volver a la pag anterior
  const toast = useRef(null);

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones volver a la pag anterior

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Detalle del perfil {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
              <Button onClick={handleVolverBtn} label="Volver a perfiles" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
              <Button onClick={() => {navigate('/perfiles/editar-perfil')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            <div className="data">
              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-3 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Identificador del perfil</h3>
                      <p>R-01-00001</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="d-flex flex-column">
                      <h3>Código del perfil</h3>
                      <p>XXXXXXXX</p>
                    </div>
                  </div>

                </div>
                <div className="row">
                  
                  <div className="col-md-3">
                    <div className="d-flex flex-column">
                      <h3>Código de la aplicación</h3>
                      <p>GAM</p>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Castellano)</h3>
                      <p>Perfil de consulta</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Euskera)</h3>
                      <p>Kontsulta profila</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Fecha de alta</h3>
                      <p>01/02/2023</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex flex-column">
                      <h3>Fecha de baja</h3>
                      <p>17/05/2023</p>
                    </div>
                  </div>
                </div>

                <div className="inner-card-table">
                  <div className="row mt-3 without-border border-0">
                    <h3 htmlFor="tablePermisos" className="label-darker text-uppercase mb-2">Grupos de permisos asignados</h3>
                    <PaginatorLabel />
                    <DataTable  value={gruposPermisos}
                                size="normal"
                                stripedRows
                                removableSort
                                id="tablePermisos"
                                filtermode="contains"
                                filterDisplay="row"
                              
                                emptyMessage="No se han encontrado resultados"
                                selectionMode="none"
                                disabled={true}
                                className="p-datatable-disabled"

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
              

              </form>

            </div>
          </div>
        </Card>

        <Toast ref={toast} position="top-center" className="inner-toast"/>

      </section>
    </>
  )
}

export default PerfilesVer
