import {NavLink} from 'react-router-dom'
function Header(){
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/pacientes'>Pacientes</NavLink>
        </li>
        <li>
          <NavLink to='/datosmaestros'>Datos Maestros</NavLink>
        </li>
        <li>
          <NavLink to='/historiaclinica'>Historia Clinica</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header