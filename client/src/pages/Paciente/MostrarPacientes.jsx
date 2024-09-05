/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import axios from 'axios';

function MostrarPacientes() {
    const[data, setData] = useState([]);    
    useEffect(()=>{
        axios.get('http://localhost:8080/')
        .then(res => setData(res.data))
        .catch(err=> console.log(err));
        console.log(data)
    })
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white rounded w-50 p-3">
            <Typography label="PACIENTES REGISTRADOS"/>
            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos paterno</th>
                        <th>Apellidos materno</th>
                        <th>Documento</th>
                        <th>Numero Documento</th>
                        <th>Direccion</th>
                        <th>Numero de contacto</th>
                        <th>Correo</th>

                        <th>Nacionalidad</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Sexo</th>
                        <th>Idioma</th>
                        <th>Contacto de emergencia</th>
                        <th>Numero del contacto</th>
                        <th>Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( (d, i)=>(
                        <tr>
                            <td>{d.NombresPx}</td>
                            <td>{d.ApePatPx}</td>
                            <td>{d.ApeMatPx}</td>
                            <td>{d.TipoDoc}</td>
                            <td>{d.NumDoc}</td>
                            <td>{d.Direccion}</td>
                            <td>{d.NumCelular}</td>
                            <td>{d.CorreoPac}</td>

                            <td>{d.Nacionalidad}</td>
                            <td>{d.FechaNacimiento}</td>
                            <td>{d.Genero}</td>
                            <td>{d.Idioma}</td>
                            <td>{d.ContactoE_nombre}</td>
                            <td>{d.ContactoE_celular}</td>
                            <td>{d.FechaRegistro}</td>
                        </tr>
                    ) )}
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default MostrarPacientes