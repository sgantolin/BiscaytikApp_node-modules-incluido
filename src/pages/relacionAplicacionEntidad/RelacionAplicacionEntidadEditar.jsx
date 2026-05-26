import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';

import { EntidadesService } from '../../services/EntidadesService';

function RelacionAplicacionEntidadEditar() {


  //tabla datos
  const [entidades, setEntidades] = useState([]);

  //seleccionar fila
  const [selectedEntidad, setSelectedEntidad] = useState(null);


  useEffect(() => {
    EntidadesService.getEntidades().then(data => setEntidades(data));
  }, []);


  //funciones botones guardar
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La relación entre aplicación y entidades se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `La relación entre aplicación y entidades no se ha podido guardar correctamente.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar

  //funciones y boton el modal de confirmacion de eliminar
  const [visible, setVisible] = useState(false);
  const [eliminarExitoso, setEliminarExitoso] = useState(true);

  const showDialog = () => {
    setVisible(true);
  }

  const hideDialog = () => {
    setVisible(false);
  }

  const eliminarBtn = () => {

    if(eliminarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'La relación ha sido eliminada correctamente.'
                        });
      setEliminarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido eliminar la relación seleccionada.`
                          });
      setEliminarExitoso(true);
    }

    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog()} text />
      <Button label="Eliminar" onClick={() => eliminarBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin funciones y boton el modal de confirmacion de eliminar

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">
          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Editar relación {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a catálogo de relaciones" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          <div className="card-data">
            <div className="data">
              <form action="">
                
                <div className="row card-row-border">

                  <div className="col-md-4 mb-4 mb-md-0">
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
                                selectionMode="multiple"
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

                <div className="row without-border">
                  <div className="col">
                    <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                      <Button onClick={showDialog} label="Eliminar relación" icon="fa-regular fa-trash-can" type="button" className="p-button-outlined mb-4 mb-md-0 mx-auto mx-md-0 me-md-auto" />
                      <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
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

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar relación</h4>
          <p className='px-3 text-center'>
            ¿Seguro que quieres <strong>eliminar</strong> definitivamente la relación entre aplicación y entidades seleccionada?
            <br/>
            La eliminación del registro de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default RelacionAplicacionEntidadEditar
