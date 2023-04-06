import * as React from 'react';
import  { useState } from 'react'
import ButtonAppBar from '../components/Navbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid} from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
const columns = [
        { field: 'id', headerName: 'ID', width: 100, headerClassName: 'theme--header', },
        { field: 'nombre', headerName: 'Nombre', width: 200,headerClassName: 'theme--header',},
        { field: 'tipo', headerName: 'Tipo', width: 150 ,headerClassName: 'theme--header',},
        { field: 'raza', headerName: 'Raza', width: 150 ,headerClassName: 'theme--header',},
        { field: 'edad', headerName: 'Edad', width: 100 ,headerClassName: 'theme--header',},
        { field: 'discapacidades', headerName: 'Discapacidades', width: 450 ,headerClassName: 'theme--header',},
        
      ];
    
      const rows = [
        { id: 1, nombre: 'Boomer',tipo:"perro",raza:"Terrier",edad:"5"},
        { id: 2, nombre: 'Ricky',tipo:"perro",raza:"Husky",edad:"10"},
      ];

export default function BuscarCliente(){

    
    const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
    

    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Resto del código de envío de formulario
    };
    

    return(
        <>
        <ButtonAppBar/>
        
            <Box sx={{ p: 5,ml:5,mr:5 }}>
                
                    <Grid sx={{ background: "white" }} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <Typography sx={{
                                fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 24, mt: 5,mb:5,
                            }} color="text.secondary" component="div">
                                Buscar Cliente
                                
                            </Typography>
                        </Grid>
                       
                            <Grid item xs={6} marginBottom={3}>
                                <TextField
                                    type='number'
                                    size='small'
                                    fullWidth id="servicio" label="Identidad" variant="outlined" />
                            </Grid>

                            <Grid item xs={6} marginBottom={3}>
                                <IconButton size="large" variant="contained" color="secondary" type="submit"><SearchIcon/></IconButton>
                            </Grid>
                        
                        <Grid item xs={3}>
                            
                            <Typography sx={{
                                    fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 16,
                                }} color="grey" component="div">
                                    Nombre completo
                                    <Typography sx={{
                                        fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 14,
                                    }} color="text.secondary" component="div">
                                        Cristian XXXXXX XXXXXXXXX XXXXXX
                                    </Typography>
                                </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{
                                    fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 16,
                                }} color="text.secondary" component="div">
                                    Identidad
                                    <Typography 
                                    sx={{
                                        fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 14,
                                        }} color="text.secondary" component="div">
                                        xxxxxxxxxxxxxxxxXX
                                    </Typography>
                                </Typography>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography sx={{
                                    fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 16,
                                }} color="text.secondary" component="div">
                                    Telefono
                                    <Typography 
                                    sx={{
                                        fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 14,
                                        }} color="text.secondary" component="div">
                                        xxxxxxxxxxxxxxxxXX
                                    </Typography>
                                </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{
                                    fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 16,
                                }} color="text.secondary" component="div">
                                    Correo
                                    <Typography 
                                    sx={{
                                        fontFamily: 'Font Awesome 5 Free', letterSpacing: "0.12em", fontWeight: 400, fontSize: 14,
                                        }} color="text.secondary" component="div">
                                        xxxxxxxxxxxxxxxxXX
                                    </Typography>
                                </Typography>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="flex-end">
                            <Button size="small" variant="outlined" color="secondary" type="submit">Mas informacion</Button>
                        </Grid>

                        <Grid item xs={12}>
                                <Box 
                                sx={{ 
                                    height: 280, 
                                    width: '100%' ,
                                     '& .theme--header': {
                                        
                                        },
                                        
                                    }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: {
                                                    pageSize: 3,
                                                },
                                            },
                                        }}
                                        onRowSelectionModelChange={(newRowSelectionModel) => {
                                            setRowSelectionModel(newRowSelectionModel);
                                        }}
                                        rowSelectionModel={rowSelectionModel}
                                        pageSizeOptions={[3]}
                                        
                                        disableRowSelectionOnClick
                                        
                                    />
                                </Box>    
                        </Grid>
                    </Grid>
                
            </Box>
        </>
    );
}