import { useState, useEffect, useRef } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

import  PaginatorLabel  from '../../shared/components/PaginatorLabel';

import { UsersService } from '../../services/UsersService';

function AsignarPermisosClonar() {


  //tabla datos usuarios para el dialog clonar permisos
  const [users, setUsers] = useState([]);
  //seleccionar fila
  const [selectedUser, setSelectedUser] = useState(null);

  //carga datos tabla
  useEffect(() => {
      UsersService.getUsers().then(data => setUsers(data));
  }, []);

  const isSelectable = (data) => data.estado != 'Baja';
  const isRowSelectable = (event) => (event.data ? /*isSelectable(event.data)*/true : true);
  const rowClassName = (data) => (isSelectable(data) ? '' : '');

  const toast = useRef(null);

  const handleVolverBtn = () => {
    window.history.back();
  };
  
  const handleClonarBtn = () => {
    setVisible(true);
  };

  //dialog
  const [visible, setVisible] = useState(false);

  const hideDialog = () => {
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button label="Cancelar" onClick={() => hideDialog()} text />
      <Button label="Si, clonar" onClick={() => handleButtonClonarPermisosAUsuario()} className="p-button-primary btn-loading">
        <div className="container-bar">
          <div className="bar"></div>
        </div>
      </Button>
    </div>
  );
  //fin dialog
  
  //acciones tabla
  const actionsBodyTemplate = () => {
    return (
      <Button onClick={handleClonarBtn} label="Clonar" type="button" className="p-button-outlined p-crear-btn" />
    );
  };

  const [clonarPermisosAUsuarioExitoso, setClonarPermisosAUsuarioExitoso] = useState(true);
  const handleButtonClonarPermisosAUsuario = () => {
    if(clonarPermisosAUsuarioExitoso) {
      toast.current.show({  severity: 'success',
                            detail: 'Los permisos de “Amaiur Zubizarreta Larra” se han clonado en “Endika Pérez García”.'
                        });
      setClonarPermisosAUsuarioExitoso(false);
      setVisible(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `No se han podido clonar los permisos al usuario seleccionado.`
                          });
      setClonarPermisosAUsuarioExitoso(true);
      setVisible(false);
    }
  };


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 pb-5 mb-5 ">
        
        <Card className="card-data-container mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Clonar permisos de {'"nombre"'}</h1>
            <div className="title-button-container ms-md-auto d-flex flex-column flex-md-row">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver" text type="button" className="p-button mx-1" />
              <Button onClick={() => {}} label="Crear usuario con permisos clonados" type="button" className="p-button-primary" />
            </div>
          </div>
          
          <div className="card-data full-width-card">
            
            <div className="data">

              <div className="dialog-advise no-results-msg info-advise d-flex align-items-center mb-4">
                <i className="fa-regular fa-circle-info me-3"></i>
                Seleccione el usuario al que quiere copiar los permisos de {'“Amaiur Zubizarreta Larra”'}.
              </div>

              <PaginatorLabel />
                <DataTable 
                            value={users}
                            size="normal"
                            stripedRows
                            removableSort

                            filtermode="contains"
                            filterDisplay="row"

                            emptyMessage="No se han encontrado resultados"
                            selectionMode="single"
                            selection={selectedUser} 
                            onSelectionChange={(e) => setSelectedUser(e.value)} dataKey="id" metaKeySelection={false}
                            isDataSelectable={isRowSelectable}
                            rowClassName={rowClassName}
                            paginator
                            scrollable
                            scrollHeight="670px"
                            rows={5}
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            paginatorTemplate="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink"
                            tableStyle={{ minWidth: '50rem', fontSize: '15px' }}>
                    <Column field="id" header="Identificador" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por identificador"></Column>
                    <Column field="tipoIdentificacion" header="Tipo de identificación" sortable headerStyle={{ minWidth: '205px'}}></Column>
                    <Column field="nIdentificacion" header="Nº identificación" sortable filter showFilterMenu={false} filterPlaceholder="Filtrar por Nº identificación" headerStyle={{ minWidth: '170px' }}></Column>
                    <Column field="nombre" header="Nombre y apellidos" sortable headerStyle={{ width: '210px', minWidth: '280px' }}></Column>
                    {/* <Column field="estadoAlta" body={rowData => rowData.estadoAlta ? 'Alta' : 'Baja'} header="Estado" sortable></Column> */}
                    <Column header="Acciones" body={actionsBodyTemplate} headerStyle={{ minWidth: '180px' }} headerClassName="centered-header" className="centered-cell"></Column>
                
                </DataTable>
              

            </div>

          </div>

        </Card>

        <Dialog visible={visible} onHide={hideDialog} footer={footerContent} className="system-dialog clonar-permisos-dialog dialog-min-width">
          <h4 className="text-center pb-4">Clonar permisos</h4>
          <p className="mt-0 text-center">
            ¿Estas seguro de a quién quieres clonar los permisos?
          </p>
          <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
            <div className="user origin-user d-flex flex-column align-items-center">
              <i className="fa-regular fa-clone mb-3"></i>
              <p className="mb-0">Amaiur Zubizarreta Larra</p>
            </div>
            
            <i className="arrow fa-regular fa-arrow-right mx-5"></i>
            
            <div className="user destination-user d-flex flex-column align-items-center">
              <i className="fa-regular fa-files mb-3"></i>
              <p className="mb-0">Endika Pérez García</p>
            </div> 
          </div>
        </Dialog>

        <Toast ref={toast} position="top-center" className="inner-toast"/>
        

      </section>
    </>
  )
}

export default AsignarPermisosClonar
