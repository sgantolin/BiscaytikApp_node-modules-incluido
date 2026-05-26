import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { AutoComplete } from "primereact/autocomplete";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import PaginatorLabel from "../../shared/components/PaginatorLabel";

import { EntidadesService } from '../../services/EntidadesService';

function RelacionAplicacionEntidadCrear() {

  //dropdown autocomplete aplicacion
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete aplicacion
  
  //mostrar container con tabla
  const [mostrarContainer, setMostrarContainer] = useState(false);
  const [aplicacion, setAplicacion] = useState('');

  const mostrarToDisplayContainer = () => {
    if (aplicacion !== '') {
      setMostrarContainer(true);
    } else {
      setMostrarContainer(false);
    }
  };
  //FIN mostrar container con tabla

  const handleTipoListadoChange = (e) => {
    setAplicacion(e.value);
    mostrarToDisplayContainer();
  };

  //tabla datos
  const [entidades, setEntidades] = useState([]);

  //seleccionar fila
  const [selectedEntidad, setSelectedEntidad] = useState(null);


  useEffect(() => {
    EntidadesService.getEntidades().then(data => setEntidades(data));
    mostrarToDisplayContainer();
  }, [aplicacion]);


  //funciones botones guardar
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La relación entre aplicación y entidades se ha creado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `La relación entre aplicación y entidades no se ha podido crear correctamente.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Crear relación</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a catálogo de relaciones" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
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

                </div>

                {mostrarContainer && (
                  <div id="toDisplayContainer" className="row">

                    <div className="col inner-card-table">
                      <label htmlFor="tableEntidades">Seleccionar entidades</label>
                      <PaginatorLabel />
                      <DataTable  value={entidades}
                                  size="normal"
                                  stripedRows
                                  removableSort
                                  id="tableEntidades"
                                
                                  emptyMessage="No se han encontrado resultados"
                                  selectionMode="multiple"
                                  selection={selectedEntidad} 
                                  onSelectionChange={(e) => setSelectedEntidad(e.value)} dataKey="id" metaKeySelection={false}
                                  paginator
                                  scrollable
                                  scrollHeight="410px"
                                  rows={5}
                                  rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                  paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                                  tableStyle={{ minWidth: '20rem', fontSize: '15px' }}>
                          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                          <Column field="nombreES" header="Entidades" sortable headerStyle={{ minWidth: '350px' }}></Column>
                      </DataTable>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col">
                    <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                      <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                      <Button onClick={handleGuardarBtn} label="Crear" type="button" className="p-button-primary btn-loading">
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

export default RelacionAplicacionEntidadCrear
