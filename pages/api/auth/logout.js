//si usará el jwt, aquí eliminaría las cookies

async function LogoutHandler(req, res) {

    res.status(200).json({ message: 'Logout successful' });
  }
  
export default LogoutHandler;
  