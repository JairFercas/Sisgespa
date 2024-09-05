import { Box, Button, TextField } from "@mui/material"
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import { NavLink } from "react-router-dom";

function Login (){
  return (
    <Box>
      <h1>Bienvenido a Sisgespa</h1>
      <TextField id="email" label="Correo" type="email" variant="outlined"/>
      <br />
      <TextField id="password" label="Contraseña" type="password" variant="outlined"/>
      <br />
      <Button variant="contained" color="success" endIcon={<AssignmentIndSharpIcon/>} component={NavLink} to="/Home"> 
        Ingresar
      </Button>
    </Box>
  )
}

export default Login