import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Name.svg'
import r2 from '../assets/img/Gmail.svg'
import r3 from '../assets/img/Phone number.svg'
import r4 from '../assets/img/unitstates.svg'
import r5 from '../assets/img/flecha.svg'
import r6 from '../assets/img/Exit.svg'
import {  Re7, Re2, Textacon, Textacon1, Back } from '../style/StyleGlobal'
import {NavLink} from 'react-router-dom'


const cookies = new Cookies ();
export default class acconysent extends Component {
    cerrarsesion=()=>{
        cookies.remove('nombre', {path:"/Singin"})
        cookies.remove('password', {path:"/Singin"});
        cookies.remove('email', {path:"/Singin"});
        cookies.remove('telefono', {path:"/Singin"});
        window.location.href="./Singin";
        console.log(cookies.get('nombre'), "cerraste seci")
    }
    componentDidMount(){if(!cookies.get('nombre')){window.location.href="../Singin";} }
  render() {
    
    let nombre = cookies.get('nombre'); 
    let email = cookies.get('email');
    let telefono = cookies.get('telefono');
    return (
      <div>
        <NavLink to='/pagina-perfil'><Back><img src={r5} alt=""/></Back></NavLink>
        <NavLink to='/Actualizardatos'><Textacon1>Account settings</Textacon1>
        <Re2><Textacon>{nombre}</Textacon><img src={r1} alt=""/></Re2>
        <Re2><td><Textacon>{email}</Textacon><img src={r2} alt=""/></td></Re2>
        <Re2><td><Textacon>{telefono}</Textacon><img src={r3} alt=""/></td></Re2></NavLink>
        <Re2><td><img src={r4} alt=""/></td></Re2>
        <Re7><img onClick={() => this.cerrarsesion()} src={r6} alt=""/></Re7>
      </div>
    )
  }
}
