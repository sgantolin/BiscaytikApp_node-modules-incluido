import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { ElementosService } from '../../services/ElementosService';

function CatalogoAplicacionesElementos() {
  
  //tabla datos
  const [elementos, setElementos] = useState([]);
  //seleccionar fila
  const [selectedElemento, setSelectedElemento] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
      ElementosService.getElementos().then(data => setElementos(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');

  //botones tabla navegacion para poder maquetar
  const navigate = useNavigate();
  
  const handleButtonCrearElemento = () => {
    navigate('/catalogo-aplicaciones/elementos-de-aplicacion/crear-elemento');
  };
  const handleButtonEditar = () => {
    navigate('/catalogo-aplicaciones/elementos-de-aplicacion/editar-elemento');
  };
  const handleButtonVer = () => {
    navigate('/catalogo-aplicaciones/elementos-de-aplicacion/ver-elemento');
  };

  //acciones tabla
  const actionsBodyTemplate = (elementos) => {
    //se tendria que pintar distintos return si esta de baja o no
    if( elementos.estado === "Alta"){
      return (
        <>
          <Button onClick={handleButtonVer}  icon="fa-regular fa-eye" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Ver" tooltipOptions={{ position: 'bottom' }}/>
          <Button onClick={handleButtonEditar}  icon="fa-regular fa-pen" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Editar" tooltipOptions={{ position: 'bottom' }}/>
          <Button onClick={showDialog}  icon="fa-regular fa-trash-can" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Eliminar" tooltipOptions={{ position: 'bottom' }}/>
        </>
      );
    }else{
      return (
        <>
          <Button onClick={handleButtonVer} icon="fa-regular fa-eye" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Ver" tooltipOptions={{ position: 'bottom' }} />
        </>
      );
    }
  
  };

  //variables y funciones para exportar la tabla en csv, excel y pdf
  const dt = useRef(null);

  const cols = [
    { field: 'identificador', header: 'Id' },
    { field: 'nombreES', header: 'Nombre' },
    { field: 'tipo', header: 'Tipo' },
    { field: 'padre', header: 'Padre' },
    { field: 'estado', header: 'Estado' },
  ];


  const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

  const exportCSV = (selectionOnly) => {
    if (dt.current) {
      dt.current.exportCSV({ selectionOnly });
    }
  };

  const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
              const doc = new jsPDF.default(0, 0);

              doc.autoTable(exportColumns, elementos);
              doc.save('elementos.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(elementos);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'elementos');
      });
  };

  const saveAsExcelFile = (buffer, fileName) => {
      import('file-saver').then((module) => {
          if (module && module.default) {
              let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
              let EXCEL_EXTENSION = '.xlsx';
              const data = new Blob([buffer], {
                  type: EXCEL_TYPE
              });

              module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
      });
  };

  //funciones y boton el modal de confirmacion de eliminar
  const [visible, setVisible] = useState(false);
  const [eliminarExitoso, setEliminarExitoso] = useState(true);
  //toast eliminar
  const toast = useRef(null);

  const showDialog = () => {
    setVisible(true);
  }

  const hideDialog = () => {
    setVisible(false);
  }

  const eliminarBtn = () => {

    if(eliminarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El elemento ha sido eliminado correctamente.'
                        });
      setEliminarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido eliminar el elemento seleccionado.`
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

  //funciones y boton del modal de vista arbol
  const [visible2, setVisible2] = useState(false);

  const showDialog2 = () => {
    setVisible2(true);
  }
  const hideDialog2 = () => {
    setVisible2(false);
  }

  const footerContent2 = (
    <Button label="Cerrar" onClick={() => hideDialog2()} className="p-button-primary" />
  );
  //fin funciones y boton del modal de vista arbol

//opciones del splitbutton
const options = [
  { label: 'PDF', command: exportPdf },
  { label: 'CSV', command: () => exportCSV(false) },
  { label: 'XLS', command: exportExcel },
];

const splitButtonRef = useRef(null);

const handleSplitButtonClick = () => {
  splitButtonRef.current && splitButtonRef.current.toggle();
};

const handleOptionSelect = (option) => {
  // Manejar la selección de la opción aquí
  console.log('Opción seleccionada:', option.label);
  splitButtonRef.current && splitButtonRef.current.toggle();
};
  
  //funciones volver a la pag anterior
  

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones volver a la pag anterior

  //estado tabla template
  const estadoBodyTemplate = (elementos) => {
    if(elementos.estado === "Alta"){
      return <span className="p-tag p-tag-success">Alta</span>;
    }else{
      return <span className="p-tag p-tag-danger">Baja</span>;
    }
  };


  //boton vista arbol
  const handleArbolBtn = () => {
    {/*Aqui se hara la lógica para mostrar la vista o dialog con la info en arbol*/}
    showDialog2();
  };

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 pb-5 mb-5">
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Elementos de {'"nombre aplicación"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a catálogo de aplicaciones" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            <h2 className="inner-title-card-data visually-hidden">Datos aplicación</h2>
            <div className="data">
              <div className="row card-row-border">

                <div className="col-md-3 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Identificador</h3>
                    <p>1001</p>
                  </div>
                </div>

                <div className="col-md-3 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Código</h3>
                    <p>GAM</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="d-flex flex-column">
                    <h3>Control por entidades</h3>
                    <p>Si</p>
                  </div>
                </div>

              </div>

              <div className="row">

                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Nombre (Castellano)</h3>
                    <p>Gestor Administrativo Municipal</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <h3>Nombre (Euskera)</h3>
                    <p>Udal Administrazio Kudeatzailea</p>
                  </div>
                </div>

              </div>

              <div className="row without-border">
                <div className="crear-elemento-container d-flex flex-column flex-md-row align-content-center align-items-center">
                  <h2>Elementos</h2>
                  <div className="title-button-container ms-md-auto mb-3 mb-sm-0 mt-3 mt-md-0">
                  <Button onClick={handleButtonCrearElemento} label="Crear elemento" icon="fa-regular fa-circle-plus" type="button" className="p-button-primary" />
                </div>
                </div>
              </div>

              <div id="resultados" className="results-container">

                <div className="with-results d-flex flex-column mt-4 pt-3 px-0 px-md-4">
                  <div className="top-table-buttons d-flex flex-column flex-md-row">
                    <Button onClick={handleArbolBtn} label="Ver en formato árbol" icon="fa-regular fa-list-tree" type="button" className="p-button-outlined arbol-btn mb-3 mb-md-0" />
                    <SplitButton  label="Descargar tabla"
                                icon="fa-regular fa-arrow-down-to-bracket"
                                className="p-button-outlined mb-3 ms-auto"
                                model={options}
                                ref={splitButtonRef}
                                onClick={handleOptionSelect}
                                onIconClick={handleSplitButtonClick}
                    />
                  </div>
                  
                
                  <Tooltip target=".export-buttons>button" position="bottom" />
                  <PaginatorLabel />
                  <DataTable  ref={dt}
                              value={elementos}
                              size="normal"
                              stripedRows
                              removableSort
                              filtermode="contains"
                              filterDisplay="row"
                              selectionMode="single"
                              selection={selectedElemento} 
                              onSelectionChange={(e) => setSelectedElemento(e.value)} dataKey="id" metaKeySelection={false}
                              isDataSelectable={isRowSelectable}
                              rowClassName={rowClassName}
                              paginator
                              scrollable
                              scrollHeight="655px"
                              rows={10}
                              rowsPerPageOptions={[5, 10, 25, 50, 100]}
                              paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                              tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                      <Column field="identificador" header="Identificador" sortable></Column>
                      <Column field="nombreES" header="Nombre" sortable headerStyle={{ width: '300px', minWidth: '205px'}}></Column>
                      <Column field="tipo" header="Tipo" sortable headerStyle={{ minWidth: '130px' }}></Column>
                      <Column field="padre" header="Padre" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por padre" headerStyle={{ width: '240px', minWidth: '240px' }}></Column>
                      <Column field="estado" body={estadoBodyTemplate} header="Estado" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por estado" headerStyle={{ width: '173px', minWidth: '173px' }}></Column>
                      <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ width: '167px', minWidth: '167px' }} headerClassName="centered-header"></Column>
                  
                  </DataTable>

                </div>

                
              </div>

            </div>
          </div>
        </Card>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar elemento de la aplicación</h4>
          <p className="text-center">
            
            ¿Seguro que quieres <strong>eliminar</strong> este elemento de la aplicación?
          </p>
          <p className="pb-3 text-center">
            La eliminación de este elemento de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
        </Dialog>

        <Dialog visible={visible2} onHide={hideDialog2} footer={footerContent2} className="system-dialog without-maxwidth-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 px-2 ">Vista en arbol de los elementos</h4>
          <p className="px-3">
            
            (Hay que hacer el diseño para la vista en arbol de los elementos de la aplicación. El siguiente listado es una prueba sencilla para ver como funciona el scroll vertical. y si hacemos a su vez el texto mas largo esta modal se seguira expandiendo en anchura, con lo cual dependiendo de lo que se diseñe se podria añadir una clase que limite su max-width)
            
          </p>

          <ul>
            <li>
              <p>Elemento 1</p>
              <ul>
                <li>
                  <p>Elemento 1.1</p>
                  <ul>
                    <li>
                      <p>Elemento 1.1.1</p>
                    </li>
                    <li>
                      <p>Elemento 1.1.2</p>
                    </li>
                    <li>
                      <p>Elemento 1.1.3</p>
                    </li>
                    <li>
                      <p>Elemento 1.1.4</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Elemento 1.2</p>
                </li>
                <li>
                  <p>Elemento 1.3</p>
                </li>
                <li>
                  <p>Elemento 1.4</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Elemento 2</p>
              <ul>
                <li>
                  <p>Elemento 2.1</p>
                  <ul>
                    <li>
                      <p>Elemento 2.1.1</p>
                    </li>
                    <li>
                      <p>Elemento 2.1.2</p>
                    </li>
                    <li>
                      <p>Elemento 2.1.3</p>
                    </li>
                    <li>
                      <p>Elemento 2.1.4</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Elemento 2.2</p>
                </li>
                <li>
                  <p>Elemento 2.3</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Elemento 3</p>
              <ul>
                <li>
                  <p>Elemento 3.1</p>
                </li>
              </ul>
            </li>
          </ul>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default CatalogoAplicacionesElementos
