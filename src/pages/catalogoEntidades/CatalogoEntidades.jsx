import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';

import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

import PaginatorLabel from "../../shared/components/PaginatorLabel";

import { EntidadesService } from '../../services/EntidadesService';
import { AplicacionesService } from '../../services/AplicacionesService';


function CatalogoEntidades() {

  //radio button estado
  const [estado, setEstado] = useState(true);

  //autocomplete identificador
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
    let _items = [...Array(10).keys()];
    setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }

  const handleSelectionChange = (e) => {
    setValue(e.value);
  };

  //tabla datos
  const [entidades, setEntidades] = useState([]);
  const [aplicaciones, setAplicaciones] = useState([]);
  //seleccionar fila
  const [selectedEntidad, setSelectedEntidad] = useState(null);
  const [selectedAplicacion, setSelectedAplicacion] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
      EntidadesService.getEntidades().then(data => setEntidades(data));
      AplicacionesService.getAplicaciones().then(data => setAplicaciones(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  //botones tabla navegacion para poder maquetar
  const navigate = useNavigate();
  
  const handleButtonCrearEntidad = () => {
    navigate('/catalogo-entidades/crear-entidad');
  };
  const handleButtonEditar = () => {
    navigate('/catalogo-entidades/editar-entidad');
  };
  const handleButtonVer = () => {
    navigate('/catalogo-entidades/ver-entidad');
  };

  //opciones del splitbutton de acciones
  const optionsAcciones = [
    { label: 'Ver aplicaciones', command: () => { handleVerAplicacionesBtn() } },
  ];

  const splitButtonRefAcciones = useRef(null);

  //acciones tabla
  const actionsBodyTemplate = (aplicaciones) => {
      //se tendria que pintar distintos return si esta de baja o no
      if( aplicaciones.estado === "Alta"){
        return (
          <>
            <Button onClick={handleButtonVer} icon="fa-regular fa-eye" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Ver" tooltipOptions={{ position: 'bottom' }}/>
            <Button onClick={handleButtonEditar} icon="fa-regular fa-pen" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Editar" tooltipOptions={{ position: 'bottom' }}/>
            <Button onClick={showDialog} icon="fa-regular fa-trash-can" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Eliminar" tooltipOptions={{ position: 'bottom' }}/>
            <SplitButton
              tooltip="Más acciones" tooltipOptions={{ position: 'bottom' }}
              icon="fa-regular fa-arrow-down-to-bracket"
              className="actions-table-btn mx-1"
              model={optionsAcciones}
              ref={splitButtonRefAcciones}
            />
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
    { field: 'id', header: 'Identificador' },
    { field: 'codigo', header: 'Código' },
    { field: 'nombreES', header: 'Nombre castellano' },
    { field: 'nombreEU', header: 'Nombre euskera' },
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

              doc.autoTable(exportColumns, entidades);
              doc.save('entidades.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(entidades);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'entidades');
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

  //evento submit con scroll animado
  const handleSubmit = (e) => {
    e.preventDefault();

    //scroll animado
    setTimeout(() => {
      const targetElement = document.getElementById('resultados');
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 250; // Duración de la animación en milisegundos
  
      let start = null;
  
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      function ease(t, b, c, d) {
        t /= d;
        return c * t + b;
      }
  
      requestAnimationFrame(animation);
    }, 400);
    
    //fin scroll animado
  }

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
                            detail: 'La entidad ha sido eliminada correctamente.'
                        });
      setEliminarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido eliminar la entidad seleccionada.`
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

  //estado tabla template
  const estadoBodyTemplate = (aplicaciones) => {
    if(aplicaciones.estado === "Alta"){
      return <span className="p-tag p-tag-success">Alta</span>;
    }else{
      return <span className="p-tag p-tag-danger">Baja</span>;
    }
  };


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
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0">
        <div className="d-flex flex-column flex-sm-row">
          <h1 className="section-title">Catálogo de entidades</h1>
          <div className="title-button-container ms-sm-auto mb-3 mb-sm-0">
            <Button onClick={handleButtonCrearEntidad} label="Crear entidad" icon="fa-regular fa-circle-plus" type="button" className="p-button-primary" />
          </div>
        </div>
        
        {/* <p className="section-subtitle">
          El catálogo de entidades permite gestionar las entidades que aparecen en los mantenimientos de control de acceso y seguridad.
        </p> */}
        
        <div className="search-container">
            <Card className="search-card">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-5 col-lg-5 col-xl-2 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete id="identificador" placeholder="Identificador de la entidad" className="order-1" aria-describedby="identificador-entidad" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                      <label htmlFor="identificador" className="order-0">Identificador</label>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-7 col-xl-4 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete id="codigoEntidad" 
                                    className="order-1" 
                                    placeholder="Añadir o seleccionar código de la entidad" 
                                    aria-describedby="codigo-entidad" 
                                    value={value} 
                                    suggestions={items} 
                                    completeMethod={search} 
                                    onChange={handleSelectionChange} 
                                    dropdown />
                      <label htmlFor="codigoEntidad" className="order-0">Código</label>
                      <p className="errorMsg order-2">Selecciona una opción</p>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-9 col-xl-4 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreEntidad" placeholder="Nombre de la entidad" aria-describedby="nombre-de-entidad" className="order-1"/>
                      <label htmlFor="nombreEntidad" className="order-0">Nombre</label>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-3 col-xl-2 d-flex flex-column mb-3">
                    <div className="d-flex order-1 mt-1" id="radioEstado">
                      <div className="d-flex align-items-center">
                          <RadioButton inputId="estadoAlta" name="alta" value="alta" onChange={(e) => setEstado(e.value)} checked={estado === true} />
                          <label htmlFor="estadoAlta">Alta</label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                          <RadioButton inputId="estadoBaja" name="baja" value="baja" onChange={(e) => setEstado(e.value)} checked={estado === false} />
                          <label htmlFor="estadoBaja">Baja</label>
                      </div>
                    </div>
                    <label htmlFor="radioEstado" className="mb-2 order-0">Estado</label>
                  </div>

                </div>
                
                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
                  <Button label="Limpiar" type="reset" text className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                  <Button label="Buscar" type="submit" className="p-button-primary mb-0 mb-sm-0 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>
                
              </form>
          </Card>
        </div>

        <div id="resultados" className="results-container mt-4 pt-2 pb-5 mb-5">
          
          {/*DIV a mostrar si no se encuentran resultados */}
          <div className="without-results d-none">
            <div className="dialog-advise no-results-msg d-flex align-items-center mb-4">
              <i className="fa-regular fa-circle-info me-3"></i>
              No se ha encontrado ningún resultado con los parámetros especificados.
            </div>
          </div>
          {/*DIV a mostrar si se encuentran resultados */}
          <div className="with-results d-flex flex-column">
          <SplitButton  label="Descargar tabla"
                          icon="fa-regular fa-arrow-down-to-bracket"
                          className="p-button-outlined mb-3 ms-auto"
                          model={options}
                          ref={splitButtonRef}
                          onClick={handleOptionSelect}
                          onIconClick={handleSplitButtonClick}
            />
            <Card className="table-container">
              <Tooltip target=".export-buttons>button" position="bottom" />
              <PaginatorLabel />
              <DataTable  value={entidades}
                          size="normal"
                          stripedRows
                          removableSort
                          selectionMode="single"
                          selection={selectedEntidad} 
                          onSelectionChange={(e) => setSelectedEntidad(e.value)} dataKey="id" metaKeySelection={false}
                          isDataSelectable={isRowSelectable}
                          rowClassName={rowClassName}
                          paginator
                          scrollable
                          scrollHeight="655px"
                          rows={10}
                          rowsPerPageOptions={[5, 10, 25, 50, 100]}
                          paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                          tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                  <Column field="id" header="Identificador" sortable headerStyle={{ width: '145px', minWidth: '135px'}}></Column>
                  <Column field="codigo" header="Código" sortable headerStyle={{ width: '150px', minWidth: '150px'}}></Column>
                  <Column field="nombreES" header="Nombre castellano" sortable headerStyle={{ width: '320px', minWidth: '200px' }}></Column>
                  <Column field="nombreEU" header="Nombre euskera" sortable headerStyle={{ width: '320px', minWidth: '200px' }}></Column>
                  <Column field="estadoAlta" body={estadoBodyTemplate} header="Estado" sortable></Column>
                  <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ width: '210px', minWidth: '210px' }} headerClassName="centered-header"></Column>
              
              </DataTable>

            </Card>
          </div>
        </div>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar entidad</h4>
          <p className='px-3 text-center'>
            ¿Seguro que quieres <strong>eliminar</strong> definitivamente la entidad seleccionada?
            <br/>
            La eliminación del registro de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
        </Dialog>


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

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default CatalogoEntidades
