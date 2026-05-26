import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast } from 'primereact/toast';
import { MultiSelect } from 'primereact/multiselect';

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { PermisosService } from '../../services/PermisosService';
import { GruposPermisosService } from '../../services/GruposPermisosService';
import { PerfilesService } from '../../services/PerfilesService';

function AsignarPermisosCrear() {

  const navigate = useNavigate();
  
  //tabla datos
  const [permisos, setPermisos] = useState([]);
  const [gruposPermisos, setGruposPermisos] = useState([]);
  const [perfiles, setPerfiles] = useState([]);

  //seleccionar fila
  const [selectedPermiso, setSelectedPermiso] = useState(null);
  const [selectedGrupo, setSelectedGrupo] = useState(null);
  const [selectedPerfil, setSelectedPerfil] = useState(null);

  //carga datos tabla
  useEffect(() => {
      PermisosService.getPermisos().then(data => setPermisos(data));
      GruposPermisosService.getGruposPermisos().then(data => setGruposPermisos(data));
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
      setVisible2(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se ha podido guardar el registro correctamente.`
                          });
      setGuardarExitoso(true);
      setVisible(false);
      setVisible2(false);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior
  
  //funciones botones clonar
  // eslint-disable-next-line no-unused-vars
  const [clonarExitoso, setClonarExitoso] = useState(true);

  const handleClonarBtn = () => {
    if(clonarExitoso) {
      setVisible2(true);
    }else{
      setVisible2(false);
    }
  };
  //FIN funciones botones clonar

  //funciones boton permisos
  const handlePermisosBtn = () => {
      setVisible(true);
  };
  //fin funciones boton permisos

  //dropdown autocomplete entidades
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const search = (event) => {
      let _items = [...Array(10).keys()];
      setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete entidades


  //dropdown autocomplete entidades clonar dialog
  const [value3, setValue3] = useState('');
  const [items3, setItems3] = useState([]);

  const search3 = (event) => {
      let _items = [...Array(10).keys()];
      setItems3(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
  }
  //FIN dropdown autocomplete entidades clonar dialog

  //dialog entidad
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog()} text />
      <Button label="Añadir" onClick={() => handleGuardarBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin dialog entidad

  //dialog clonar entidad
  const [visible2, setVisible2] = useState(false);

  const hideDialog2 = () => {
    setVisible2(false);
  }

  const footerContent2 = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog2()} text />
      <Button label="Clonar" onClick={() => handleGuardarBtn()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin dialog clonar entidad
  
  const handleClonarPermisosBtn = () => {
    // setVisible3(true);
    navigate('/asignacion-de-permisos/clonar-permisos');
  };

  const [selectedEntidades, setSelectedEntidades] = useState(null);
  const entidades = [
      { name: 'Entidad 01', code: 'e01' },
      { name: 'Entidad 02', code: 'e02' },
      { name: 'Entidad 03', code: 'e03' },
      { name: 'Entidad 04', code: 'e04' },
      { name: 'Entidad 05', code: 'e05' }
  ];




  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 pb-5 mb-5 ">
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Editar permisos de {'"nombre"'}</h1>
            <div className="title-button-container ms-sm-auto">
              <Button onClick={() => {navigate('/asignacion-de-permisos')}} icon="fa-regular fa-arrow-left" label="Volver a asignación de permisos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            
            <div className="data">

              <div className="row without-border gx-0">
                
              </div>

              <div className="row">

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Identificador del usuario</h3>
                    <p>1001</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Tipo de identificación</h3>
                    <p>DNI</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="d-flex flex-column">
                    <h3>Número de identificación</h3>
                    <p>7832318Z</p>
                  </div>
                </div>

              </div>

              <div className="row">

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Nombre</h3>
                    <p>Pedro</p>
                  </div>
                </div>

                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="d-flex flex-column">
                    <h3>Primer apellido</h3>
                    <p>Perez</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="d-flex flex-column">
                    <h3>Segundo apellido</h3>
                    <p>Garcia</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
            
            
          
        </Card>

        <div className="tabs-container mt-4 pt-2 mb-2 pb-4 d-flex flex-column">
          
          <div className="table-container">
            <TabView>

              <TabPanel header="Permisos">
              <h3 className="title-card-data">Permisos</h3>
                <PaginatorLabel />
                <DataTable  value={permisos}
                            size="normal"
                            stripedRows
                            removableSort

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
                    <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                    <Column field="aplicacion" header="Aplicación" sortable filter  showFilterMenu={false} filterPlaceholder="Filtrar por aplicación " headerStyle={{ width: '250px', maxWidth: '250px' }}></Column>
                    <Column field="nombrePermiso" header="Permiso" sortable headerStyle={{ minWidth: '250px' }}></Column>
                    <Column field="elemento" header="Elemento" sortable headerStyle={{ minWidth: '150px' }}></Column>
                    <Column field="tipoAcceso" header="Tipo de acceso" sortable headerStyle={{ minWidth: '200px' }}></Column>
                
                </DataTable>

                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 mt-2">
                  <Button onClick={handleClonarPermisosBtn} label="Clonar permisos" icon="fa-regular fa-copy" type="button" className="p-button-outlined me-auto" />
                  <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0 p-button-text mt-4 mt-md-0" />
                  <Button onClick={handleGuardarBtn} label="Aplicar" disabled type="button" className="p-button-primary mb-0 mb-sm-0 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>

              </TabPanel>

              <TabPanel header="Grupos de permisos">
              <h3 className="title-card-data">Grupos de permisos</h3>
                <PaginatorLabel />
                <DataTable  value={gruposPermisos}
                          size="normal"
                          stripedRows
                          removableSort

                          filtermode="contains"
                          filterDisplay="row"
                        
                          emptyMessage="No se han encontrado resultados"
                          selectionMode="single"
                          selection={selectedGrupo} 
                          onSelectionChange={(e) => setSelectedGrupo(e.value)} dataKey="id" metaKeySelection={false}
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
                  <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                  <Column field="aplicacion" header="Aplicación" sortable filter  showFilterMenu={false} filterPlaceholder="Filtrar por aplicación " headerStyle={{ width: '250px', maxWidth: '250px' }}></Column>
                  <Column field="nombreGrupo" header="Grupo" sortable headerStyle={{ minWidth: '250px' }}></Column>
              
                </DataTable>

                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 mt-2">
                  <Button onClick={handleClonarPermisosBtn} label="Clonar grupos" icon="fa-regular fa-copy" type="button" className="p-button-outlined me-auto" />
                  <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0 p-button-text" />
                  <Button onClick={handleGuardarBtn} label="Aplicar" disabled type="button" className="p-button-primary mb-0 mb-sm-0 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>

              </TabPanel>

              <TabPanel header="Perfiles">
              <h3 className="title-card-data">Perfiles</h3>
                <PaginatorLabel />
                <DataTable  value={perfiles}
                          size="normal"
                          stripedRows
                          removableSort
                          
                          selectionMode="single"
                          selection={selectedPerfil} 
                          onSelectionChange={(e) => setSelectedPerfil(e.value)} dataKey="id" metaKeySelection={false}
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
                  <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                  <Column field="nombrePerfil" header="Perfil" sortable  headerStyle={{ minWidth: '250px' }}></Column>
              
                </DataTable>

                <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 mt-2">
                  <Button onClick={handleClonarPermisosBtn} label="Clonar perfiles" icon="fa-regular fa-copy" type="button" className="p-button-outlined me-auto" />
                  <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0 p-button-text" />
                  <Button onClick={handleGuardarBtn} label="Aplicar" disabled type="button" className="p-button-primary mb-0 mb-sm-0 btn-loading">
                    <div className="container-bar">
                      <div className="bar"></div>
                    </div>
                  </Button>
                </div>

              </TabPanel>

              <TabPanel header="Entidades">

                  {/*DIV a mostrar si no se tienen permisos */}
                  <div className="without-results">
                    <div className="dialog-advise no-results-msg info-advise d-flex align-items-center mb-4 mt-3">
                      <i className="fa-regular fa-circle-info me-3"></i>
                      Aún no tienes permisos o grupos para aplicaciones relacionadas con entidades.
                    </div>
                  </div>

                  <div className="with results">

                    <div className="row">
                      <div className="col-md-5 col-lg-3 mb-3">
                        <div className="d-flex flex-column">
                          <AutoComplete id="entidadesAsociadas" className="order-1" placeholder="Seleccionar entidad asociada" aria-describedby="entidad" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
                          <label htmlFor="entidadesAsociadas" className="order-0">Entidades asociadas</label>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-9 mb-3 d-flex flex-column">
                        <div className="mt-auto d-flex flex-column flex-md-row">
                          <Button onClick={handleClonarBtn} label="Clonar entidad" icon="fa-regular fa-copy" type="button" className="p-button-outlined btn-clonar me-0 me-md-4 mb-3 mb-md-0" />
                          <Button onClick={handlePermisosBtn} label="Añadir permisos, grupos y perfiles para nueva entidad" type="button" className="p-button-outlined btn-entidad ms-0 ms-md-auto" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      
                      <div className="col-12 mt-4">
                        
                          <h3 className="title-card-data">Entidades</h3>
                          {/* <PaginatorLabel /> */}
                          <DataTable  value={permisos}
                                      size="normal"
                                      stripedRows
                                      removableSort

                                      // filtermode="contains"
                                      // filterDisplay="row"
                                    
                                      emptyMessage="No se han encontrado resultados"
                                      selectionMode="single"
                                      selection={selectedPermiso} 
                                      onSelectionChange={(e) => setSelectedPermiso(e.value)} dataKey="id" metaKeySelection={false}
                                      isDataSelectable={isRowSelectable}
                                      rowClassName={rowClassName}
                                      // paginator
                                      // scrollable
                                      // scrollHeight="635px"
                                      // rows={5}
                                      // rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                      // paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                                      tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>

                              <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                              <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                              <Column field="aplicacion" header="Aplicación" sortable filter  showFilterMenu={false} filterPlaceholder="Filtrar por aplicación " headerStyle={{ width: '250px', maxWidth: '250px' }}></Column>
                              <Column field="nombrePermiso" header="Permiso" sortable headerStyle={{ minWidth: '250px' }}></Column>
                              <Column field="elemento" header="Elemento" sortable headerStyle={{ minWidth: '150px' }}></Column>
                              <Column field="tipoAcceso" header="Tipo de acceso" sortable headerStyle={{ minWidth: '200px' }}></Column>
                          
                          </DataTable>
                        
                      </div>

                      <div className="col-12 mt-4">
                        
                          <h3 className="title-card-data">Grupos de permisos</h3>
                          {/* <PaginatorLabel /> */}
                          <DataTable  value={gruposPermisos}
                            size="normal"
                            stripedRows
                            removableSort

                            // filtermode="contains"
                            // filterDisplay="row"
                          
                            emptyMessage="No se han encontrado resultados"
                            selectionMode="single"
                            selection={selectedGrupo} 
                            onSelectionChange={(e) => setSelectedGrupo(e.value)} dataKey="id" metaKeySelection={false}
                            isDataSelectable={isRowSelectable}
                            rowClassName={rowClassName}
                            // paginator
                            // scrollable
                            // scrollHeight="635px"
                            // rows={5}
                            // rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            // paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                            tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>

                            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                            <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                            <Column field="aplicacion" header="Aplicación" sortable filter  showFilterMenu={false} filterPlaceholder="Filtrar por aplicación " headerStyle={{ width: '250px', maxWidth: '250px' }}></Column>
                            <Column field="nombreGrupo" header="Grupo" sortable headerStyle={{ minWidth: '250px' }}></Column>
                        
                          </DataTable>
                        
                      </div>

                      <div className="col-12 mt-4">
                        
                          <h3 className="title-card-data">Perfiles</h3>
                          {/* <PaginatorLabel /> */}
                          <DataTable  value={perfiles}
                            size="normal"
                            stripedRows
                            removableSort
                            
                            selectionMode="single"
                            selection={selectedPerfil} 
                            onSelectionChange={(e) => setSelectedPerfil(e.value)} dataKey="id" metaKeySelection={false}
                            isDataSelectable={isRowSelectable}
                            rowClassName={rowClassName}
                            // paginator
                            // scrollable
                            // scrollHeight="635px"
                            // rows={5}
                            // rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            // paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                            tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>

                            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                            <Column field="codigo" header="Código" sortable headerStyle={{ minWidth: '150px', width: '150px' }}></Column>
                            <Column field="nombrePerfil" header="Perfil" sortable  headerStyle={{ minWidth: '250px' }}></Column>
                        
                          </DataTable>
                        
                      </div>
                    </div>
                    
                  </div>

                  <div className="buttons-container d-flex flex-column flex-md-row justify-content-end pt-4 mt-2">
                    <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0 p-button-text" />
                    <Button onClick={handleGuardarBtn} label="Aplicar" disabled type="button" className="p-button-primary mb-0 mb-sm-0 btn-loading">
                      <div className="container-bar">
                        <div className="bar"></div>
                      </div>
                    </Button>
                  </div>


              </TabPanel>
            </TabView>
          </div>
        </div>

        

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog clonar-dialog dialog-min-width">
          <h4 className="pb-4">Añadir permisos, grupos y perfiles para nueva entidad</h4>
              {/* <p className="mt-0">
                Seleccione la entidad para la que se desean crear los permisos.
              </p> */}
              <div className="d-flex flex-column mt-4 mb-5">
              <MultiSelect value={selectedEntidades} 
                              onChange={(e) => setSelectedEntidades(e.value)} 
                              options={entidades} optionLabel="name" 
                              placeholder="Seleccionar entidades" 
                              className="order-1" />
                <label htmlFor="entidad" className="order-0">Entidades</label>
              </div>
        </Dialog>

        <Dialog visible={visible2} onHide={hideDialog2} footer={footerContent2} className="system-dialog clonar-dialog dialog-min-width">
          <h4 className="pb-4">Clonar permisos, grupos y perfiles para otra entidad</h4>
          <div className="card-data-container">
            <div className="p-card-body">
              <div className="p-card-content">
                <div className="card-data full-width-card w-100 p-0">

                  {/*Este bloque se a añadido unicamente para recuperar los estilos y no hacer nada nuevo, pero podria hacerse mejor*/}
                  <div className="data">
                    <div className="row without-border gx-0">
                      <div className="col">
                        <h2 className="form-section-title d-none">Entidades de origen y destino</h2>
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-6">
                        <div className="d-flex flex-column">
                          <h3>Entidad origen</h3>
                          <p>Ayuntamiento de Bilbao</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
              
              <div className="d-flex flex-column mt-4 mb-5">
                <AutoComplete id="entidadAClonar" className="order-1" placeholder="Seleccionar la entidad para la que se desea clonar los permisos, grupos y perfiles" aria-describedby="entidadDialogAClonar" value={value3} suggestions={items3} completeMethod={search3} onChange={(e) => setValue3(e.value)} dropdown />
                <label htmlFor="entidadAClonar" className="order-0">Entidad destino</label>
              </div>
        </Dialog>

        

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default AsignarPermisosCrear
