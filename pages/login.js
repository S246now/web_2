export default function Login(){
    return(
        <div>
            <h1>Registrar</h1>
            <form action="/api/regitro" method="post">
                <label>Usuario:</label>
                <input type="text" name="usuario" placeholder="ingrese un usuario"></input>
                <label>Contraseña:</label>
                <input type="password" name="contraseña" placeholder="ingrese una contraseña"></input>

                <button type="submit">Resgistrarse</button>
            </form>


            <h1>Ingresar</h1>
            <form>
                <label>Usuario:</label>
                <input type="text" name="usuario" placeholder="ingrese un usuario"></input>
                <label>Contraseña:</label>
                <input type="password" name="contraseña" placeholder="ingrese una contraseña"></input>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}