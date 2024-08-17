import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import Navlistdrawer from "./Navlistdrawer"
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { NavLink } from "react-router-dom";


function Navbarmain() {

    const [open,setOpen] = useState(false);

  return (
    <>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" size = "large" onClick={()=> setOpen(true)}>
                    <ArrowForwardIosSharpIcon/>
                    <div></div>
                    <Typography variant="h5">Menu</Typography>
                </IconButton>
                <Typography variant="h5" sx={{flexGrow:1}}></Typography>
                <IconButton color="inherit" size = "small" component={NavLink} to="/Home">
                    <HomeSharpIcon/>
                    <Typography variant="h5">Home</Typography>
                </IconButton>
                <IconButton color="inherit" size = "small" component="a" href="/Login">
                    <LogoutSharpIcon/>
                    <Typography variant="h5">Logout</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer open={open} anchor="left" onClick={()=> setOpen(false)}>
            <Navlistdrawer/>
        </Drawer>
    </>
    
  )
}
//
export default Navbarmain