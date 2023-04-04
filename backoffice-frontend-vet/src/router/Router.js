import React from 'react';
import { BrowserRouter as Router,
        Route,
        Routes
 } from "react-router-dom";
 import NuevoEmpleado from '../pages/NuevoEmpleado';

function Rutas() {
  return (
    <Router>
        <Routes> 
            <Route path="/" element={ <NuevoEmpleado/>}/>  
        
        </Routes>
    </Router>
  );
}

export default Rutas;