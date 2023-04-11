import React from 'react';
import { BrowserRouter as Router,
        Route,
        Routes
 } from "react-router-dom";
 import NuevoEmpleado from '../pages/NuevoEmpleado';
 import NuevoServicio from '../pages/NuevoServicio';
import BuscarCliente from '../pages/BuscarCliente';
import Home from '../pages/Home';
import NuevoCliente from '../pages/NuevoCliente';
import CrearCita from '../pages/CrearCita';
import RegistroCitas from '../pages/Citas';
import EditarEmpleado from '../pages/EditarEmpleado';
import EditarSerivicio from '../pages/EditarServicio';
import Login from '../pages/Login';

function Rutas() {
  return (
    <Router>
        <Routes> 
            <Route path="/" element={ <Home/>}/>  
            <Route path="/login" element={ <Login/>}/>

            <Route path="/crear/empleado" element={ <NuevoEmpleado/>}/>
            <Route path="/crear/cita" element={ <CrearCita/>}/>   
            <Route path="/crear/servicio" element={ <NuevoServicio/>}/>  
            <Route path="/crear/cliente" element={ <NuevoCliente/>}/> 

            <Route path="/buscar/cliente" element={ <BuscarCliente/>}/> 
            <Route path="/registros/citas" element={ <RegistroCitas/>}/>

            <Route path="/editar/empleado" element={ <EditarEmpleado/>}/>  
            <Route path="/editar/servicio" element={ <EditarSerivicio/>}/>  
        </Routes>
    </Router>
  );
}

export default Rutas;