import { useState, useRef, useEffect } from "react";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { TreeSelect } from 'primereact/treeselect';
import { Dialog } from 'primereact/dialog';

import { ElementsTreeService } from '../../services/ElementsTreeService';


function CatalogoAplicacionesElementosCrear() {

  //tipos de acceso mockup
  const tiposDeElementos = [
    { name: 'Menú', code: 'te01' },
    { name: 'Formulario', code: 'te02' },
    { name: 'Botón', code: 'te03' }
  ];
  const [tipoElemento, setTipoElemento] = useState(tiposDeElementos[0]?.code);

  const [elements, setElements] = useState(null);
  const [selectedElementsKeys, setSelectedElementsKeys] = useState(null);
  
  useEffect(() => {
      ElementsTreeService.getElementsTreeNodes().then((data) => setElements(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

  //funciones botones guardar y volver a la pag anterior
  const [guardarExitoso, setGuardarExitoso] = useState(true);
  const toast = useRef(null);

  const handleGuardarBtn = () => {

    if(guardarExitoso) {
      {/*Aqui se deberia llamar a la funcion de crear permisos asociados solo si el tipo es formulario*/}
      if (tipoElemento.code === 'te02') {
        handleCrearPermisosAsociados();
        return;
      }
      toast.current.show({  severity: 'success',
                            detail: 'El elemento se ha creado correctamente.'
                        });
      setGuardarExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `El elemento no se ha podido crear correctamente.`
                          });
      setGuardarExitoso(true);
    }
  };

  const handleVolverBtn = () => {
    window.history.back();
  };
  //FIN funciones botones guardar y volver a la pag anterior

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
                            detail: 'El elemento y sus permisos asociados se han creado correctamente.'
                        });
      setCrearPermisosExitoso(false);
    }else{
      toast.current.show({  severity: 'error',
                            detail: `El elemento y sus permisos asociados no se han podido crear correctamente.`
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
  const handleCrearPermisosAsociados = () => {
    setVisible2(true);
  };
  //fin dialog2 crear permisos asociados

  


  return (
    <>
      <section className="container pt-4 pt-md-3 mt-2 mt-md-0 mb-5 pb-5">
        
        <Card className="card-data-container card-data-container__form smaller-card mt-2">

          <div className="title-card-container d-flex flex-column flex-sm-row">
            <h1 className="title-card-data my-3 my-md-0">Crear elemento de {'"nombre aplicación"'}</h1>
            {/* <div className="title-button-container ms-sm-auto">
              <Button onClick={handleVolverBtn} icon="fa-regular fa-arrow-left" label="Volver a elementos" text type="button" className="p-button pe-4 pe-sm-0" />
            </div> */}
          </div>
          
          <div className="card-data">
            <div className="data">
              <form action="">
                <div className="row">

                  <div className="col-lg-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreElementoEs" placeholder="Nombre del elemento en castellano" aria-describedby="nombre-del-elemento-en-castellano" className="order-1"/>
                      <label htmlFor="nombreElementoEs" className="order-0">Nombre (Castellano)</label>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <div className="d-flex flex-column">
                      <InputText id="nombreElementoEu" placeholder="Nombre del elemento en euskera" aria-describedby="nombre-del-elemento-en-euskera" className="order-1"/>
                      <label htmlFor="nombreElementoEu" className="order-0">Nombre (Euskera)</label>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-6 mb-3">
                    <div className="d-flex flex-column">
                      <Dropdown inputId="tipoElemento" placeholder="Tipo de elemento" aria-describedby="tipo-de-elemento" value={tipoElemento} onChange={(e) => setTipoElemento(e.value)} options={tiposDeElementos} optionLabel="name" className="order-1"/>
                      <label htmlFor="tipoElemento" className="order-0">Tipo</label>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
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

                <div className="row">
                  <div className="col buttons-container d-flex flex-column flex-md-row justify-content-end pt-0 pt-md-4">
                    <Button onClick={handleVolverBtn} label="Cancelar" text type="button" className="p-button mx-0 mx-md-1 mb-2 mb-md-0" />
                    <Button onClick={handleGuardarBtn} label="Crear" type="button" className="p-button-primary ms-0 ms-md-1 btn-loading">
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

export default CatalogoAplicacionesElementosCrear
