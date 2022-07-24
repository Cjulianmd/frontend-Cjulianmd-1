import React, { Component } from 'react'

import { Re3, Apbari, Apbari2, Apbari3, Apbari4} from '../style/StyleGlobal'
import Home from "../assets/img/i1.svg";
import Test from "../assets/img/i2.svg";
import estadistica from "../assets/img/i3.svg";
import Profile from "../assets/img/i4.svg";
export default class apbar extends Component {
  render() {
    return (
      <div>
        <Re3>
        <Apbari> <img src={Home} alt=""/></Apbari>
        <Apbari2> <img src={Test} alt=""/></Apbari2>
        <Apbari3> <img src={estadistica} alt=""/></Apbari3>
        <Apbari4><img src={Profile} alt=""/></Apbari4>
        </Re3>
      </div>
    )
  }
}
