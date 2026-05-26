import { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import { classNames } from 'primereact/utils';

import logoBiscaytik from "../../assets/images/biscaytik-logo.svg";
import LoginFooter from "../../shared/components/LoginFooter";


function Login() {
  
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : 'password';

  const navigate = useNavigate();

  //variables login exitoso
  const [loginExitoso, setLoginExitoso] = useState(false);
  //variable toast
  const toast = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginExitoso(true);
    
    if(loginExitoso) {
      toast.current.show({  severity: 'success',
                            summary: 'Acceso exitoso', 
                            detail: 'Los credenciales añadidos son correctos' 
                        });
      
      setTimeout(() => {
        // Redirigir a la página de cambiar contraseña si es la primera vez que se accede
         navigate('/change-password');
      }, 2000);

    }else{
      toast.current.show({  severity: 'error', 
                            summary: 'Las credenciales de acceso no son correctas y el inicio de sesión no es válido.', 
                            detail: `Parece que el usuario al que intenta acceder está bloqueado. Por favor, contacte con el organismo correspondiente para subsanarlo a la menor brevedad posible.` 
                        });
    }
    
  };

  return (
    <>
      <div className="access-section">
        <div className="login-card">
          <Card>
            <img className="logo" src={logoBiscaytik} alt="Biscaytik logo" />
            <h2>Accede con tu cuenta</h2>
            <form onSubmit={handleLogin}>

                  <div className="d-flex flex-column mb-3">
                    <InputText id="username" placeholder="Nombre de usuario" aria-describedby="codigo-app" className="order-1"/>
                    <label htmlFor="username" className="order-0">Usuario</label>
                    <p className="errorMsg order-2">Usuario no válido</p>
                  </div>

                  <div className="d-flex flex-column password-block mb-1">
                    
                    <InputText  id="password" 
                                value={value}
                                placeholder="Añadir contraseña"
                                onChange={(e) => setValue(e.target.value)}
                                type={inputType}
                                aria-describedby="codigo-app"
                                className="order-1"/>
                    <label htmlFor="password" className="order-0">Contraseña</label>
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

                  <Button label="Entrar" type="submit" className="p-button-primary w-100 mt-3" />
                  <div className="login-divider"><span>o</span></div>
                  <Button label="Acceso con certificado digital" type="button" className="p-button-outlined btn-digital w-100" />

            </form>
          </Card>

          <Toast ref={toast} position="top-center"/>

        </div>
        <LoginFooter/>
      </div>
    
    </>
    
  )
}

export default Login