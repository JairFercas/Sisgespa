import { Button } from "@mui/material"
import { NavLink } from "react-router-dom";

function Buscarhd() {
  return (
    <>
      <div>Buscarhd</div>
      <Button component={NavLink} to="Crearhd">Nueva Historia Diaria</Button>
    </>
  )
}

export default Buscarhd