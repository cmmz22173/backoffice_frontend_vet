import * as React from 'react';
import ButtonAppBar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

export default function Home(){
    return(
        <>
        <ButtonAppBar/>
        <Dashboard/>
        </>
    );
}