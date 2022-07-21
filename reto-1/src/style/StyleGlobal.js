
import styled from 'styled-components';


export const NavBarStyled = styled.nav `
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

 
    
` 
export const Tab = styled.div` 
    position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 94.79%;

`
export const Img1 = styled.div`
    backgroud-image: linear-gradient(315deg, blue 0%, blue 100%,)
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    width: 170px;
    left: calc(50% - 170px/2);
    top: 41.79%;
    bottom: 41.86%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    
`

export const Img2 = styled.div`
    backgroud-image: linear-gradient(315deg, blue 0%, blue 100%,)
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    left: 17.69%;
    right: 17.69%;
    top: 25.24%;
    bottom: 46.09%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    
    
`

export const ButtonN = styled.div`

    position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 760px;

`
export const TitleN = styled.div`
    position: absolute;
    left: 4.1%;
    right: 16.15%;
    top: 70.85%;
    bottom: 25.71%;

    font-family: 'Inter';sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.3px;

    /* Dark color */

    color: #4B4B4B;


`

export const TextN = styled.div`

    position: absolute;
    left: 6.1%;
    right: 16.15%;
    top: 75%;
    bottom: 20.97%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;

    /* Dark color */

    color: #4B4B4B;
`

export const SliderN = styled.div`
    position: absolute;
    left: 6.1%;
    right: 80.35%;
    top: 79.80%;
    bottom: 16.11%;
`
export const TitleB = styled.div`
    /* Welcome back */


    position: absolute;
    left: 4.1%;
    right: 52.56%;
    top: 18.72%;
    bottom: 77.84%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.3px;

    /* Dark color */

    color: #4B4B4B;



`
export const TextB = styled.div`

    /* Sign in to an existing account using your phone number */


    position: absolute;
    left: 7.1%;
    right: 48.21%;
    top: 22.87%;
    bottom: 73.1%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.3px;

    /* Dark color */

    color: #4B4B4B;

`
export const Imputbox = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 20.23%;
    bottom: 0;
    background-color:blue;
`
export const InputT = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;
    padding: 10px;
    position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 272px;
    border-radius: 15px;
  `;
  export const InputP = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 326px;
  border-radius: 15px;
  `;
  
  export const Log = styled.div`
  position: absolute;
  left: 4.1%;
  right: 4.1%;
  top: 87.68%;
  bottom: 7.11%;
`

export const TextB2 = styled.div`
    /* D’ont have account ? Sign up */


    position: absolute;
    left: 25.38%;
    right: 40.38%;
    top: 93.6%;
    bottom: 4.38%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B;
`

export const Texts = styled.div`
/* D’ont have account ? Sign up */


position: absolute;
left: 55.38%;
right: 25.38%;
top: 93.6%;
bottom: 4.38%;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;


background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

`

export const InputN = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 272px;
  border-radius: 15px;
  `;
  export const InputE = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 326px;
  border-radius: 15px;
  `;
  
  export const TitleC = styled.div`
  /* Create new Account */


        position: absolute;
        left: 4.1%;
        right: 35.64%;
        top: 18.72%;
        bottom: 77.84%;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */

        text-align: center;
        letter-spacing: -0.3px;

        /* Dark color */

        color: #4B4B4B;

  
  `
  export const TextC = styled.div`

  /* Create a new account by filling in all the fields or log in to an existing account */


  position: absolute;
  left: 7.1%;
  right: 31.28%;
  top: 22.87%;
  bottom: 73.1%;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.3px;
  
  /* Dark color */
  
  color: #4B4B4B;
  

`
export const InputT1 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;
    padding: 10px;
    position: absolute;
        width: 358px;
        height: 44px;
        left: 16px;
        top: 380px;
    border-radius: 15px;
  `;

  export const InputP1 = styled.input.attrs(props => ({
    type: "text"
  }))`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
    width: 358px;
    height: 44px;
    left: 16px;
    top: 434px;
  
  border-radius: 15px;
  `;
  export const Re1 = styled.div`
    position: absolute;
        width: 417px;
        height: 266px;
        left: 15px;
        top: 166px;

  `
  export const Re2 = styled.div`
  position: absolute;
    width: 359px;
    height: 293px;
    left: 15px;
    top: 464px;

  `
  export const Re3 = styled.div`
    position: absolute;
        width: 390px;
        height: 56px;
        left: 0px;
        top: 788px;
  

  `

  export const Reta = styled.div`
  /* Rectangle 53 */
  border-bottom-left-radius:40px;
  border-bottom-right-radius:40px;
  position: absolute;
  width: 432px;
  height: 150px;
  left: 0px;
  top: 0px;
  
  /* Main color (gradient) */
  
  background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
  box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);


`

export const TitleH = styled.div`
/* Hi,Robert */


    position: absolute;
    width: 112px;
    height: 29px;
    left: 16px;
    top: 72px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B

  
  `
  export const TextH = styled.div`
  /* Let’s start learning */


    position: absolute;
        width: 123px;
        height: 17px;
        left: 17px;
        top: 101px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    /* Dark color */

    color: #4B4B4B;
  

`
  
export const Coin = styled.div`
/* Logo */
position: absolute;
    left: 72.05%;
    right: 24.36%;
    top: 50.6%;
    bottom: 89.06%;
`
export const Noti = styled.div`

/* Layer 30 */


position: absolute;
left: 90.51%;
right: 4.87%;
top: 50.6%;
bottom: 88.33%;

`
export const CoinN = styled.div`

/* 400 */


position: absolute;
width: 28px;
height: 17px;
left: 340px;
top: 78px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;


`

export const TextV = styled.div`

/* Enter the four-digit code from SMS */


position: absolute;
width: 246px;
height: 18px;
left: 43px;
top: 204px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
text-align: center;

/* Dark color */

color: #4B4B4B;


`
export const TextV2 = styled.div`

position: absolute;
width: 250px;
height: 17px;
left: 25px;
top: 222px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: center;

background: linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


`
export const TitleV = styled.div`

/* Phone verification */


position: absolute;
width: 214px;
height: 29px;
left: 50px;
top: 160px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

text-align: center;

/* Dark color */

color: #4B4B4B;


`
export const InputT12 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 74px;
    top: 299px;

    border-radius: 15px;
  `;
  export const InputP12 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

  position: absolute;
  width: 44px;
  height: 44px;
  left: 140px;
  top: 299px;
  
  border-radius: 15px;
  `;
  export const InputN2 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 206px;
    top: 299px;

    border-radius: 15px;
  `;
  export const InputE2 = styled.input.attrs(({
    type: "number"
  }))`
  box-sizing: border-box;

    position: absolute;
    width: 44px;
    height: 44px;
    left: 272px;
    top: 299px;

    border-radius: 15px;
  `;


export const Fle = styled.div`

    /* Back */


    box-sizing: border-box;

    position: absolute;
    width: 16px;
    height: 0px;
    left: 32px;
    top: 60px;

    /* Dark color */

`