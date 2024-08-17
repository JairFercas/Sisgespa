// eslint-disable-next-line no-unused-vars
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Button, Grid } from '@mui/material';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';

function Pacientes (){
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <Button variant="contained" color="success" endIcon={<AssignmentIndSharpIcon/>}>
          Registrar
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}> 
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <label htmlFor="NombresPx">Nombre del paciente</label>
        <Button variant="contained" color="success" endIcon={<AssignmentIndSharpIcon/>}>
          Registrar
        </Button>
      </Grid>
    </Grid>
    
  )
}

export default Pacientes