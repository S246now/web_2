import Form from '../components/form';
import { useState } from 'react';


export default function Login() {

    /* variable de estado para guardar si el usuario ha iniciado sesión o no */
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    return(
        <div>
            <div>
                <h1>Registrar</h1>
            </div>
            <Form></Form>

            <div> 
                {/* <h1>Registrar</h1>   
                <form action="/api/regitro" method="post">
                    <label>Correo:</label>
                    <input type="email" name="correo" placeholder="ingrese su correo"></input>
                    <label>Contraseña:</label>
                    <input type="password" name="contraseña" placeholder="ingrese una contraseña"></input>

                    <button type="submit">Resgistrarse</button>
                    
                </form> */}

                <h1>Ingresar</h1>
                <form action='/api/login' method='POST'>
                    <label>Correo:</label>
                    <input type="text" name="correo" placeholder="ingrese su correo"></input>
                    <label>Contraseña:</label>
                    <input type="password" name="contraseña" placeholder="ingrese su contraseña"></input>

                    <button type="submit" onClick={handleLogin}>Ingresar</button>
                </form>
            </div>
        </div> 
    )
}