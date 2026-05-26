import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { EntidadesService } from '../../services/EntidadesService';

function RelacionAplicacionEntidadVer() {

  const navigate = useNavigate();

  //tabla datos
  const [entidades, setEntidades] = useState([]);

  //seleccionar fila
  const [selectedEntidad, setSelectedEntidad] = useState(null);

  useEffect(() => {
    EntidadesService.getEntidades().then(data => setEntidades(data));
  }, []);

  const handleVolverBtn = () => {
    window.history.back();
  };

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Ver relación {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
            <Button onClick={handleVolverBtn} label="Volver a catálogo de relaciones" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
            <Button onClick={() => {navigate('/relacion-aplicacion-entidad/editar-relacion')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>
          <div className="card-data">
            <div className="data">
              <form action="">
                 
                <div className="row card-row-border">

                  <div className="col-md-4">
                    <div className="d-flex flex-column">
                      <h3>Código de la aplicación</h3>
                      <p>GAM</p>
                    </div>
                  </div>

                </div>

                <div id="toDisplayContainer" className="row without-border mt-3">

                  <div className="col inner-card-table">
                    <label htmlFor="tableEntidades" className="label-darker text-uppercase mb-2">Entidades asignadas</label>
                    <DataTable  value={entidades}
                                size="normal"
                                stripedRows
                                removableSort
                                id="tableEntidades"
                              
                                emptyMessage="No se han encontrado resultados"
                                selectionMode="none"
                                disabled={true}
                                className="p-datatable-disabled"

                                selection={selectedEntidad} 
                                onSelectionChange={(e) => setSelectedEntidad(e.value)} dataKey="id" metaKeySelection={false}
                               
                                scrollable
                                scrollHeight="410px"
                                
                                tableStyle={{ minWidth: '20rem', fontSize: '15px' }}>
                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="nombreES" header="Entidades" sortable headerStyle={{ minWidth: '350px' }}></Column>
                    </DataTable>
                  </div>
                </div>

               

              </form>
              
            </div>
          </div>
        </Card>
        
      </section>
    </>
  )
}

export default RelacionAplicacionEntidadVer
