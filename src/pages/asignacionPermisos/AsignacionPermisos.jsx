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

import { UsersService } from '../../services/UsersService';


function AsignacionPermisos() {

  //radio button estado
  const [estado, setEstado] = useState(true);

  //autocomplete identificador
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map(item => event.query + '-' + item));
  }

  //tipo identificacion
  const tiposDeIdentificacion = [
    { name: 'DNI', code: 'dni' },
    { name: 'NIE', code: 'nie' },
  ];
  const [tipoIdentificacion, setTipoIdentificacion] = useState(tiposDeIdentificacion[0]);
  
  //tabla datos
  const [users, setUsers] = useState([]);
  //seleccionar fila
  const [selectedUser, setSelectedUser] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
      UsersService.getUsers().then(data => setUsers(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  //botones tabla navegacion para poder maquetar
  const navigate = useNavigate();
  
  const handleButtonCrear = () => {
    navigate('/asignacion-de-permisos/crear-permisos');
  };
  const handleButtonEditar = () => {
    navigate('/asignacion-de-permisos/editar-permisos');
  };
  const handleButtonVer = () => {
    navigate('/asignacion-de-permisos/ver-permisos');
  };

  //estado tabla template
  const estadoBodyTemplate = (users) => {
    if(users.estadoAlta === true){
      return <span className="p-tag p-tag-success">Alta</span>;
    }else{
      return <span className="p-tag p-tag-danger">Baja</span>;
    }
  };

  //acciones tabla
  const actionsBodyTemplate = (users) => {
    //se tendria que pintar distintos return si esta de baja o no
    if(users.conPermisos === true){
      if( users.estadoAlta === true){
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
    }else{
      return (
        <>
          <Button onClick={handleButtonCrear} label="Crear permisos" type="button" className="p-button-outlined p-crear-btn" />
        </>
      );
    }

    
  };

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

              doc.autoTable(exportColumns, users);
              doc.save('users.pdf');
          });
      });
  };

  const exportExcel = () => {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(users);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer = xlsx.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
          });

          saveAsExcelFile(excelBuffer, 'users');
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

  //cabecera tabla botones exportar
  // const header = (
  //   <div className="d-flex flex-wrap align-items-center justify-content-end">
  //     <Button type="button" className="p-button-outlined me-2" label="PDF" icon="fa-regular fa-file-pdf" onClick={exportPdf} data-pr-tooltip="PDF" />
  //     <Button type="button" className="p-button-outlined me-2" label="CSV" icon="fa-regular fa-file-csv" onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
  //     <Button type="button" className="p-button-outlined" label="XLS" icon="fa-regular fa-file-excel" onClick={exportExcel} data-pr-tooltip="XLS" />
        
  //   </div>
  // );

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
                            detail: 'El registro se ha eliminado correctamente.'
                        });
      setEliminarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido eliminar el registro correctamente.`
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
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0">
        <h1 className="section-title">Asignación de permisos</h1>
        {/* <p className="section-subtitle">
          El mantenimiento de asignación de permisos permite crear, gestionar o eliminar los 
          diferentes permisos, grupos, perfiles y entidades que se le otorgan a cada usuario 
          para cada una de las aplicaciones dadas de alta en el sistema para las que se va a 
          realizar la gestión de seguridad.
        </p> */}
        
        <div className="search-container">
            <Card className="search-card">
              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-5 col-lg-3 mb-3">
                    <div className="d-flex flex-column">
                      <AutoComplete id="identificador" className="order-1" placeholder="Identificador del usuario" aria-describedby="identificador-usuario" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                      <label htmlFor="identificador" className="order-0">Identificador</label>
                    </div>
                  </div>

                  <div className="col-md-3 col-lg-2 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="tipoIdentificacion" aria-describedby="tipo-de-identificacion" value={tipoIdentificacion} onChange={(e) => setTipoIdentificacion(e.value)} options={tiposDeIdentificacion} optionLabel="name" className="order-1" defaultValue={tiposDeIdentificacion[0]}/>
                      <label htmlFor="tipoIdentificacion" className="order-0">Tipo de identificación</label>
                    </div>
                  </div>

                  <div className="col-md-8 col-lg-3 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nIdentificacion" aria-describedby="numero-de-identificacion" placeholder="Número de identificación" className="order-1"/>
                      <label htmlFor="nIdentificacion" className="order-0">Número de identificación</label>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-2 d-flex flex-column mb-3">
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

                  <div className="col-md-4 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombre" aria-describedby="nombre" placeholder="Nombre del usuario" className="order-1"/>
                      <label htmlFor="nombre" className="order-0">Nombre</label>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="apellido1" disabled aria-describedby="primer-apellido" placeholder="Primer apellido del usuario" className="order-1"/>
                      <label htmlFor="apellido1" className="order-0">Primer apellido</label>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="apellido2" aria-describedby="segundo-apellido" placeholder="Segundo apellido del usuario" className="p-invalid order-1"/>
                      <label htmlFor="apellido2" className="order-0">Segundo apellido</label>
                      <p className="errorMsg order-2">Es necesario completar el campo</p>
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
            <SplitButton
              label="Descargar tabla"
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
                          value={users}
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
                  <Column field="id" header="Identificador" sortable></Column>
                  <Column field="tipoIdentificacion" header="Tipo de identificación" sortable headerStyle={{ minWidth: '205px'}}></Column>
                  <Column field="nIdentificacion" header="Nº identificación" sortable headerStyle={{ minWidth: '170px' }}></Column>
                  <Column field="nombre" header="Nombre y apellidos" sortable headerStyle={{ width: '210px', minWidth: '280px' }}></Column>
                  <Column field="estadoAlta" body={estadoBodyTemplate} header="Estado" sortable></Column>
                  <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ width:'170px',minWidth: '170px' }} headerClassName="centered-header"></Column>
              
              </DataTable>

              {/* <DataTable  ref={dt}
                          value={products}
                          size="small"
                          stripedRows
                          header={header}
                          removableSort
                          selectionMode="single"
                          selection={selectedProduct} 
                          onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={false}
                          isDataSelectable={isRowSelectable}
                          rowClassName={rowClassName}
                          paginator
                          scrollable
                          scrollHeight="600px"
                          rows={10}
                          rowsPerPageOptions={[2, 5, 10, 25, 50, 100]}
                          paginatorTemplate="RowsPerPageDropdown PrevPageLink CurrentPageReport NextPageLink"
                          currentPageReportTemplate="{first} to {last} of {totalRecords}"
                          tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>

                  <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                  <Column field="code" header="Identificador" sortable></Column>
                  <Column field="name" header="Tipo de identificación" sortable></Column>
                  <Column field="category" header="Número de identificación" sortable></Column>
                  <Column field="quantity" header="Nombre y apellidos" sortable></Column>
                  <Column field="inventoryStatus" header="Estado" sortable></Column>
                  <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ minWidth: '340px' }}></Column>
              
              </DataTable> */}
            </Card>
          </div>
        </div>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar permisos asignados</h4>
          <p className='px-3 text-center'>
            ¿Seguro que quieres <strong>eliminar</strong> los permisos asignados a <strong>{'"María del Carmen Zubicaray San Martín"'}</strong>?
            <br/>
            La eliminación del registro de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
          
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default AsignacionPermisos
