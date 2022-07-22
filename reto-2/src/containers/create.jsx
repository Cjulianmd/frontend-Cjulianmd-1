import React, { Component } from 'react'
import { TextC, TitleC, InputT1, InputP1, Log, InputN, InputE} from '../style/StyleGlobal';
import {NavLink} from 'react-router-dom'
import Create from '../assets/img/create.svg';
import Tap1 from '../components/NavBar'
import axios from 'axios'

const baseUrl = 'http://localhost:4008/usuarios';
class create extends Component {
   state = {
      form: {
         nombre:'',
         email:'',
         telefono:'',
         password:''
      }
   }
   handleChange  = async evt => {
      await this.setState({
         form: {
            ...this.state.form,
            [evt.target.name]: evt.target.value
         }
      })
      
   }
   iniciarsesion = async () =>{console.log(this.state.form.telefono,this.state.form.password)
      await axios.pushs(baseUrl , 
         {params: {
         nombre: this.state.form.nombre,
         email: this.state.form.email,
         telefono:this.state.form.telefono,
         password: this.state.form.password,
         
            }})
        
        .catch(error =>{
           console.log(error)

        })
  }
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
         <form onSubmit={event => {
            event.preventDefault()
            ;console.log(event.target.telefono.value
            
            )}}>
            <InputN  name="nombre" placeholder="nombre" size="2em" onChange={this.handleChange} />
            <InputE name="email" placeholder="email" size="2em"  onChange={this.handleChange} />
            <InputT1 name="telefono" placeholder="phone number" size="2em" onChange={this.handleChange}/>
            <InputP1 name="Password" placeholder="Password" size="2em" onChange={this.handleChange} />
         </form>
         <Log>
            <NavLink to="/home" type="submit">
                           <td><img src={Create} alt=""/></td>
            </NavLink>
         </Log>
         </React.StrictMode>
      </div>
    )
  }
}
export default create;