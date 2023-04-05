import * as React from 'react';
import  { useState } from 'react'
import ButtonAppBar from '../components/Navbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid, selectedIdsLookupSelector } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Servicio', headerName: 'Funciones de empleado', width: 350 },
   
    
  ];

  const rows = [
    { id: 1, Servicio: 'Veterinaria'},
    { id: 2, Servicio: 'Lavado'},
    { id: 3, Servicio: 'Vendedor'},
    
  ];
  

export default function NuevoEmpleado(){

    const [genero, setGenero] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        identidad: '',
        direccion:'',
        correo:'',
        telefono:'',
      });

      const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues({ ...formValues, [id]: value });
      };  

    const handleSelectGenero = (event) => {
      setGenero(event.target.value);
    };

    const handleSelectNacionalidad = (event) => {
        setNacionalidad(event.target.value);
      };
  
    const handleSubmit = (event) => {
      
      event.preventDefault();
      console.log(genero);
      console.log(rowSelectionModel);
      console.log(formValues.nombre);
      console.log(formValues.apellido);
      console.log(formValues.identidad);
      console.log(formValues.direccion);
      console.log(formValues.correo);
      console.log(formValues.telefono);


      
    };



    return(
        <>
        <ButtonAppBar/>
         <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400, fontSize:24,mt:5,ml:5,
            }} color="text.secondary" component="div">
               Nuevo Empleado
             </Typography>
        <Box sx={{p:5,width: "90%",display: "flex",justifyContent: "center",flexWrap: 'wrap'}}>
       
            <form onSubmit={handleSubmit}>
                <Stack direction="row"  spacing={1}>
                
                    <Grid sx={{background:"white"}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        
                        <Grid item xs={6}>
                        <TextField
                        onChange={handleChange}
                        value={formValues.nombre}
                        type='text' required fullWidth id="nombre" label="Nombre" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                         onChange={handleChange}
                         value={formValues.apellido}
                        type='text' required fullWidth id="apellido" label="Apellido" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                         onChange={handleChange}
                         value={formValues.identidad}
                        type='number' required fullWidth id="identidad" label="Identidad" variant="outlined" />
                        </Grid>

                        <Grid item xs={2}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                                <Select 
                                required
                                labelId="select-label" 
                                id="genero" 
                                label="Genero" 
                                value={genero} 
                                onChange={handleSelectGenero}>
                                    <MenuItem value="Masculino">Masculino</MenuItem>
                                    <MenuItem value="Femenino">Femenino</MenuItem>
                                    <MenuItem value="Otro">Otro</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="nacionalidad">Nacionalidad</InputLabel>
                                <Select 
                                required
                                labelId="select-genero" 
                                id="genero" 
                                label="Genero" 
                                value={nacionalidad} 
                                onChange={handleSelectNacionalidad}>
                                    <MenuItem value="opcion1">Honduras</MenuItem>
                                    <MenuItem value="opcion2">Venezuela</MenuItem>
                                    <MenuItem value="opcion3">El Salvador</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={6}>
                        <TextField
                         onChange={handleChange}
                         value={formValues.correo}
                        required fullWidth id="correo" label="Correo" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                         onChange={handleChange}
                         value={formValues.telefono}
                        required type='number' fullWidth id="telefono" label="Telefono" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                         onChange={handleChange}
                         value={formValues.direccion}
                        required multiline fullWidth id="direccion" label="Direccion" variant="outlined" />
                        </Grid>
                    </Grid>

                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={10}>
                            <Box sx={{ height:280, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                                }}
                                onRowSelectionModelChange={(newRowSelectionModel) => {
                                    setRowSelectionModel(newRowSelectionModel);
                                  }}
                                  rowSelectionModel={rowSelectionModel}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                            </Box>

                        
                        </Grid>
                        
                    </Grid>
                    
                </Stack>
                    <Box display="flex" justifyContent="flex-end" marginTop="1rem" marginRight="7rem">
                        <Button disabled={(rowSelectionModel.length===0)?true:false} variant="contained" color="primary" type="submit">Guardar</Button>
                    </Box>
            </form>
        </Box>
        </>
    );
}