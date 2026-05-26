import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { SplitButton } from 'primereact/splitbutton';

import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

import PaginatorLabel from "../../shared/components/PaginatorLabel";

import { PermisosService } from '../../services/PermisosService';


function Permisos() {

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

  //tipos de acceso mockup
  const tiposDeAccesos = [
    { name: 'Consulta', code: 'ta01' },
    { name: 'Edición e inserción', code: 'ta02' },
    { name: 'Eliminación', code: 'ta03' },
    { name: 'Sin acceso', code: 'ta04' }
  ];
  const [tipoAcceso, setTipoAcceso] = useState();
  
  //tabla datos
  const [permisos, setPermisos] = useState([]);
  //seleccionar fila
  const [selectedUser, setSelectedUser] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
    PermisosService.getPermisos().then(data => setPermisos(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  //botones tabla navegacion para poder maquetar
  const navigate = useNavigate();
  
  const handleButtonCrearPermiso = () => {
    navigate('/permisos/crear-permiso');
  };
  const handleButtonEditar = () => {
    navigate('/permisos/editar-permiso');
  };
  const handleButtonVer = () => {
    navigate('/permisos/ver-permiso');
  };

  //acciones tabla
  const actionsBodyTemplate = (permisos) => {
    //se pintan distintos return si esta de baja o no
    if( permisos.estado === "Alta"){
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
    { field: 'codigo', header: 'Identificador' },
    { field: 'aplicacion', header: 'Código aplicación' },
    { field: 'nombrePermiso', header: 'Nombre del permiso' },
    { field: 'elemento', header: 'Elemento de aplicación' },
    { field: 'tipoAcceso', header: 'Tipo de acceso' },
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

              doc.autoTable(exportColumns, permisos);
              doc.save('permisos.pdf');
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

          saveAsExcelFile(excelBuffer, 'permisos');
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
                            detail: 'El permiso se ha eliminado correctamente.'
                        });
      setEliminarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido eliminar el permiso correctamente.`
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
  const estadoBodyTemplate = (users) => {
    if(users.estado === "Alta"){
      return <span className="p-tag p-tag-success">Alta</span>;
    }else{
      return <span className="p-tag p-tag-danger">Baja</span>;
    }
  };

  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0">
        <div className="d-flex flex-column flex-sm-row">
          <h1 className="section-title">Catálogo de permisos</h1>
          <div className="title-button-container ms-sm-auto mb-3 mb-sm-0">
            <Button onClick={handleButtonCrearPermiso} label="Crear permiso" icon="fa-regular fa-circle-plus" type="button" className="p-button-primary" />
          </div>
        </div>
        
        {/* <p className="section-subtitle">
          El catálogo de permisos permite gestionar todos los permisos y privilegios existentes en una aplicación para 
          configurar el acceso y la seguridad mediante los diferentes niveles.
        </p> */}
        
        <div className="search-container">
          <Card className="search-card">
            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="d-flex flex-column">
                    <AutoComplete id="identificador" placeholder="Identificador del permiso" className="order-1" aria-describedby="identificador-permiso" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                    <label htmlFor="identificador" className="order-0">Identificador</label>
                  </div>
                </div>

                <div className="col-md-12 col-lg-8 col-xl-4 mb-3">
                  <div className="d-flex flex-column">
                    <AutoComplete id="codigoAplicacion" 
                                  className="order-1" 
                                  placeholder="Añadir o seleccionar código de la aplicación" 
                                  aria-describedby="codigo-aplicacion" 
                                  value={value} 
                                  suggestions={items} 
                                  completeMethod={search} 
                                  onChange={handleSelectionChange} 
                                  dropdown />
                    <label htmlFor="codigoAplicacion" className="order-0">Código de la aplicación</label>
                    <p className="errorMsg order-2">Selecciona una opción</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="d-flex flex-column">
                    <Dropdown inputId="tipoAcceso" placeholder="Seleccionar tipo de acceso" aria-describedby="tipo-de-acceso" value={tipoAcceso} onChange={(e) => setTipoAcceso(e.value)} options={tiposDeAccesos} optionLabel="name" className="order-1"/>
                    <label htmlFor="tipoAcceso" className="order-0">Tipo de acceso</label>
                  </div>
                </div>

                <div className="col-md-6 col-lg-2 d-flex flex-column mb-3">
                  <div className="d-flex order-1" id="radioEstado">
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

                <div className="col-md-12 col-xl-6 mb-3">
                  <div className="d-flex flex-column">
                    <InputText id="nombrePermiso" placeholder="Nombre del permiso" aria-describedby="nombre-del-permiso" className="order-1"/>
                    <label htmlFor="nombrePermiso" className="order-0">Nombre</label>
                  </div>
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
              <DataTable  ref={dt}
                          value={permisos}
                          size="normal"
                          stripedRows
                          removableSort
                          selectionMode="single"
                          selection={selectedUser} 
                          onSelectionChange={(e) => setSelectedUser(e.value)} dataKey="id" metaKeySelection={false}
                          isDataSelectable={isRowSelectable}
                          rowClassName={rowClassName}
                          paginator
                          scrollable
                          scrollHeight="655px"
                          rows={10}
                          rowsPerPageOptions={[5, 10, 25, 50, 100]}
                          paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                          tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                  <Column field="codigo" header="Identificador" sortable></Column>
                  <Column field="aplicacion" header="Código aplicacion" sortable headerStyle={{ minWidth: '175px'}}></Column>
                  <Column field="nombrePermiso" header="Nombre del permiso" sortable headerStyle={{ width: '230px', minWidth: '270px' }}></Column>
                  <Column field="elemento" header="Elemento de aplicación" sortable headerStyle={{ width: '210px', minWidth: '210px' }}></Column>
                  <Column field="tipoAcceso" header="Tipo de acceso" sortable headerStyle={{ minWidth: '175px' }}></Column>
                  <Column field="estado" body={estadoBodyTemplate} header="Estado" sortable></Column>
                  <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ width:'170px',minWidth: '170px' }} headerClassName="centered-header"></Column>
              
              </DataTable>

            </Card>
          </div>
        </div>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar permisos</h4>
          <p className='px-3 text-center'>
            ¿Seguro que quieres <strong>eliminar</strong> definitivamente el permiso seleccionado?
            <br/>
            La eliminación del registro de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default Permisos
