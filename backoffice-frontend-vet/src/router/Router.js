import React from 'react';
import { BrowserRouter as Router,
        Route,
        Routes
 } from "react-router-dom";
 import NuevoEmpleado from '../pages/NuevoEmpleado';
 import NuevoServicio from '../pages/NuevoServicio';
import BuscarCliente from '../pages/BuscarCliente';
import Home from '../pages/Home';

function Rutas() {
  return (
    <Router>
        <Routes> 
            <Route path="/" element={ <Home/>}/>  
            <Route path="/crear/empleado" element={ <NuevoEmpleado/>}/>  
            <Route path="/crear/servicio" element={ <NuevoServicio/>}/>  

            <Route path="/buscar/cliente" element={ <BuscarCliente/>}/> 
        </Routes>
    </Router>
  );
}

export default Rutas;