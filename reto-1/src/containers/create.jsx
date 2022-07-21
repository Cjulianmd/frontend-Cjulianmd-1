import React, { Component } from 'react'
import { TextC, TitleC, InputT1, InputP1, Log, InputN, InputE} from '../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import Create from '../assets/img/create.svg';
import Tap1 from '../components/NavBar'
class back extends Component {
  render() {
    return (
      <div>
         <React.StrictMode>
         <Tap1/>
         <TitleC>
            Create new Account
         </TitleC>
         <TextC>
         Create a new account by filling in all the fields or log in to an existing account
         </TextC>
         <form>
            <InputN placeholder="nombre" size="2em" />
            <InputE placeholder="email" size="2em" />
            <InputT1 placeholder="phone number" size="2em" />
            <InputP1 placeholder="Password" size="2em" />
         </form>
         <Log>
            <NavLink to="/home">
                           <td><img src={Create} alt=""/></td>
            </NavLink>
         </Log>
         </React.StrictMode>
      </div>
    )
  }
}
export default back;