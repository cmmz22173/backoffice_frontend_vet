import React from 'react';
import { BrowserRouter as Router,
        Route,
        Routes
 } from "react-router-dom";
 import NuevoEmpleado from '../pages/NuevoEmpleado';
 import NuevoServicio from '../pages/NuevoServicio';

function Rutas() {
  return (
    <Router>
        <Routes> 
            <Route path="/" element={ <NuevoEmpleado/>}/>  
            <Route path="/servicios" element={ <NuevoServicio/>}/>  
        </Routes>
    </Router>
  );
}

export default Rutas;