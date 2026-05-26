import { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';

import { classNames } from 'primereact/utils';
import LoginFooter from "../../shared/components/LoginFooter";
import LoginHeader from "../../shared/components/LoginHeader";


function ChangePassword() {

    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [value2, setValue2] = useState('');
    const [showNewPassword, setNewShowPassword] = useState(false);
    const [value3, setValue3] = useState('');
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    const toggleShowNewPassword = () => {
        setNewShowPassword(!showNewPassword);
    };
    const toggleShowRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };
  
    const inputType = showPassword ? 'text' : 'password';
    const inputType2 = showNewPassword ? 'text' : 'password';
    const inputType3 = showRepeatPassword ? 'text' : 'password';
  
    const navigate = useNavigate();

    const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
    const toast = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault(); // Detener el envío del formulario
        setActualizacionExitosa(true);

        if(actualizacionExitosa) {
            toast.current.show({  severity: 'success', 
                                summary: 'Contraseña actualizada', 
                                detail: 'La nueva contraseña se ha actualizado correctamente'
                            });
            
            setTimeout(() => {
                // Redirigir a la página de cambiar contraseña si es la primera vez que se accede
                navigate('/autentification');
            }, 2000);
    
        }else{
            toast.current.show({  severity: 'error',
                                summary: 'Error al actualizar la contraseña', 
                                detail: `Las constraseñas no coinciden.`
                            });
        }
    };

    //overlaypanel
    const op = useRef(null);


    return (
        <div className="access-section">
            <LoginHeader/>
            <div className="login-card change-password-card">
                <Card title="Crear nueva contraseña">
                    <p className="mb-4">
                        Dado que es el primer inicio de sesión tras la generación automática de tu contraseña, necesitamos la creación de una nueva personal.
                    </p>
                    <form onSubmit={handleLogin} autoComplete="off">

                        <div className="current-password d-flex flex-column password-block pb-3 mb-3">
                            <InputText  id="currentPassword" 
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        type={inputType}
                                        placeholder="Contraseña actual generada"
                                        aria-describedby="codigo-app"
                                        className="p-invalid order-1"/>
                            <label htmlFor="currentPassword" className="order-0">Contraseña actual</label>
                            <p className="errorMsg order-2">Contraseña incorrecta</p>
                            <Button icon={classNames('fa-light', {
                                        'fa-eye': showPassword,
                                        'fa-eye-slash': !showPassword,
                                    })}
                                    onClick={toggleShowPassword}
                                    className="show-password-btn p-button-outlined p-button-rounded order-2"
                                    type="button"
                            />
                        </div>

                        <div className="d-flex flex-column password-block mb-3">
                            <InputText  id="newPassword"
                                        autoComplete="off"
                                        placeholder="Añadir nueva contraseña"
                                        value={value2}
                                        onChange={(e) => setValue2(e.target.value)}
                                        onClick={(e) => op.current.toggle(e)}
                                        type={inputType2}
                                        aria-describedby="codigo-app"
                                        className="p-invalid order-1"/>
                            <label htmlFor="newPassword" className="order-0">Nueva contraseña</label>
                            <p className="errorMsg order-2">Requiere un mínimo de 8 caracteres alfanuméricos incluyendo un caracter especial</p>
                            <Button icon={classNames('fa-light', {
                                        'fa-eye': showNewPassword,
                                        'fa-eye-slash': !showNewPassword,
                                    })}
                                    onClick={toggleShowNewPassword}
                                    className="show-password-btn p-button-outlined p-button-rounded order-2"
                                    type="button"
                                    tabIndex="0"
                            />
                            <OverlayPanel ref={op} className="new-password-overlay">
                                <ul className="password-terms">
                                    <li className="dot">Al menos 8 caracteres.</li>
                                    <li className="dot checked">No haber sido utilizada anteriormente.</li>
                                    <li className="dot checked">No contener en parte o en su totalidad el nombre de usuario.</li>
                                    <li className="dot">Incluir al menos 3 de los siguientes:</li>
                                    <ul>
                                        <li>- Caracteres alfanuméricos en mayúsculas.</li>
                                        <li>- Caracteres alfanuméricos en minúsculas.</li>
                                        <li>- Caracteres numéricos.</li>
                                        <li>- Símbolos/caracteres especiales.</li>
                                    </ul>
                                </ul>
                            </OverlayPanel>
                        </div>

                        <div className="d-flex flex-column password-block mb-1">
                            <InputText  id="password" 
                                        value={value3}
                                        placeholder="Repetir nueva contraseña"
                                        onChange={(e) => setValue3(e.target.value)}
                                        type={inputType3}
                                        aria-describedby="codigo-app"
                                        className="p-invalid order-1"/>
                            <label htmlFor="password" className="order-0">Repetir contraseña</label>
                            <p className="errorMsg order-2">Las contraseñas no coinciden</p>
                            <Button icon={classNames('fa-light', {
                                        'fa-eye': showRepeatPassword,
                                        'fa-eye-slash': !showRepeatPassword,
                                    })}
                                    onClick={toggleShowRepeatPassword}
                                    className="show-password-btn p-button-outlined p-button-rounded order-2"
                                    type="button"
                            />
                        </div>

                        <Button label="Crear y entrar" type="submit" className="p-button-primary w-100 mt-4" />
                        <Button label="Volver" type="button" text className="p-button w-100 mt-2" />
                    </form>
                </Card>

                <Toast ref={toast} className="login-toast" position="top-center"/>
            </div>
            <LoginFooter/>
        </div>
    )
}

export default ChangePassword