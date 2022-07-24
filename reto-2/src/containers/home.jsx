
import React, { Component } from 'react';
import { Re1, Re2 } from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import Rectangulo from '../components/rectangulo'
import Cookies from 'universal-cookie';
import ApBar from '../components/apbar'
const cookies = new Cookies ();
class Home extends Component {
    cerrarsesion=()=>{
        cookies.remove('nombre', {path:"/Singin"})
        cookies.remove('nombre', {path:"/Singin"});
        cookies.remove('nombre', {path:"/Singin"});
        cookies.remove('telefono', {path:"/Singin"});
        //window.location.href="./Singin";
        console.log(cookies.get('nombre'), "cerraste secion")
    }
    componentDidMount(){if(!cookies.get('nombre')){window.location.href="./Singin";} }
    
    render() {
          
        return (
            
            <React.StrictMode>
               <Rectangulo/>
                <Re1><td><img src={r1} alt=""/></td></Re1>
                <Re2><td><img src={r2} alt=""/></td></Re2>
                <ApBar/>
            </React.StrictMode>
        );
    }
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Home;