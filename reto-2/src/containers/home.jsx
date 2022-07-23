
import React, { Component } from 'react';
import { Re1, Re2 , Re3, Reta, TitleH, TextH, Coin, Noti, CoinN} from '../style/StyleGlobal'
import r1 from '../assets/img/relleno1.svg'
import r2 from '../assets/img/relleno2.svg'
import r3 from '../assets/img/relleno3.svg'
import Tap1 from '../components/NavBar'
import c from '../assets/img/coin.svg'
import h from '../assets/img/Notificacion.svg'
import Cookies from 'universal-cookie';

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
        let nombre = cookies.get('nombre');   
        return (
            
            <React.StrictMode>
               
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
                <Re1><td><img src={r1} alt=""/></td></Re1>
                <Re2><td><img src={r2} alt=""/></td></Re2>
                
                <Re3><td><img src={r3} alt=""/></td></Re3>
            </React.StrictMode>
        );
    }
}//&& start json-server --watch ./src/data/data.json --port 4008

export default Home;