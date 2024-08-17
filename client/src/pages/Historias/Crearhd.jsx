import { Box, TextField, Typography } from "@mui/material"

function Crearhd() {
  return (
    <>
    <Box sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 5,
          mt: 5,
          mr:50,
          mb:5,
          ml:45,
          minWidth: 300,
          width:1/2
        }}>
      <Typography textAlign={"center"}>Nueva Historia Diaria</Typography>
      <br />
      <TextField fullWidth id="FechaDiaria"  type="date" variant="outlined"></TextField>
      <br />
      <br />
      <TextField fullWidth id="Acompaniante" label="Acompañante" type="text" variant="outlined"></TextField>
      <br />
      <br />
      <TextField fullWidth id="Parentesco" label="Parentesco" type="text" variant="outlined"></TextField>
      <br />
      <br />
      <TextField fullWidth id="ReqPrueba" label="¿Requiere prueba?" type="text" variant="outlined"></TextField>
      <br />
      <br />
      <TextField fullWidth id="ReqProcedimiento" label="¿Requiere Procedimiento?" type="text" variant="outlined"></TextField>
      <br />
      <br />
      <TextField fullWidth id="Medico" label="Medico a cargo" type="text" variant="outlined"></TextField>

    </Box>

    </>
  )
}

export default Crearhd