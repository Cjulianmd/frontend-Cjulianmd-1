import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import r1 from '../assets/img/Stars.svg'
import r2 from '../assets/img/coin.svg'
import {NavLink} from 'react-router-dom'
import r5 from '../assets/img/flecha.svg'
import { BtNext, BtpreN, Congratulations, Starts, T2, TC2, Textacon1 } from '../style/StyleGlobal';
import { T1, C2, Back } from './../style/StyleGlobal';
import axios from 'axios'
const cookies = new Cookies ();
const baseUrl = 'https://sprint-2-1.herokuapp.com/usuarios/';
export default function coinswin(){ 
    let nombre = cookies.get('nombre'); 
    let email = cookies.get('email');
    let telefono = cookies.get('telefono');
    let coins = cookies.get('coins');
    let password = cookies.get('password'); 
    let point = cookies.get('puntuacion');//
    let coin = coins+ point
    function coipu(){
        
        window.location.href="./test";
        axios.put(baseUrl+password, {
            nombre:nombre,
            email:email,
            telefono:telefono,
            password: password,
            id: password,
            coins: point
            })
            
        .then(response =>{
            console.log(response);
            
        })
        .catch(error =>{
            console.log(error)
        })}
    cookies.set('coins', point, {phat: "/"});
    return (
        
      <div>
        <NavLink to='/test'><Back><img src={r5} alt=""/></Back></NavLink>
        <Textacon1>About business</Textacon1>
        <Starts>
        <img src={r1} alt=""/>
        </Starts>
        <Congratulations>Congratulations</Congratulations>
        <T1>You have completed the test</T1>
        <T2>{point} correct answers</T2>
        <C2><img src={r2} alt=""/><TC2>{point}</TC2></C2>
        <BtNext onClick={() => coipu()}><center><BtpreN>save</BtpreN></center></BtNext>
      </div>
    )
}
