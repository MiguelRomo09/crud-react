import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
    let navigation = useNavigate();

    const [empleado, setEmpleado]=useState({
        nombre:"",
        departamento: "",
        sueldo:""
    })

    const{nombre, departamento, sueldo} = empleado;

    const onInputChange = (e) => {
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "https://crudspirng-production.up.railway.app/crud-app/empleados";
        await axios.post(urlBase, empleado);
        navigation('/');
    }
  return (
    <div className='container'>
        <div className='container' style={{ margin: "30px" }}>
            <h3>Agregar Empleado</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' required={true}
                    value={nombre} onChange={ (e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="departamento" name='departamento'
                    value={departamento} onChange={ (e) => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label">Sueldo</label>
                    <input type="any" className="form-control" id="sueldo" name='sueldo'
                    value={sueldo} onChange={ (e) => onInputChange(e)}/>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                    <a href='/' className='btn btn-danger btn-sm'>Regresar</a>   
                </div>
            </form>
        </div>
    </div>
  )
}
