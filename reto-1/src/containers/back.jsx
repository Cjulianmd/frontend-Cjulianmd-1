import React, { Component } from 'react'
import { TextB, TitleB, InputT, InputP, Log, TextB2, Texts} from '../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import Login from '../assets/img/login.svg'
import Tap1 from '../components/NavBar'
class back extends Component {
  render() {
    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <TitleB>
            Welcome back
         </TitleB>
         <TextB>
            Sign in to an existing account using your phone number
         </TextB>
         <form>
            <InputT placeholder="phone number" size="2em" />
            <InputP placeholder="Password" size="2em" />
         </form>
         <Log>
            <NavLink to="/veryfication">
                           <td><img src={Login} alt=""/></td>
            </NavLink>
         </Log>
         <TextB2>
         D’ont have account ?
         </TextB2>
         <NavLink to="/registrer">
            <Texts>Sign up</Texts> 
         </NavLink>
         
         </React.StrictMode>
      </div>
    )
  }
}
export default back;