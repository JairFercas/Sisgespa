/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import { React , useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/create',{NombresPx,ApePatPx,ApeMatPx,TipoDoc,NumDoc,Direccion, NumCel, Correo, Nacionalidad, FechaNac, Sexo, Idioma, ContactoE, NumeroE})
    .then(res => {
      console.log(NombresPx,ApePatPx,ApeMatPx,TipoDoc,NumDoc,Direccion, NumCel, Correo, Nacionalidad, FechaNac, Sexo, Idioma, ContactoE, NumeroE)
    })
    .catch(err => console.log(err));
  }
//<form onSubmit={handleSubmit}></form>
  return (
    
    <Box >
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <Box  sx={{ p: 2, border: '1px grey' }} >
          <Typography label="REGISTRO DE PACIENTE"/>
          
          <TextField name="NombresPx" label="Nombres" type="text" variant="outlined" fullWidth  required onChange={e => setNombresPx(e.target.value)}/>
            <br />
          <TextField name="ApePatPx" label="Apellido paterno" type="text" variant="outlined" fullWidth  required onChange={e=>setApePatPx(e.target.value)}/>
            <br />
          <TextField name="ApeMatPx" label="Apellido materno" type="text" variant="outlined" fullWidth  required onChange={e=>setApeMatPx(e.target.value)}/>
            <br />
          <TextField name="TipoDoc" label="Tipo de documento" type="text" variant="outlined" fullWidth  required onChange={e=>setTipoDoc(e.target.value)}/>
            <br />
          <TextField name="NumDoc" label="N° de documento" type="number" variant="outlined" fullWidth  required onChange={e=>setNumDoc(e.target.value)}/>
            <br />
          <TextField name="Direccion" label="Direccion" type="text" variant="outlined" fullWidth  required onChange={e=>setDireccion(e.target.value)}/>
            <br />
          <TextField name="NumCel" label="Numero de celular" type="number" variant="outlined" fullWidth  required onChange={e=>setNumCel(e.target.value)}/>
            <br />
          <TextField name="Correo" label="Correo electronico" type="email" variant="outlined" fullWidth required onChange={e=>setCorreo(e.target.value)}/>         
            <br />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}> 
        <Box  sx={{ p: 2, border: '1px grey' }} >
            <TextField name="Nacionalidad" label="Pais" type="text" variant="outlined" fullWidth helperText="Ingresa tu país de nacimiento" onChange={e=>setNacionalidad(e.target.value)}/>
              <br />
            <TextField name="FechaNac" label="Fecha de nacimiento" type="date" variant="outlined" fullWidth onChange={e=>setFechaNac(e.target.value)}/>
              <br />
            <TextField name="Sexo" label="Genero" type="text" variant="outlined" fullWidth  onChange={e=>setSexo(e.target.value)}/>
              <br />
            <TextField name="Idioma" label="Idioma" type="text" variant="outlined" fullWidth  onChange={e=>setIdioma(e.target.value)}/>
              <br />
            <TextField name="ContactoE" label="Contacto de emergencia" type="text" variant="outlined" fullWidth  onChange={e=>setContactoE(e.target.value)}/>
              <br />
            <TextField name="NumeroE" label="Numero del contacto de emergencia" type="number" variant="outlined" fullWidth  onChange={e=>setNumeroE(e.target.value)}/>
              <br />
            <Button type='submit' variant="contained" color="success" endIcon={<AssignmentIndSharpIcon/>}>
              Registrar
            </Button>
          </Box>
      </Grid>
    </Grid>
    </Box>
    
    
  )
}
export default Pacientes