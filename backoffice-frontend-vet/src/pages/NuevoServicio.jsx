import * as React from 'react';
import  { useState } from 'react'
import ButtonAppBar from '../components/Navbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NuevoServicio(){

    const [precio, setPrecio] = useState('');

    const [nombreError, setNombreError] = useState(false);
    const [precioError, setPrecioError] = useState(false);

    const [nombreHelperText, setNombreHelperText] = useState('');
    const [precioHelperText, setPrecioHelperText] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Resto del código de envío de formulario
    };
    

    return(
        <>
        <ButtonAppBar/>
        
        <Box sx={{p:5,width: "90%",display: "flex",justifyContent: "center",flexWrap: 'wrap'}}>
       
            <form onSubmit={handleSubmit}>
                
                    <Grid sx={{background:"white"}} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                         <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400, fontSize:24,mt:5
                            }} color="text.secondary" component="div">
                            Nuevo Servicio
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField 
                        type='text'
                        error={nombreError}
                        helperText={nombreHelperText}

                        onChange={(e) => {
                            setPrecio(e.target.value);
                            if (!isNaN(e.target.value)) {
                              setNombreError(true);
                              setNombreHelperText('El nombre no es valido');
                            } else {
                              setNombreError(false);
                              setNombreHelperText('');
                            }
                          }}
                        required fullWidth id="servicio" label="Nombre del servicio" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField
                        error={precioError}
                        helperText={precioHelperText}
                        onChange={(e) => {
                            setPrecio(e.target.value);
                            if (e.target.value === '0' || e.target.value<0) {
                              setPrecioError(true);
                              setPrecioHelperText('El precio no es valido');
                            } else {
                              setPrecioError(false);
                              setPrecioHelperText('');
                            }
                          }}
                        required type='number' fullWidth id="precio" label="Precio" variant="outlined" />
                        </Grid>

                        <Grid item xs={12}>
                        <TextField multiline fullWidth id="descripcion" label="Descripcion" variant="outlined" />
                        </Grid>
                    </Grid>

                        <Box display="flex" justifyContent="flex-end" marginTop="1rem">
                            <Button variant="contained" color="primary" type="submit">Guardar</Button>
                        </Box>
            </form>
        </Box>
        </>
    );
}