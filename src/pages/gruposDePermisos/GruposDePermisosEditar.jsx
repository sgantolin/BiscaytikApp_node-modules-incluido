import { useState, useEffect, useRef } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { SplitButton } from 'primereact/splitbutton';

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { PermisosService } from '../../services/PermisosService';
import { PerfilesService } from "../../services/PerfilesService";


function GruposDePermisosEditar() {
  
  //tabla datos
  const [permisos, setPermisos] = useState([]);
  const [perfiles, setPerfiles] = useState([]);

  //seleccionar fila
  const [selectedPermiso, setSelectedPermiso] = useState(null);

  //carga datos tabla
  useEffect(() => {
      PermisosService.getPermisos().then(data => setPermisos(data));
      PerfilesService.getPerfiles().then(data => setPerfiles(data));
  }, []);

  const isSelectable = (data) => data.estado != 'Baja';
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  
  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'El registro se ha guardado correctamente.'
                        });
      setGuardarExitoso(false);
      setVisible(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido guardar el registro correctamente.`
                          });
      setGuardarExitoso(true);
      setVisible(false);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior


  //dialog perfiles asociados
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cerrar" onClick={() => hideDialog()} className="p-button-primary"/>
    </div>
  );

  const handlePerfilesAsociadosBtn = () => {
    setVisible(true);
  };
  //fin dialog entidad

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

              doc.autoTable(exportColumns, perfiles);
              doc.save('perfiles.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(perfiles);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'perfiles');
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
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Editar grupo {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a grupos de permisos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            <div className="data">
              <form action="">
                <div className="row card-row-border">

                  <div className="col-md-3 mb-4 mb-md-0">
                    <div className="d-flex flex-column">
                      <h3>Identificador del grupo</h3>
                      <p>G-01-00001</p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="d-flex flex-column">
                      <h3>Código de la aplicación</h3>
                      <p>GAM</p>
                    </div>
                  </div>

                </div>

                <div className="row without-border mt-3">
                  <div className="col-md-6 col-lg-3 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="codigoGrupo" placeholder="Código del grupo" value="CGP" aria-describedby="codigo-del-grupo" className="order-1"/>
                        <label htmlFor="codigoGrupo" className="order-0">Código del grupo</label>
                      </div>
                    </div>
                </div>

                <div className="row without-border">

                  <div className="col-lg-6 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombreGrupoEs" placeholder="Nombre del grupo en Castellano" value="Formulario de padrón municipal > Habitantes" aria-describedby="nombre-del-grupo-en-castellano" className="order-1"/>
                        <label htmlFor="nombreGrupoEs" className="order-0">Nombre (Castellano)</label>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="d-flex flex-column">
                        <InputText id="nombreGrupoEu" placeholder="Nombre del grupo en Euskera" value="Formulario de padrón municipal > Habitantes" aria-describedby="nombre-del-grupo-en-euskera" className="order-1"/>
                        <label htmlFor="nombreGrupoEu" className="order-0">Nombre (Euskera)</label>
                      </div>
                    </div>

                </div>

                <div className="row without-border mt-2 mb-4">
                  <div className="col title-button-container d-flex flex-column flex-md-row">
                    <Button onClick={handlePerfilesAsociadosBtn} label="Perfiles asociados" type="button" className="p-button-outlined me-0 me-md-3" />
                  </div>
                </div>

                {/* Esta tabla solo se muestra si se ha seleccionado una aplicación */}
                <div className="inner-card-table">
                  <div className="row mt-2 without-border border-0">
                    <label htmlFor="tablePermisos">Permisos asignados</label>
                    <PaginatorLabel />
                    <DataTable  value={permisos}
                                size="normal"
                                stripedRows
                                removableSort
                                id="tablePermisos"
                                filtermode="contains"
                                filterDisplay="row"
                              
                                emptyMessage="No se han encontrado resultados"
                                selectionMode="single"
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
                        <Column field="codigo" header="Código permiso" sortable headerStyle={{ minWidth: '170px', width: '170px' }}></Column>
                        <Column field="nombrePermiso" header="Nombre permiso" sortable headerStyle={{ minWidth: '350px' }}></Column>
                        <Column field="tipoAcceso" header="Tipo de acceso" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por tipo de acceso" headerStyle={{ minWidth: '230px' }}></Column>
                        <Column field="elemento" header="Elemento" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por elemento" headerStyle={{ minWidth: '200px' }}></Column>
                    </DataTable>
                  </div>
                </div>

                
                

                <div className="row mt-4 without-border">
                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
                    <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                    <Button onClick={handleGuardarBtn} label="Guardar" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
                      <div className="container-bar">
                        <div className="bar"></div>
                      </div>
                    </Button>
                  </div>
                </div>

              </form>

            </div>
          </div>
        </Card>

        <Dialog visible={visible} onHide={hideDialog} maximizable footer={footerContent} className="system-dialog without-maxwidth-dialog">
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

                        paginator
                        scrollable
                        scrollHeight="670px"
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                        tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                <Column field="codigo" header="Código perfil" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador" headerStyle={{ width: '220px', minWidth: '220px' }}></Column>
                <Column field="nombrePerfil" header="Nombre del perfil" sortable headerStyle={{ minWidth: '280px' }}></Column>
            
            </DataTable>
          </div>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>

      </section>
    </>
  )
}

export default GruposDePermisosEditar
