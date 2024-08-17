import Login from '../pages/Login'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Pacientes from '../pages/Pacientes'
import Datosmaestros from '../pages/Datosmaestros'
import NotFoundPage from '../pages/NotFoundPage'
import {Routes, Route} from 'react-router-dom'
import Historiaclinica from '../pages/Historiaclinica'

function Routers() {
  return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/pacientes" element={<Pacientes/>}/>
  <Route path="/datosmaestros" element={<Datosmaestros/>}/>
  <Route path="/registro" element={<Signup/>}/>
  <Route path="/historiaclinica" element={<Historiaclinica/>}/>
  <Route path="*" element={<NotFoundPage/>}/>

</Routes>
}

export default Routers