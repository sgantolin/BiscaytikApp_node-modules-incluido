import { useState, useRef, useEffect } from "react";

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';
import { TreeSelect } from 'primereact/treeselect';

// import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { PermisosService } from "../../services/PermisosService";
import { ElementsTreeService } from '../../services/ElementsTreeService';


function CatalogoAplicacionesElementosEditar() {

  //tabla datos usuarios para el dialog permisos asociados
  const [permisos, setPermisos] = useState([]);

  //tree select
  const [elements, setElements] = useState(null);
  const [selectedElementsKeys, setSelectedElementsKeys] = useState(null);

  useEffect(() => {
      ElementsTreeService.getElementsTreeNodes().then((data) => setElements(data));
      PermisosService.getPermisos().then(data => setPermisos(data));
  }, []);


  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El elemento se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `El elemento no se ha podido guardar correctamente.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior

  //dialog ver permisos asociados
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cerrar" onClick={() => hideDialog()} className="p-button-primary" />
    </div>
  );
  const handlePermisosAsociadosBtn = () => {
    setVisible(true);
  };
  //fin dialog ver permisos asociados

  //dialog2 crear permisos asociados
  const [visible2, setVisible2] = useState(false);
  const [guardarExitosoDialog, setGuardarExitosoDialog] = useState(true);
  const [crearPermisosExitoso, setCrearPermisosExitoso] = useState(true);
  
  const hideDialog2 = () => {
    setVisible2(false);
  }
  const guardarBtn = () => {

    if(guardarExitosoDialog) {
      toast.current.show({  severity: 'success',
                            detail: 'El elemento se ha creado correctamente.'
                        });
      setGuardarExitosoDialog(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `El elemento no se ha podido crear correctamente.`
                          });
      setGuardarExitosoDialog(true);
    }

    setVisible2(false);
  }

  const crearPermisosBtn = () => {

    if(crearPermisosExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'Los permisos asociados se han creado correctamente.'
                        });
      setCrearPermisosExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `Los permisos asociados no se han podido crear correctamente.`
                          });
      setCrearPermisosExitoso(true);
    }

    setVisible2(false);
  }

  const footerContent2 = (
    <div>
      <Button label="Guardar sin permisos" onClick={() => guardarBtn()} text />
      <Button label="Crear permisos" onClick={() => crearPermisosBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  const handleCrearPermisosAsociadosBtn = () => {
    setVisible2(true);
  };
  //fin dialog2 crear permisos asociados


  //variables y funciones para exportar la tabla en csv, excel y pdf
  const dt = useRef(null);

  const cols = [
    { field: 'codigo', header: 'Código permiso' },
    { field: 'aplicacion', header: 'Código aplicación' },
    { field: 'nombrePermiso', header: 'Nombre permiso' },
    { field: 'tipoAcceso', header: 'Tipo de acceso' },
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

              doc.autoTable(exportColumns, permisos);
              doc.save('Permisos.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(permisos);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'Permisos');
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


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-md-row">
            <h1 className="title-card-data my-3 my-md-0">Editar elemento de {'"nombre aplicación"'}</h1>
            {/* <div className="title-button-container ms-sm-auto">
              <Button onClick={() => {navigate('/permisos')}} icon="fa-regular fa-arrow-left" label="Volver a catálogo de permisos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div> */}
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Identificador</h3>
                      <p>E-01-000001</p>
                    </div>
                  </div>
                
                </div>

                <div className="row">

                  <div className="col-md-5">
                    <div className="d-flex flex-column">
                      <h3>Tipo</h3>
                      <p>Usuario</p>
                    </div>
                  </div>

                </div>

                <div className="row without-border mt-3">

                  <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreElementoEs" placeholder="Nombre del elemento en castellano" aria-describedby="nombre-del-elemento-en-castellano" className="order-1"/>
                      <label htmlFor="nombreElementoEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-2">
                    <div className="d-flex flex-column">
                      <InputText id="nombreElementoEu" placeholder="Nombre del elemento en euskera" aria-describedby="nombre-del-elemento-en-euskera" className="order-1"/>
                      <label htmlFor="nombreElementoEu" className="order-0">Nombre (Euskera)</label>
                    </div>
                  </div>

                </div>

                <div className="row without-border mt-2">

                  <div className="col-md-12 mb-2">
                    <div className="d-flex flex-column">
                    <TreeSelect value={selectedElementsKeys} 
                                onChange={(e) => setSelectedElementsKeys(e.value)} 
                                options={elements} 
                                metaKeySelection={false} 
                                className="order-1"
                                selectionMode="checkbox" 
                                display="chip"
                                id="padre"
                                placeholder="Seleccionar padre"/>
                    <label htmlFor="padre" className="order-0">Padre</label>
                    <p className="errorMsg order-2">Es necesario seleccionar un padre</p>
                    </div>
                  </div>

                </div>

                <div className="row without-border">
                  <div className="col title-button-container d-flex flex-column flex-md-row mt-4">
                    {/* Hay que ocultar uno u otro boton dependiendo de si tiene o no permisos asociados */}
                    <Button onClick={handlePermisosAsociadosBtn} label="Ver permisos asociados" type="button" className="p-button-outlined me-0 me-md-3" />
                    <Button onClick={handleCrearPermisosAsociadosBtn} label="Crear permisos asociados" type="button" className="p-button-outlined" />
                  </div>
                </div>
                

                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 pt-md-4">
                  <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                  <Button onClick={handleGuardarBtn} label="Guardar" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>
                
              </form>
            </div>
          </div>
        </Card>

        

        <Dialog visible={visible} onHide={hideDialog} maximizable footer={footerContent} className="system-dialog without-maxwidth-dialog">
          <h4 className="pb-4">Permisos asociados a {'"nombre elemento"'}</h4>
              
              <div className="d-flex flex-column mb-2">
                  <SplitButton  label="Descargar tabla"
                              icon="fa-regular fa-arrow-down-to-bracket"
                              className="p-button-outlined mb-3 ms-auto"
                              model={options}
                              ref={splitButtonRef}
                              onClick={handleOptionSelect}
                              onIconClick={handleSplitButtonClick}
                  />
                  {/* <PaginatorLabel /> */}
                  <DataTable  ref={dt}
                              value={permisos}
                              size="normal"
                              stripedRows
                              removableSort

                              // filtermode="contains"
                              // filterDisplay="row"

                              emptyMessage="No se han encontrado resultados"
                              selectionMode="single"
                              // paginator
                              // scrollable
                              // scrollHeight="670px"
                              // rows={5}
                              // rowsPerPageOptions={[5, 10, 25, 50, 100]}
                              // paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                              tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                      <Column field="codigo" header="Código permiso" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ minWidth: '170px' }}></Column>
                      <Column field="aplicacion" header="Código aplicación" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ minWidth: '170px' }}></Column>
                      <Column field="nombrePermiso" header="Nombre" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ width: '320px', minWidth: '220px' }}></Column>
                      <Column field="tipoAcceso" header="Tipo" sortable headerStyle={{ minWidth: '180px' }}></Column>
                  
                  </DataTable>
              </div>
        </Dialog>

        <Dialog visible={visible2} onHide={hideDialog2} footer={footerContent2} className="system-dialog without-maxwidth-dialog more-width">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Crear permisos asociados</h4>
          <p className='px-3 text-center'>
            Estas creando un elemento de tipo Formulario.
            <br/>
            ¿Deseas añadir sus <strong>permisos</strong> asociados?
          </p>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default CatalogoAplicacionesElementosEditar
