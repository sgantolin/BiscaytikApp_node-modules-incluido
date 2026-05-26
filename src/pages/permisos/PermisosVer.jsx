import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';

// import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { GruposPermisosService } from "../../services/GruposPermisosService";
import { PerfilesService } from "../../services/PerfilesService";


function PermisosVer() {

  const navigate = useNavigate();

  //tabla datos usuarios para el dialog grupos asociados
  const [grupos, setGrupos] = useState([]);

  //tabla datos usuarios para el dialog perfiles asociados
  const [perfiles, setPerfiles] = useState([]);

  //seleccionar fila
  //const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
      GruposPermisosService.getGruposPermisos().then(data => setGrupos(data));
      PerfilesService.getPerfiles().then(data => setPerfiles(data));
  }, []); 


  const toast = useRef(null);

  const handleVolverBtn = () => {
    window.history.back();
  };

  //dialog grupos asociados
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cerrar" onClick={() => hideDialog()} className="p-button-primary" />    </div>
  );
  const handleGruposAsociadosBtn = () => {
    setVisible(true);
  };
  //fin dialog grupos asociados
  

  //dialog perfiles asociados
  const [visible2, setVisible2] = useState(false);

  const hideDialog2 = () => {
    setVisible2(false);
  }

  const footerContent2 = (
    <div>
      <Button label="Cerrar" onClick={() => hideDialog2()} className="p-button-primary" />
    </div>
  );
  const handlePerfilesAsociadosBtn = () => {
    setVisible2(true);
  };
  //fin dialog perfiles asociados


  //variables y funciones para exportar la tabla en csv, excel y pdf
  const dt = useRef(null);

  const cols = [
    { field: 'id', header: 'Id' },
    { field: 'tipoIdentificacion', header: 'Tipo de identificación' },
    { field: 'nIdentificacion', header: 'Nº Identificacion' },
    { field: 'nombre', header: 'Nombre y apellidos' },
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

              doc.autoTable(exportColumns, grupos);
              doc.save('grupos.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(grupos);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'grupos');
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

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Ver permiso {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
            <Button onClick={handleVolverBtn} label="Volver a catálogo de permisos" text icon="fa-regular fa-arrow-left" type="button" className="p-button mx-1" />
              <Button onClick={() => {navigate('/permisos/editar-permiso')}} label="Editar" icon="fa-regular fa-pen" type="button" className="p-button-primary" />
            </div>
          </div>

          <div className="card-data">
            <div className="data">

              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Identificador del permiso</h3>
                      <p>P-01-00001</p>
                    </div>
                  </div>
                
                </div>

                <div className="row">

                  <div className="col-md-5 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Código de la aplicación</h3>
                      <p>GAM</p>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="d-flex flex-column">
                      <h3>Elemento de aplicación</h3>
                      <p>Formulario  de padrón municipal {">"} Habitantes</p>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <h3>Tipo de acceso</h3>
                      <p>Consulta</p>
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

                  <div className="col-md-5 mb-3 mb-md-0">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de alta</h3>
                      <p>04/10/2022</p>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="d-fle4 flex-column">
                      <h3>Fecha de baja</h3>
                      <p>12/04/2023</p>
                    </div>
                  </div>

                </div>


                  <div className="title-button-container d-flex flex-column flex-md-row mt-4">
                    <Button onClick={handleGruposAsociadosBtn} label="Grupos asociados" type="button" className="p-button-outlined me-0 me-md-3 mb-3 mb-md-0" />
                    <Button onClick={handlePerfilesAsociadosBtn} label="Perfiles asociados" type="button" className="p-button-outlined me-0 me-md-auto" />
                  </div>
                
              </form>
            </div>
          </div>
        </Card>

        

        <Dialog visible={visible} onHide={hideDialog} maximizable footer={footerContent} className="system-dialog without-maxwidth-dialog">
          <h4 className="pb-4">Grupos asociados</h4>
              
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
                              value={grupos}
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
                      <Column field="codigo" header="Identificador" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ width: '220px', minWidth: '220px' }}></Column>
                      <Column field="nombreGrupo" header="Nombre del grupo" sortable headerStyle={{ minWidth: '280px' }}></Column>
                  
                  </DataTable>
              </div>
        </Dialog>

        <Dialog visible={visible2} onHide={hideDialog2} maximizable footer={footerContent2} className="system-dialog without-maxwidth-dialog">
          <h4 className="pb-4">Perfiles asociados</h4>
              
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
                              value={perfiles}
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
                      <Column field="codigo" header="Identificador" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ width: '220px', minWidth: '220px' }}></Column>
                      <Column field="nombrePerfil" header="Nombre del perfil" sortable headerStyle={{ minWidth: '280px' }}></Column>
                  
                  </DataTable>
              </div>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        
      </section>
    </>
  )
}

export default PermisosVer
