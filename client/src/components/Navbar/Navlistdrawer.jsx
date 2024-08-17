import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"
import CreateNewFolderSharpIcon from '@mui/icons-material/CreateNewFolderSharp';
import DifferenceSharpIcon from '@mui/icons-material/DifferenceSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function Navlistdrawer() {
  return (
    <Box sx={{width:250, bgcolor: "skyblue", color:"white"}}>
        <nav>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <AccountCircleSharpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Usuario: JFERNANDEZ" />
                </ListItem>
            </List>
        </nav>
        <Divider/>
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/Home">
                        <ListItemIcon>
                            <HomeSharpIcon/>
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/Pacientes">
                        <ListItemIcon>
                            <GroupsSharpIcon/>
                        </ListItemIcon>
                        <ListItemText>Pacientes</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/HistoriaClinica">
                        <ListItemIcon>
                            <CreateNewFolderSharpIcon/>
                        </ListItemIcon>
                        <ListItemText>Historia Clinica</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#historiadiaria">
                        <ListItemIcon>
                            <DifferenceSharpIcon/>
                        </ListItemIcon>
                        <ListItemText>Historia Diaria</ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="/Datosmaestros">
                        <ListItemIcon>
                            <AssignmentSharpIcon/>
                        </ListItemIcon>
                        <ListItemText>Datos Maestros</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}

export default Navlistdrawer