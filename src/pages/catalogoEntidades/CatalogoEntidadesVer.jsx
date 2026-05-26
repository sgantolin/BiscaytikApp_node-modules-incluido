import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';


import { AplicacionesService } from '../../services/AplicacionesService';

function CatalogoEntidadesVer() {
  
  const navigate = useNavigate();

  const handleVolverBtn = () => {
    window.history.back();
  };

  //tabla datos
  const [aplicaciones, setAplicaciones] = useState([]);
  //seleccionar fila
  const [selectedAplicacion, setSelectedAplicacion] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
      AplicacionesService.getAplicaciones().then(data => setAplicaciones(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');

  //dialog ver aplicaciones
  const [visible2, setVisible2] = useState(false);

  const hideDialog2 = () => {
    setVisible2(false);
  }

  const footerContent2 = (
    <div>
      <Button label="Cerrar" onClick={() => hideDialog2()} className="p-button-primary" />
    </div>
  );
  const handleVerAplicacionesBtn = () => {
    setVisible2(true);
  };
  //fin dialog ver aplicaciones


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-md-row">
            <h1 className="title-card-data my-3 my-md-0">Ver entidad {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
            <Button onClick={handleVolverBtn} label="Volver a catálogo de entidades" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
              <Button onClick={() => {navigate('/catalogo-entidades/editar-entidad')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Identificador</h3>
                      <p>2001</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Código</h3>
                      <p>Mundaka</p>
                    </div>
                  </div>
                
                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Castellano)</h3>
                      <p>Formulario de padrón {">"} Habitantes</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Euskera)</h3>
                      <p>Formulario de padrón {">"} Habitantes</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de alta</h3>
                      <p>04/10/2022</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de baja</h3>
                      <p>12/04/2023</p>
                    </div>
                  </div>

                </div>

                <div className="col title-button-container d-flex flex-column flex-md-row mt-4">
                  <Button onClick={handleVerAplicacionesBtn} label="Ver aplicaciones" type="button" className="p-button-outlined me-0 me-md-auto" />
                </div>

                             
              </form>
            </div>
          </div>
        </Card>

        <Dialog visible={visible2} onHide={hideDialog2} maximizable footer={footerContent2} className="system-dialog without-maxwidth-dialog">
          <h4 className="pb-4">Aplicaciones de {'"nombre entidad"'}</h4>
              
              <div className="d-flex flex-column mb-2">
                  {/* <PaginatorLabel /> */}
                  <DataTable  
                              value={aplicaciones}
                              size="normal"
                              stripedRows
                              removableSort

                              // filtermode="contains"
                              // filterDisplay="row"

                              emptyMessage="No se han encontrado resultados"
                              selectionMode="none"
                              disabled={true}
                              className="p-datatable-disabled"
                              selection={selectedAplicacion} 
                              onSelectionChange={(e) => setSelectedAplicacion(e.value)} dataKey="id" metaKeySelection={false}
                              isDataSelectable={isRowSelectable}
                              rowClassName={rowClassName}
                              // paginator
                              // scrollable
                              scrollHeight="470px"
                              // rows={5}
                              // rowsPerPageOptions={[5, 10, 25, 50, 100]}
                              // paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                              tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                      <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                      <Column field="nombreES" header="Aplicaciones" sortable headerStyle={{ minWidth: '280px' }}></Column>
                  
                  </DataTable>
              </div>
        </Dialog>
        
      </section>
    </>
  )
}

export default CatalogoEntidadesVer
