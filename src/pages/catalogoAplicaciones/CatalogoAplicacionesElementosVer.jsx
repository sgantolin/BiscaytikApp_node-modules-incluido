import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';

import { PermisosService } from "../../services/PermisosService";


function CatalogoAplicacionesElementosVer() {

  const navigate = useNavigate();

  //tabla datos usuarios para el dialog permisos asociados
  const [permisos, setPermisos] = useState([]);



  useEffect(() => {
      PermisosService.getPermisos().then(data => setPermisos(data));
  }, []);


  //funciones boton volver a la pag anterior
  const toast = useRef(null);

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botonvolver a la pag anterior

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
            <h1 className="title-card-data my-3 my-md-0">Ver elemento {'"nombre elemento"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
              <Button onClick={handleVolverBtn} label="Volver a elementos" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
              <Button onClick={() => {navigate('/catalogo-aplicaciones/elementos-de-aplicacion/editar-elemento')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Identificador</h3>
                      <p>E-01-000001</p>
                    </div>
                  </div>
                
                </div>

                <div className="row">

                  <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Castellano)</h3>
                      <p>Formulario de padrón {">"} Habitantes</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                <div className="col-md-12">
                    <div className="d-flex flex-column">
                      <h3>Nombre (Euskera)</h3>
                      <p>EU_Formulario de padrón {">"} Habitantes</p>
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

                <div className="row">

                  <div className="col-md-5">
                    <div className="d-flex flex-column">
                      <h3>Padre</h3>
                      <p>Menú de habitantes</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-5 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Fecha alta</h3>
                      <p>30/05/2022</p>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="d-flex flex-column">
                      <h3>Fecha baja</h3>
                      <p>12/03/2023</p>
                    </div>
                  </div>

                </div>

                <div className="title-button-container d-flex flex-column flex-md-row mt-4">
                  {/* Hay que ocultar uno u otro boton dependiendo de si tiene o no permisos asociados */}
                  <Button onClick={handlePermisosAsociadosBtn} label="Ver permisos asociados" type="button" className="p-button-outlined me-0 me-md-3" />
                  <Button onClick={handlePermisosAsociadosBtn} label="No hay permisos asociados" disabled type="button" className="p-button-primary" />
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
                      <Column field="nombrePermiso" header="Nombre" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ width: '420px', minWidth: '220px' }}></Column>
                      <Column field="tipoAcceso" header="Tipo" sortable headerStyle={{ minWidth: '180px' }}></Column>
                  
                  </DataTable>
              </div>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default CatalogoAplicacionesElementosVer
