import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import LoginHeader from "../../shared/components/LoginHeader";
import LoginFooter from "../../shared/components/LoginFooter";

function RolSelection() {

    const [selectedCard, setSelectedCard] = useState(null);
    const [showButton, setShowButton] = useState(false);

    const handleCardClick = (index) => {
        setSelectedCard(index);
        setShowButton(true);
    };

    const navigate = useNavigate();

    const handleRolBtn = () => {
        // Redirigir a la página de cambiar contraseña si es la primera vez que se accede
        navigate('/inicio');
    };

    const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const shouldShowModal = !localStorage.getItem('modalClosed');
        setVisible(shouldShowModal);
        setLoading(false);

        // Agregar la clase al body
        document.body.classList.add('home-page');

        // Eliminar la clase cuando se desmonte el componente
        return () => {
            document.body.classList.remove('home-page');
        };
        }, []);

        const onHide = () => {
        localStorage.setItem('modalClosed', true);
        setVisible(false);
    };

    const footerContent = (
    <div>
        <Button label="Entendido" onClick={() => onHide()} className="p-button-primary" />
    </div>
    );

    return (
        <>
        <div className="access-section rol-selection-page">
            <LoginHeader />
            <div className="container mt-3 mt-md-5 d-flex flex-column align-items-center">
                <h1 className="text-center title">¿Con qué perfil o entidad quieres acceder?</h1>
                <p className="text-center subtitle">
                    Selecciona perfil o entidad a través del que deseas iniciar sesión en la plataforma.
                    <br/>
                    Únicamente tendrás acceso a sus acciones asociadas.
                </p>
                <div className="d-flex flex-wrap justify-content-center mb-2">
                    <div className="px-3 pb-3">
                        <Card   className={`simple-card ${selectedCard === 0 ? "selected" : ""}`}
                                onClick={() => handleCardClick(0)}>
                            <i className="user-icon fa-regular fa-user"></i>
                            <h3 className="card-title text-uppercase">Ténico municipal</h3>
                        </Card>
                    </div>
                    <div className="px-3 pb-3">
                        <Card   className={`simple-card ${selectedCard === 1 ? "selected" : ""}`}
                                onClick={() => handleCardClick(1)}>
                            <i className="user-icon fa-regular fa-user"></i>
                            <h3 className="card-title text-uppercase">Responsable municipal</h3>
                        </Card>
                    </div>
                    <div className="px-3 pb-3">
                        <Card   className={`simple-card ${selectedCard === 2 ? "selected" : ""}`}
                                onClick={() => handleCardClick(2)}>
                            <i className="user-icon fa-regular fa-user"></i>
                            <h3 className="card-title text-uppercase">Responsable orgánico</h3>
                        </Card>
                    </div>
                </div>
                {showButton && (
                <Button label="Confirmar selección" type="button" onClick={handleRolBtn} className="p-button-primary my-4" />
                )}
            </div>
            <LoginFooter />
        </div>
        {loading ? (
        ""
        ) : (
            <Dialog visible={visible} onHide={onHide} className='system-dialog' footer={footerContent}>
            <div className="dialog-advise d-flex align-items-center mb-4">
                <i className="fa-regular fa-circle-info me-3"></i>
                Aviso a los usuarios del sistema
            </div>
            <p className='px-3'>
                {
                `El uso de este sistema sólo está permitido a los usuarios autorizados. El acceso no autorizado está terminantemente prohibido y podrá ser objeto de acciones disciplinarias, sin perjuicio de las restantes acciones de naturaleza legal a las que hubiere lugar. Toda la actividad de este sistema se registra y es revisada periódicamente por el personal designado por la dirección del <<ORGANISMO>>.`
                }
            </p>
            <p className='px-3'>
                {
                `Cualquier usuario que acceda al sistema lo hace declarando conocer y aceptar íntegramente estas reglas y la Normativa General de Utilización de los Recursos y Sistemas de Información del <<ORGANISMO>>, accesibles en <<URL>> y <<localización física>>.`
                }
            </p>
            </Dialog>
        )}
        </>
    )
}

export default RolSelection