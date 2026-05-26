import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { Dialog } from 'primereact/dialog';

import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

import PaginatorLabel from "../../shared/components/PaginatorLabel";

import { AplicacionesService } from '../../services/AplicacionesService';


function RelacionAplicacionEntidad() {

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
  const [aplicaciones, setAplicaciones] = useState([]);
  //seleccionar fila
  const [selectedAplicacion, setSelectedAplicacion] = useState(null);
  
  //carga datos tabla
  useEffect(() => {
      AplicacionesService.getAplicaciones().then(data => setAplicaciones(data));
  }, []);

  const isSelectable = (data) => data.estadoAlta != false;
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');


  //botones tabla navegacion para poder maquetar
  const navigate = useNavigate();
  
  const handleButtonCrearRelacion = () => {
    navigate('/relacion-aplicacion-entidad/crear-relacion');
  };
  const handleButtonEditar = () => {
    navigate('/relacion-aplicacion-entidad/editar-relacion');
  };
  const handleButtonVer = () => {
    navigate('/relacion-aplicacion-entidad/ver-relacion');
  };

  //acciones tabla
  const actionsBodyTemplate = (aplicaciones) => {
      //se tendria que pintar distintos return si esta de baja o no
      if( aplicaciones.estado === "Alta"){
        return (
          <>
            <Button onClick={handleButtonVer}  icon="fa-regular fa-eye" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Ver" tooltipOptions={{ position: 'bottom' }}/>
            <Button onClick={handleButtonEditar}  icon="fa-regular fa-pen" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Editar" tooltipOptions={{ position: 'bottom' }}/>
            {/* <Button onClick={showDialog}  icon="fa-regular fa-trash-can" type="button" className="p-button-outlined btn-table-icon mx-1" tooltip="Eliminar" tooltipOptions={{ position: 'bottom' }}/> */}
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
  // const [visible, setVisible] = useState(false);
  // const [eliminarExitoso, setEliminarExitoso] = useState(true);
  //toast eliminar
    const toast = useRef(null);

  // const showDialog = () => {
  //   setVisible(true);
  // }

  // const hideDialog = () => {
  //   setVisible(false);
  // }

  // const eliminarBtn = () => {

  //   if(eliminarExitoso) {
  //     toast.current.show({  severity: 'success',
  //                           detail: 'La relación ha sido eliminada correctamente.'
  //                       });
  //     setEliminarExitoso(false);
  //   }else{
  //     toast.current.show({  severity: 'error',
  //                           detail: `No se ha podido eliminar la relación seleccionada.`
  //                         });
  //     setEliminarExitoso(true);
  //   }

  //   setVisible(false);
  // }

  // const footerContent = (
  //   <div>
  //     <Button label="Cancelar" onClick={() => hideDialog()} text />
  //     <Button label="Eliminar" onClick={() => eliminarBtn()} className="p-button-primary btn-loading">
  //        <div className="container-bar">
  //          <div className="bar"></div>
  //        </div>
  //      </Button>
  //   </div>
  // );
  //fin funciones y boton el modal de confirmacion de eliminar

  //estado tabla template
  const estadoBodyTemplate = (aplicaciones) => {
    if(aplicaciones.estado === "Alta"){
      return <span className="p-tag p-tag-success">Alta</span>;
    }else{
      return <span className="p-tag p-tag-danger">Baja</span>;
    }
  };


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0">
        <div className="d-flex flex-column flex-sm-row">
          <h1 className="section-title">Relación Aplicación-Entidad</h1>
          <div className="title-button-container ms-sm-auto mb-3 mb-sm-0">
            <Button onClick={handleButtonCrearRelacion} label="Crear relación" icon="fa-regular fa-circle-plus" type="button" className="p-button-primary" />
          </div>
        </div>
        
        {/* <p className="section-subtitle">
          La relación entre aplicaciones y entidades permite gestionar que entidades se van a controlar dentro de cada aplicación.
        </p> */}
        
        <div className="search-container">
            <Card className="search-card">

              <form onSubmit={handleSubmit}>

                <div className="row">


                  <div className="col-md-12 col-lg-6 col-xl-4 mb-3">
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

                  <div className="col-md-12 col-lg-6 col-xl-4 mb-3">
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
                      <label htmlFor="codigoEntidad" className="order-0">Código de la entidad</label>
                      <p className="errorMsg order-2">Selecciona una opción</p>
                    </div>
                  </div>


                  <div className="col-md-12 col-lg-6 col-xl-4 d-flex flex-column mb-3">
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
            <Card className="table-container">
              <Tooltip target=".export-buttons>button" position="bottom" />
              <PaginatorLabel />
              <DataTable  value={aplicaciones}
                          size="normal"
                          stripedRows
                          removableSort
                          selectionMode="single"
                          selection={selectedAplicacion} 
                          onSelectionChange={(e) => setSelectedAplicacion(e.value)} dataKey="id" metaKeySelection={false}
                          isDataSelectable={isRowSelectable}
                          rowClassName={rowClassName}
                          paginator
                          scrollable
                          scrollHeight="655px"
                          rows={10}
                          rowsPerPageOptions={[5, 10, 25, 50, 100]}
                          paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                          tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                  <Column field="codigo" header="Código aplicación" sortable headerStyle={{ width: '250px', minWidth: '200px'}}></Column>
                  <Column field="nombreES" header="Nombre" sortable headerStyle={{ width: '750px', minWidth: '380px' }}></Column>
                  <Column field="estadoAlta" body={estadoBodyTemplate} header="Estado" sortable></Column>
                  <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ width: '130px', minWidth: '130px' }} headerClassName="centered-header"></Column>
              
              </DataTable>

            </Card>
          </div>
        </div>

        {/* <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog delete-dialog">
          <h4 className="pb-4 ms-0 ms-md-2 text-center text-md-center">Eliminar relación</h4>
          <p className='px-3 text-center'>
            ¿Seguro que quieres <strong>eliminar</strong> definitivamente la relación entre aplicación y entidades seleccionada?
            <br/>
            La eliminación del registro de la aplicación implica la baja lógica de todos sus registros asociados.
          </p>
        </Dialog> */}

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default RelacionAplicacionEntidad
