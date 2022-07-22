import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Splashscreen from '../containers/Splashscreen';
import Back from '../containers/back';
import Pag1 from '../containers/Pag1'
import Pag2 from '../containers/Pag2'
import Pag3 from '../containers/Pag3'
import Registrer from '../containers/create'
import Home from '../containers/home'
import Very from '../containers/veryfication' 
class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Splashscreen/>}/>
                    <Route path="/Pag1" element={<Pag1/>}/>
                    <Route path="/Pag2" element={<Pag2/>}/>
                    <Route path="/Pag3" element={<Pag3/>}/>
                    <Route path="/Singin" element={<Back/>}/>
                    <Route path="/registrer" element={<Registrer/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/veryfication" element={<Very/>}/>
                
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;