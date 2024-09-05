/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import { useState } from 'react';

function Pacientes (){
  //Lado izquierdo
  const[NombresPx, setNombresPx] = useState("");
  const[ApePatPx, setApePatPx] = useState("");
  const[ApeMatPx, setApeMatPx] = useState("");
  const[TipoDoc, setTipoDoc] = useState("");
  const[NumDoc, setNumDoc] = useState("");
  const[Direccion, setDireccion] = useState("");
  const[NumCel, setNumCel] = useState(0);
  const[Correo, setCorreo] = useState("");

  //Lado derecho
  const[Nacionalidad, setNacionalidad] = useState("");
  const[FechaNac, setFechaNac] = useState("");
  const[Sexo, setSexo] = useState("");
  const[Idioma, setIdioma] = useState("");
  const[ContactoE, setContactoE] = useState(0);
  const[NumeroE, setNumeroE] = useState("");
  const notfRegitro = "";
  

  return (
    <Grid container spacing={5}>
      
      <Grid item xs={12} sm={6}>
        <Box  sx={{ p: 2, border: '1px grey' }} >
          <Typography label="REGISTRO DE PACIENTE"/>
          <TextField formControl id="NombresPx" label="Nombres" type="text" variant="outlined" fullWidth  required onChange={e => setNombresPx(e.target.value)}/>
          <TextField formControl id="ApePatPx" label="Apellido paterno" type="text" variant="outlined" fullWidth  required onChange={event=>setApePatPx(event.target.value)}/>
          <TextField formControl id="ApeMatPx" label="Apellido materno" type="text" variant="outlined" fullWidth  required onChange={event=>setApeMatPx(event.target.value)}/>
          <TextField formControl id="TipoDoc" label="Tipo de documento" type="text" variant="outlined" fullWidth  required onChange={event=>setTipoDoc(event.target.value)}/>
          <TextField formControl id="NumDoc" label="N° de documento" type="number" variant="outlined" fullWidth  required onChange={event=>setNumDoc(event.target.value)}/>
          <TextField formControl id="Direccion" label="Direccion" type="text" variant="outlined" fullWidth  required onChange={event=>setDireccion(event.target.value)}/>
          <TextField formControl id="NumCel" label="Numero de celular" type="number" variant="outlined" fullWidth  required onChange={event=>setNumCel(event.target.value)}/>
          <TextField formControl id="Correo" label="Correo electronico" type="email" variant="outlined" fullWidth required onChange={event=>setNumCel(event.target.value)}/>         
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}> 
        <Box  sx={{ p: 2, border: '1px grey' }} >
            <TextField formControl id="Nacionalidad" label="Pais" type="text" variant="outlined" fullWidth helperText="Ingresa tu país de nacimiento" onChange={event=>setNacionalidad(event.target.value)}/>
            <TextField formControl id="FechaNac" label="Fecha de nacimiento" type="date" variant="outlined" fullWidth onChange={event=>setFechaNac(event.target.value)}/>
            <TextField formControl id="Sexo" label="Genero" type="text" variant="outlined" fullWidth  onChange={event=>setSexo(event.target.value)}/>
            <TextField formControl id="Idioma" label="Idioma" type="text" variant="outlined" fullWidth  onChange={event=>setIdioma(event.target.value)}/>
            <TextField formControl id="ContactoE" label="Contacto de emergencia" type="number" variant="outlined" fullWidth  onChange={event=>setContactoE(event.target.value)}/>
            <TextField formControl id="NumeroE" label="Numero del contacto de emergencia" type="number" variant="outlined" fullWidth  onChange={event=>setNumeroE(event.target.value)}/>
            <Button variant="contained" color="success" endIcon={<AssignmentIndSharpIcon/>} onClick={notfRegitro}>
              Registrar
            </Button>
          </Box>
      </Grid>
    </Grid>
    
  )
}
export default Pacientes