import React, { Component } from 'react'
import Tap1 from '../components/NavBar'
import c from '../assets/img/coin.svg'
import h from '../assets/img/Notificacion.svg'
import {Reta, TitleH, TextH, Coin, Noti, CoinN} from '../style/StyleGlobal'
import Cookies from 'universal-cookie';

const cookies = new Cookies ();
export default class rectangulo extends Component {
  render() {

    let nombre = cookies.get('nombre'); 
    return (
      <div>
        
        <Reta>
            <Coin><td><img src={c} alt=""/></td></Coin><CoinN>400</CoinN>
                <Noti><td><img src={h} alt=""/></td></Noti>
                <Tap1/>
                    <TitleH>
                        Hi,{nombre} 
                    </TitleH> 
                    <TextH>
                        Let’s start learning
                    </TextH>
         </Reta>
      </div>
    )
  }
}
