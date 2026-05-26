import { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { classNames } from 'primereact/utils';
import LoginHeader from "../../shared/components/LoginHeader";
import LoginFooter from "../../shared/components/LoginFooter";

function Autentification() {

    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const inputType = showPassword ? 'text' : 'password';
  
    const navigate = useNavigate();

    const [codigoExitoso, setCodigoExitoso] = useState(false);
    const toast = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault(); // Detener el envío del formulario
        setCodigoExitoso(true);

        if(codigoExitoso) {
            toast.current.show({  severity: 'success', 
                                summary: 'Código correcto', 
                                detail: 'El código a sido validado correctamente.'
                            });
            
            setTimeout(() => {
                // Redirigir a la página de cambiar contraseña si es la primera vez que se accede
                navigate('/seleccionar-rol');
            }, 2000);
    
        }else{
            toast.current.show({  severity: 'error', 
                                summary: 'Código incorrecto', 
                                detail: `El código no coincide con el enviado.`
                            });
        }
    };

    return (
        <div className="access-section">
            <LoginHeader />
            <div className="login-card autentification-card">
                <Card title="Autenticación multifactor">
                    <p className="mb-4">
                    Escriba el código recibido en el sistema de autenticación de doble factor especificado para el inicio de sesión.
                    </p>
                    <form onSubmit={handleLogin} autoComplete="off">
                        
                        <div className="d-flex flex-column password-block">
                            <InputText  id="sendedCode" 
                                        value={value}
                                        placeholder="Código para autenticación"
                                        onChange={(e) => setValue(e.target.value)}
                                        type={inputType}
                                        aria-describedby="codigo-app"
                                        className="p-invalid order-1"/>
                            <label htmlFor="sendedCode" className="order-0">Código recibido</label>
                            <p className="errorMsg order-2">El código no coincide con el enviado</p>
                            <Button icon={classNames('fa-light', {
                                        'fa-eye': showPassword,
                                        'fa-eye-slash': !showPassword,
                                    })}
                                    onClick={toggleShowPassword}
                                    className="show-password-btn p-button-outlined p-button-rounded order-2"
                                    type="button"
                            />
                        </div>

                        <Button label="Entrar" type="submit" className="p-button-primary w-100 mt-4" />
                    </form>
                </Card>

                <Toast ref={toast} className="login-toast" position="top-center"/>
            </div>
            <LoginFooter />
        </div>
    )
}

export default Autentification