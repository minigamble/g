import React, {useState,useRef,useEffect} from 'react'
import logos from './logo.svg';
import './App.css';
import './Appish.css';
import axios from "axios";
import Codegen from './Codegen.js';
import { stringify, v4 as uuidv4 } from 'uuid';
import {QRCodeSVG} from 'qrcode.react';
import {QRCodeCanvas} from 'qrcode.react';


import arrowleft from './assets/arrowleft.svg';
import home from './assets/home-1-svgrepo-com.svg';
import home1 from './assets/product-f-svgrepo-com.svg';
import home2 from './assets/process-arrows-svgrepo-com.svg';
import home3 from './assets/user-check-svgrepo-com.svg';
import bonus from './assets/wallet.svg';
import invite from './assets/invite.svg';
import money from './assets/money.svg';
import logo from './assets/logo.svg';
import Cusomer from './assets/customer.svg';
import loading from './assets/loading.svg';
import close from './assets/close.svg';
import piggery from './assets/piggery.png';
import okukos from './assets/okukos.jpg';
import cover from './assets/Cover1.webp';
import Rank from './assets/rank.svg';
import Task from './assets/task.svg';
import logout from './assets/exit-svgrepo-com.svg';
import turkey from './assets/turkey.jpg';
import goatus from './assets/goatus.jpg';
import eggroll from './assets/eggroll.jpg';
import tysonship from './assets/tysonship.jpg';
import egglenton from './assets/egglenton.jpg';
import chickito from './assets/chickito.webp';
import Chainsawmasacre from './assets/Chainsawmasacre.jpg';
import winner from './assets/winner.png';
import recharge from './assets/recharge.svg';
import card from './assets/card.svg';
import product from './assets/product.svg';
import coupon from './assets/coupon.svg';
import fund from './assets/fund.svg';
import customer from './assets/customer-service.svg';
import team from './assets/team.svg';
import bet from './assets/bet.svg';
import bank from './assets/bank.svg';
import sack from './assets/sack.png';
import invitef from './assets/invite-friend.svg';
import orangaton from './assets/orangaton.png';
import back from './assets/back.svg';
import value1 from './assets/value1.jpg';
import value2 from './assets/value2.jpg';
import value3 from './assets/value3.jpg';
import value4 from './assets/value4.jpg';
import value5 from './assets/value5.jpg';
import value6 from './assets/value6.jfif'; 
import qrcode from './assets/qrcode.svg';     



function App() {


const [screen, setscreen] = useState(1)
const [load, setload] = useState(0)
const [pin, setpin] = useState("")
const [key, setkey] = useState("")
const [box, setbox] = useState(0)
const [nala, setnala] = useState(0)
const [pce, setpce] = useState(0)
const [menu, setmenu] = useState(0)
const [us, setus] = useState(0)


const [price, spr] = useState("")
const [prod, prd] = useState("")

const [invitecode, setinvite] = useState(Codegen)
const [phone, setphone] = useState(0)
const [logphone, setlogphone] = useState(0)
const [password, setpassword] = useState("")
const [password2, setpassword2] = useState("")

const [Data, setdata] = useState([])

const regdata = {
  "phone":phone,
  "password":password,
  "invite":invitecode,
  "AcBalance":"0",
  "InBalance":"0",
  "bonus":"0"}

function item(c,b,i) { spr(c);prd(b);setus(1) }
function runpin(i) { if(pin.length<4){setpin(pin+i)} }
function loadtime(){ if(load>0){return("preloader")}else{return("preloader0")}}

function scr(i){if(i===screen){return ({display:"block"})}else{return({display:"none"})}}
function _menu(i){if(i===menu){return ({display:"block"})}else{return({display:"none"})}}

function _uni(){if(1===us){return ("uni")}else{return("uni2")}}
function _unipopo(i){if(1===us){return ({display:"block"})}else{return({display:"none"})}}

function skey(i) { if(i>=key.length){return({display:"block"})}else{return({display:'none'})} }
function lbox(i) {if(box==i){return({display:'block'})}else{return({display:'none'})}}
function _nalart(i) {if(nala==i){return({display:'block'})}else{return({display:'none'})}}
function _process(i) {if(pce==i){return({display:'block'})}else{return({display:'none'})}}

function _continue() {
  if(phone.length<10){setnala(1)}else if(password.length<7){setnala(2)}else if(password!=password2){setnala(3)}else{ setscreen(3) }
}
function pincross() {
  if(pin.length===4){reg()}else{setnala(4)}
}

function reg() { 
  setpce(1)
  axios.post("http://localhost:5000/user/add",regdata)
 .then(function (res){ setpce(0) })
 .catch(function (error) { });
}

function _loging() {
  setpce(1)
  axios.post("http://localhost:5000/user/find",{"phone":"08062235910"})
 .then(function (res){ setdata(res.data);setpce(1) })
 .catch(function (error) { });
}


  return (

    <div id="skin" >
      
      <div hidden="hidden"  ><QRCodeSVG value={invitecode+invitecode} /></div>

      <div id="Overcover" style={_process(1)} >
        <div id="processing" >
          <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
          <div id="pronote" >Processing Registration</div>
        </div>
      </div>


<div id="logout" style={_nalart(1)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Enter Correct Phone</div></center>
        <div id="hilox" >
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Ok</div></div>
      </div></div>
<div id="logout" style={_nalart(2)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Password must be upto 8</div></center>
        <div id="hilox" >
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Ok</div></div>
      </div></div>
<div id="logout" style={_nalart(3)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Password does not match</div></center>
        <div id="hilox" >
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Ok</div></div>
      </div></div>
<div id="logout" style={_nalart(4)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Pin must be four digits</div></center>
        <div id="hilox" >
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Ok</div></div>
      </div></div>
      
      
<div id="logout" style={lbox(1)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure you want to log out</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> {setscreen(1);setbox(0)}} >Yes</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setbox(0)}  >No</div></div>
      </div></div>
      <div style={_unipopo()} onClick={e=> setus(0)} id="waaa" ></div>
      
<center>
  
<div style={_menu(1)}>
      <div id="menubar" >

<div id="icon" onClick={e=> setscreen(0)} >
  <div id="ico" > <img  id="img" alt="img" src={home}/> </div>
  <div id="name" >Home</div>
</div>


<div id="icon"  onClick={e=> setscreen(6)} >
  <div id="ico" > <img  id="img" alt="img" src={home1}/> </div>
        <div id="name" >Product</div>
      </div>
      

      <div id="icon" >
        <div id="ico" ></div>
        <div id="name" ></div>
      </div>

      <div id="icon" onClick={e=> setscreen(7)}  >
  <div id="ico" > <img  id="img" alt="img" src={home2}/> </div>
        <div id="name" >lottery</div>
      </div>


      <div id="icon"  onClick={e=> setscreen(8)} >
  <div id="ico" > <img  id="img" alt="img" src={home3}/> </div>
        <div id="name" >User</div>
      </div>
       

      <div id="centerfill" > <img  id="img" alt="img" src={logo}/>  </div>
      
      </div>
</div>
</center>
      <div id={loadtime(0)} >
            <div id="central" > <div id="spin" ><img alt="img" id="loader" /></div> </div>
          </div>  

          
      <div style={scr(0)} >


        <div id="miniskin" >
          <center>
        <div id="farm" ><img  id="iimg" alt="img" src={okukos}/></div>
        
        <div id="collection" >
          

<div id="icon" onClick={e=> setscreen(9)} >
  <div id="ico" > <img  id="img" alt="img" src={bonus}/> </div>
  <div id="name" >Bonus</div>
</div>

<div id="icon" onClick={e=> setscreen(19)} >
  <div id="ico" > <img  id="img" alt="img" src={invite}/> </div>
  <div id="name" >Inivite</div>
</div>

<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={Cusomer} /> </div>
  <div id="name" >Cusomer</div>
</div>

<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={money}/> </div>
  <div id="name" >Eranings</div>
</div>
        </div>


        <div id="collection2" >
          

<div id="icon" >
  <div id="ico2" > <img  id="img"  alt="img" src={Rank} onClick={e=> setscreen(16)}/> </div>
  <div id="name" >Rank</div>
</div>

<div id="icon" >
  <div id="ico2" > <img  id="img" alt="img" src={logo} onClick={e=> setscreen(17)}/> </div>
  <div id="name" >Infomation</div>
</div>

<div id="icon"  onClick={e=> setscreen(18)} >
  <div id="ico2" > <img  id="img" alt="img" src={Task}/> </div>
  <div id="name">Task </div>
</div>
        </div>
        
        <div id="farm" ><img  id="iimg" alt="img" src={cover}/></div>

<div id="tabtwo" >
  {/*--------------------------------------------*/}
<div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={egglenton}/></div>
    <div id="hf2" >
    <div>Product: <span id="img" >₦5000</span></div>
    <div>Cycle: <span id="img" >25days</span></div>
    <div>Daily Income: <span id="bld" >₦300</span></div>
    <div>Total revenue: <span id="bld" >₦7,500</span></div>
    <div id="btx" onClick= {e=> setscreen(10)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={chickito}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦18,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦1044</span></div>
    <div>Total revenue: <span id="bld" >₦36,540</span></div>
    <div id="btx" onClick= {e=> setscreen(11)} >View Project</div>
    </div>
  </div>

  </div>
  {/*--------------------------------------------*/}
<div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={turkey}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦40,000</span></div>
    <div>Cycle: <span id="img" >40days</span></div>
    <div>Daily Income: <span id="bld" >₦2,080</span></div>
    <div>Total revenue: <span id="bld" >₦83,200</span></div>
    <div id="btx" onClick= {e=> setscreen(12)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={goatus}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦80,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦5,600</span></div>
    <div>Total revenue: <span id="bld" >₦196,000</span></div>
    <div id="btx" onClick= {e=> setscreen(13)}>View Project</div>
    </div>
  </div>

  </div>

  {/*--------------------------------------------*/}
  <div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={piggery}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦140,000</span></div>
    <div>Cycle: <span id="img" >40days</span></div>
    <div>Daily Income: <span id="bld" >₦9,100</span></div>
    <div>Total revenue: <span id="bld" >₦364,000</span></div>
    <div id="btx" onClick= {e=> setscreen(14)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={Chainsawmasacre}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦200,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦14,000</span></div>
    <div>Total revenue: <span id="bld" >₦490,000</span></div>
    <div id="btx" onClick= {e=> setscreen(15)} >View Project</div>
    </div>
  </div>

  </div>


  </div>

</center>
</div>
  </div>

      
      <div style={scr(1)} >
        <div id="miniskin" > 

        <div id="logbox" >
      <center>
      <div id="lbg1" ><span style={{color:"#00a8f3"}}>value</span><span>best</span> </div>
      <img alt='img' src={logo} style={{height:"70px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}}  />
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Phone</div>
      <input id="allinput" style={{width:"85%"}} type='number' onChange={e=> setlogphone(e.currentTarget.value) } />
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Password</div>
      <input id="allinput" style={{width:"85%"}} />
      <div id="btt" style={{width:"80%",marginTop:'30px'}}  onClick={e=> _loging()} >Log In</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}} onClick={e=> setscreen(2)}  >Register Now</div>
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}} onClick={e=> setscreen(4)} >Forgot Password</div>
      </center>
    </div>
           </div>
      </div>


      
      <div style={scr(2)} >
        <div id="miniskin" > 

        <div id="logbox" >
      <center>
      <div id="lbg1" ><span style={{color:"#00a8f3"}}>value</span><span>best</span> </div>
      <img alt='img' src={logo} style={{height:"70px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}}  />
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Enter Phone</div>
      <input id="allinput" style={{width:"85%"}} type='number' onChange={e=> setphone(e.currentTarget.value)} />
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Enter Password</div>
      <input id="allinput" style={{width:"85%"}}  onChange={e=> setpassword(e.currentTarget.value)} />
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Re-Enter Password</div>
      <input id="allinput" style={{width:"85%"}}  onChange={e=> setpassword2(e.currentTarget.value)} />
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Invitation code</div>
      <input id="allinput" style={{width:"85%"}} value={invitecode} />
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> _continue()} >Continue</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}}  onClick={e=> setscreen(1)}  >Login</div>
      </center>
    </div>
           </div>
      </div>


      
      <div style={scr(3)} >
        <div id="miniskin" > 

        <div id="logbox">
      <center>
      <div id="lbg1" >Enter Recovery Key</div>
      
      <div id="code" style={{marginTop:'20px'}}><div><span style={skey(1)}>{pin[0]}</span></div><div><span style={skey(1)}>{pin[1]}</span></div><div><span style={skey(1)}>{pin[2]}</span></div><div><span style={skey(1)}>{pin[3]}</span></div></div>

      <div id="key" style={{marginTop:'20px'}}><div id="pin" onClick={e=> runpin("1")}>1</div><div id="pin" onClick={e=> runpin("2")}>2</div><div id="pin" onClick={e=> runpin("3")}>3</div></div>
      <div  id="key" ><div id="pin" onClick={e=> runpin("4")}>4</div><div id="pin" onClick={e=> runpin("5")}>5</div><div id="pin" onClick={e=> runpin("6")}>6</div></div>
      <div  id="key" ><div id="pin" onClick={e=> runpin("1")}>7</div><div id="pin" onClick={e=> runpin("8")}>8</div><div id="pin" onClick={e=> runpin("9")}>9</div></div>
      <div  id="key" ><div  id="pin" onClick={e=> runpin("1")}>-</div><div id="pin" onClick={e=> runpin("0")}>0</div><div id="pin" onClick={e=> setpin(pin.substring(0, pin.length - 1))}><img alt='img' src={arrowleft} style={{height:"23px"}} /></div></div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> pincross()}  > Register</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}}  onClick={e=> setscreen(1)}  >Login</div>
      </center>
    </div>
           </div>
      </div>

      <div style={scr(4)} >
        <div id="miniskin" > 

        <div id="logbox" >
      <center>
      <div id="lbg1" ><span style={{color:"#00a8f3"}}>value</span><span>best</span> </div>
      <img alt='img' src={logo} style={{height:"70px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}}  />
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Enter Recovery key</div>
      <input id="allinput" style={{width:"85%"}} type='number' />
      <div id="btt" style={{width:"80%",marginTop:'30px'}}  onClick={e=> setscreen(5)} >Enter</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}} onClick={e=> setscreen(1)}  >Back to Login</div>
      </center>
    </div>
           </div>
      </div>

      <div style={scr(5)} >
        <div id="miniskin" > 

        <div id="logbox" >
      <center>
      <div id="lbg1" ><span style={{color:"#00a8f3"}}>value</span><span>best</span> </div>
      <img alt='img' src={logo} style={{height:"70px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}}  />
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Your password</div>
      <div>kdlsldksdl</div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}}  onClick={e=> setscreen(1)} >OK</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}} onClick={e=> setscreen(1)}  >Back to Login</div>
      </center>
    </div>
           </div>
      </div>


      <div id="miniskin" style={scr(6)} >
      <center>
      <div id="centerfill2" > <img  id="img" alt="img" src={logo}/>  </div>
      <div id="tabtwo" >
  {/*--------------------------------------------*/}
<div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={egglenton}/></div>
    <div id="hf2" >
    <div>Product: <span id="img" >₦5000</span></div>
    <div>Cycle: <span id="img" >25days</span></div>
    <div>Daily Income: <span id="bld" >₦300</span></div>
    <div>Total revenue: <span id="bld" >₦7,500</span></div>
    <div id="btx" onClick= {e=> setscreen(10)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={chickito}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦18,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦1044</span></div>
    <div>Total revenue: <span id="bld" >₦36,540</span></div>
    <div id="btx" onClick= {e=> setscreen(11)} >View Project</div>
    </div>
  </div>

  </div>
  {/*--------------------------------------------*/}
<div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={turkey}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦40,000</span></div>
    <div>Cycle: <span id="img" >40days</span></div>
    <div>Daily Income: <span id="bld" >₦2,080</span></div>
    <div>Total revenue: <span id="bld" >₦83,200</span></div>
    <div id="btx" onClick= {e=> setscreen(12)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={goatus}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦80,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦5,600</span></div>
    <div>Total revenue: <span id="bld" >₦196,000</span></div>
    <div id="btx" onClick= {e=> setscreen(13)}>View Project</div>
    </div>
  </div>

  </div>

  {/*--------------------------------------------*/}
  <div id="intwos" >
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={piggery}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦140,000</span></div>
    <div>Cycle: <span id="img" >40days</span></div>
    <div>Daily Income: <span id="bld" >₦9,100</span></div>
    <div>Total revenue: <span id="bld" >₦364,000</span></div>
    <div id="btx" onClick= {e=> setscreen(14)} >View Project</div>
    </div>
  </div>

  
  <div id="okuko" >
    <div id="koi" ><img  id="koimg" alt="img" src={Chainsawmasacre}/></div>
    <div id="hf2" >
    <div>Product: <span id="bld" >₦200,000</span></div>
    <div>Cycle: <span id="bld" >35days</span></div>
    <div>Daily Income: <span id="bld" >₦14,000</span></div>
    <div>Total revenue: <span id="bld" >₦490,000</span></div>
    <div id="btx" onClick= {e=> setscreen(15)} >View Project</div>
    </div>
  </div>

  </div>


  </div>
</center>

      </div>

      
      <div style={scr(7)} >


        <div id="minilot" >
          <center>
      <div id="glo" > <img  id="img" alt="img" src={winner}/>  </div>

            <div id="glokid" >
              <div id="blaze" >Winners</div>

              <div id="scroller" >
                <div id="conpro" ></div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********842 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********894 <span>won 700 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********345 <span>won 50 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********901 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********666 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********009 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********121 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********957 <span>won 600 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********622 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********046 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********007 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********406 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********435 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********842 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********896 <span>won 700 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********232 <span>won 50 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********422 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********012 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********042 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********422 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********419 <span>won 600 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********311 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********119 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********001 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********000 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********842 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********894 <span>won 700 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********345 <span>won 50 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********901 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********666 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********009 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********121 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********957 <span>won 600 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********622 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********046 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********007 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********406 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********435 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********842 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********896 <span>won 700 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********232 <span>won 50 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********354 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********422 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********012 <span>won 200 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********042 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********422 <span>won 500 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********419 <span>won 600 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********311 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********119 <span>won 100 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********001 <span>won 300 NGN</span> </div>
                <div id="con"><span>Congratulations</span> +234********000 <span>won 500 NGN</span> </div>
              </div>

            </div>
          </center>
          </div>
          </div>

          
      <div style={scr(8)} >
<div id="miniskin" >
        <div id="lout"  onClick={e=> setbox(1)} ><img  id="img" alt="img" src={logout}/></div>
  <center>
      <div id="centerfill3" > <img  id="img" alt="img" src={logo}/>  </div>
    <div id="phone" > +234********000 </div>
    <div id="id" > ID:<span> Dxhdilmdj</span></div>


<div id='recharge'>
<div id="okuko2" >
    <div id="koi" ><img  id="reimg" alt="img" src={recharge}/></div>
    <div id="hf2" >
    <div id='re'> Recharge </div>

    </div>
  </div>

  <div id="okuko2" >
    <div id="koi" ><img  id="reimg" alt="img" src={card}/></div>
    <div id="hf2" >
    <div id='re'> Withdraw </div>

    </div>
  </div>

  <div id="ent">
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >Recharge Bag </div>
  <div id="na" >₦0</div>
</div>
  <div id="icon" >
  <div id="ic" >Balance </div>
  <div id="name" >₦0</div>
</div>
  <div id="icon" >
  <div id="ic" >Product </div>
  <div id="na" >₦0</div>
</div>
    </div>
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >Total revenue </div>
  <div id="na" >₦0</div>
</div>
  <div id="icon" >
  <div id="ic" >Team commission </div>
  <div id="na" >₦0</div>
</div>
  <div id="icon" >
  <div id="ic" >Today's Income</div>
  <div id="na" >₦0</div>
</div>
    </div>
  </div>

  <div id="unient" >
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >10% </div>
  <div id="na" >B <span>(0)</span></div>
</div>
  <div id="icon" >
  <div id="ic" >3% </div>
  <div id="name" >C <span>(0)</span></div>
</div>
  <div id="icon" >
  <div id="ic" >2% </div>
  <div id="na" >D <span>(0)</span></div>
</div>
    </div>

    <div id="bt01" > View Team commission </div>
  </div>

  <div id="ooo" >
    <div id="ok" >
      
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={product}/> </div>
  <div id="name" >My Product</div>
</div>
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={coupon}/> </div>
  <div id="name" >Coupon</div>
</div>
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={fund}/> </div>
  <div id="name" >Fund</div>
</div>
    </div>

    
    <div id="ok" >
      
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={bet}/> </div>
  <div id="name" >Bonus</div>
</div>
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={bank}/> </div>
  <div id="name" >Add Bank</div>
</div>
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={invitef}/> </div>
  <div id="name" >Invite</div>
</div>
    </div>

    <div id="ok" >
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={team}/> </div>
  <div id="name" >My Team</div>
</div>
<div id="icon" >
  <div id="ico" > <img  id="img" alt="img" src={customer}/> </div>
  <div id="name" >customer service</div>
</div>
<div id="icon" onClick={e=> setbox(1)} >
  <div id="ico" > <img  id="img" alt="img" src={logout}/> </div>
  <div id="name" >Exit</div>
</div>
    </div>


  </div>

</div>



  

  </center>
</div>


      </div>

      
<div style={scr(9)} >


  <center>
<div id="bona" >
      <div id="blaze" >Bonus</div>
<div id="glo" style={{marginTop:"100px"}} > <img  id="img" alt="img" src={sack}/>  </div>
  <div id="unient2" style={{marginTop:"50px",marginBottom:"20px"}} >
    <input style={{marginTop:"40px",marginBottom:"20px"}} placeholder="Plase Enter Bonus code" id="allinput" />
        <div id="bt0" style={{width:"35%"}} onClick={e=> setbox(0)}  >Receive</div>
  </div>
  </div>

  
  </center>
  </div>


<div style={scr(10)} >


<center>
<div id="bonapro">
  <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={egglenton}/>  </div>
<div id="probod"><div id="protext"> Eggs [BCB]
<p id='pp'>price <spam>₦5000</spam></p>
<p id='pp'>Cycle <spam>25 days</spam></p>
<p id='pp'>Daily income <spam>₦300</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>6%</spam></p>
<p id='pp'>Total revenue <spam>₦7500</spam></p>

<div id='bt01' onClick={e=> item("₦5000","Eggs") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={eggroll}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">

Introducing our farm-fresh eggs, a taste of wholesome goodness delivered straight to your table! Packed with nutrition and flavor, our eggs come from well-cared-for, happy hens raised in a natural and sustainable environment.

Key Features:

Farm-Fresh Quality: Our eggs are sourced directly from local farms, ensuring that you receive the freshest and highest quality eggs available.

Nutrient-Rich: Packed with essential nutrients such as protein, vitamins, and minerals, our eggs make a nutritious addition to your daily diet. They are an excellent source of high-quality protein, contributing to your overall health and well-being.

Cage-Free and Happy Hens: We believe in ethical and humane farming practices. Our eggs come from hens that are raised in spacious, cage-free environments, allowing them to roam, forage, and exhibit natural behaviors. Happy hens lay better eggs!

Locally Sourced: Supporting local farmers is at the heart of our mission. By choosing our eggs, you are not only getting a superior product but also contributing to the sustainability of local agriculture.

Versatile for Every Meal: Whether you're whipping up a hearty breakfast, baking a delicious cake, or preparing a savory dinner, our eggs are the perfect ingredient. Their freshness and quality shine through in every dish.

Strict Quality Control: Our eggs undergo rigorous quality control measures to ensure that only the best reach your kitchen. From the farm to your table, we prioritize safety, freshness, and taste.

Environmentally Friendly Packaging: We care about the environment, and that's why our packaging is designed with sustainability in mind. Our commitment to eco-friendly practices extends to every aspect of our egg production.

Experience the difference of farm-fresh eggs in every bite. Make the healthy and ethical choice by choosing our eggs for a delightful culinary experience that supports local farmers and promotes responsible farming practices.

</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}



<div style={scr(11)} >


<center>
<div id="bonapro">
    <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={chickito}/>  </div>
<div id="probod"><div id="protext"> BREEDING [BCW]
<p id='pp'>price <spam>₦18,000</spam></p>
<p id='pp'>Cycle <spam>35 days</spam></p>
<p id='pp'>Daily income <spam>₦1044</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>5.8%</spam></p>
<p id='pp'>Total revenue <spam>₦36,540</spam></p>

<div id='bt01' onClick={e=> item("₦18,000","Chiken") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={tysonship}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">
Introducing our premium, pasture-raised chicken – the epitome of quality, flavor, and ethical farming. At our farm, we take pride in delivering poultry that goes beyond expectations, ensuring you savor every bite of a truly exceptional dining experience.

Key Features:

Pasture-Raised Excellence: Our chickens are raised in spacious, open pastures where they enjoy the freedom to roam, forage, and express their natural behaviors. This results in lean, healthy, and flavorful meat that stands out in both taste and texture.

High-Quality Protein: Packed with lean, high-quality protein, our chicken is a nutritional powerhouse. Whether you're a fitness enthusiast or simply looking for a wholesome meal, our chicken is an excellent source of the nutrients your body needs.

No Antibiotics or Hormones: We prioritize the health and well-being of our chickens and, consequently, your health too. Our birds are raised without the use of antibiotics or hormones, ensuring that you enjoy clean, pure poultry on your plate.

Locally Sourced and Sustainable: Supporting local farmers is a commitment we hold dear. By choosing our chicken, you're supporting sustainable and responsible farming practices that contribute to the well-being of the environment and local communities.

Expertly Processed: Our chickens are processed with care and precision to guarantee the highest quality cuts. Each piece is hand-inspected to ensure it meets our stringent standards before reaching your kitchen.

Versatile Culinary Delight: From a simple weeknight dinner to an elaborate feast, our chicken is incredibly versatile. Its natural flavor and tenderness make it a perfect choice for grilling, roasting, sautéing, and more.

Chef-Approved Quality: Renowned chefs and home cooks alike choose our chicken for its superior quality and taste. Elevate your culinary creations with our premium poultry, and experience the difference in every dish.

Traceability and Transparency: We believe in transparency in our food chain. With our commitment to traceability, you can trust that every piece of chicken on your plate comes from a responsible and ethical source.

Indulge in the richness of flavor and the satisfaction of knowing you're making a conscientious choice. Choose our pasture-raised chicken for a dining experience that not only delights your taste buds but also reflects your commitment to quality, sustainability, and animal welfare.
</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}



<div style={scr(12)} >


<center>
<div id="bonapro">
    <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={turkey}/>  </div>
<div id="probod"><div id="protext"> BREEDING [BCW]
<p id='pp'>price <spam>₦40,000</spam></p>
<p id='pp'>Cycle <spam>40 days</spam></p>
<p id='pp'>Daily income <spam>₦2,080</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>5.2%</spam></p>
<p id='pp'>Total revenue <spam>₦83,200</spam></p>

<div id='bt01' onClick={e=> item("₦40,000","Turkey") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={tysonship}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">
  
Get ready to elevate your holiday feasts and special occasions with our premium, hand-selected turkeys. Sourced from trusted farms with a dedication to quality and ethical practices, our turkeys are the centerpiece your table deserves.

Key Features:

Heritage-Breed Excellence: Our turkeys are carefully chosen from heritage breeds known for their exceptional flavor, tenderness, and succulence. Each bird is raised with meticulous care to ensure it reaches your table with the utmost quality.

All-Natural and Hormone-Free: Enjoy peace of mind knowing that our turkeys are raised without the use of hormones or artificial additives. We believe in delivering a pure, natural product that reflects our commitment to both your health and the well-being of the birds.

Locally Raised and Sustainable: We support local farmers who share our values of sustainability and ethical farming. By choosing our turkeys, you're not only enjoying a superior product but also contributing to the vitality of local communities and responsible agriculture.

Juicy and Flavorful: Our turkeys are renowned for their juicy and flavorful meat. Whether roasted to perfection, smoked, or grilled, each bite is a celebration of rich, natural taste that will leave your guests asking for more.

Perfect for Every Occasion: From Thanksgiving to family gatherings, our turkeys are the ideal centerpiece for any occasion. Their versatility ensures they shine in various culinary preparations, offering you endless possibilities for creating memorable meals.

Expertly Prepared: Our turkeys undergo meticulous processing to guarantee top-notch quality. Each bird is carefully inspected, ensuring that only the finest make their way to your kitchen.

Generous Sizes Available: Whether you're hosting an intimate dinner or a grand celebration, we offer turkeys in a range of sizes to suit your needs. Pre-order your preferred size to secure the perfect centerpiece for your occasion.

Traceable and Transparent: We believe in transparency and traceability. Know the journey of your turkey from the farm to your table, and trust that it comes from a responsible and ethical source.

Make this holiday season or special event truly exceptional with the centerpiece it deserves. Choose our premium, hand-selected turkeys for a dining experience that embodies quality, tradition, and a commitment to ethical farming practices.

</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}



<div style={scr(13)} >


<center>
<div id="bonapro">
    <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={goatus}/>  </div>
<div id="probod"><div id="protext"> YAM CULTIVATION [SHB]
<p id='pp'>price <spam>₦80,000</spam></p>
<p id='pp'>Cycle <spam>35 days</spam></p>
<p id='pp'>Daily income <spam>₦5,600</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>7%</spam></p>
<p id='pp'>Total revenue <spam>₦196,000</spam></p>

<div id='bt01' onClick={e=> item("₦80,000","Yam") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={tysonship}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">
  
Indulge your taste buds with the wholesome goodness of our premium yams, a versatile and nutritious addition to your culinary repertoire. Sourced from trusted farms committed to quality, our yams are the perfect choice for creating delicious, hearty meals that satisfy and delight.

Key Features:

Farm-Fresh Quality: Our yams are carefully selected from reputable farms to ensure you receive the freshest and highest quality produce. Straight from the earth to your table, our yams retain their natural flavor and nutritional value.

Nutrient-Rich Goodness: Packed with essential vitamins, minerals, and dietary fiber, our yams contribute to a healthy and balanced diet. They are a great source of energy, making them an excellent choice for those seeking wholesome, natural nutrition.

Versatile Culinary Delight: From classic mashed yams to roasted yam wedges, our yams are incredibly versatile in the kitchen. Whether you're preparing a comforting side dish or experimenting with a new recipe, our yams add a delicious and nutritious touch to any meal.

Sweet and Savory Options: Our yams boast a naturally sweet flavor that pairs well with both sweet and savory dishes. Use them in casseroles, soups, stews, or even as a delightful addition to your favorite desserts.

Locally Sourced: We prioritize supporting local farmers and communities. By choosing our yams, you're not only enjoying a superior product but also contributing to sustainable and responsible agricultural practices.

Simple to Prepare: Our yams are easy to prepare, making them a convenient and time-saving option for busy individuals and families. Enjoy the delicious taste of home-cooked yams without the hassle.

Rich in Antioxidants: Yams are known for their antioxidant properties, which contribute to overall health and well-being. Incorporate our yams into your meals to enjoy the nutritional benefits they bring to the table.

Environmentally Friendly Packaging: We care about the environment, and our commitment extends to our packaging. Rest assured that our yams are delivered in eco-friendly packaging, reflecting our dedication to sustainable practices.

Experience the natural goodness and culinary versatility of our premium yams. Whether you're a seasoned chef or a home cook, our yams are the perfect ingredient to enhance your culinary creations with flavor, nutrition, and a touch of wholesome indulgence.




</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}



<div style={scr(14)} >


<center>
<div id="bonapro">
    <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={piggery}/>  </div>
<div id="probod"><div id="protext"> RICE [SHW]
<p id='pp'>price <spam>₦140,000</spam></p>
<p id='pp'>Cycle <spam>40 days</spam></p>
<p id='pp'>Daily income <spam>₦9,100</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>6.5%</spam></p>
<p id='pp'>Total revenue <spam>₦364,000</spam></p>

<div id='bt01' onClick={e=> item("₦140,000","Rice") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={tysonship}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">

Indulge your senses with our exquisite selection of premium rice varieties, meticulously sourced from the finest rice paddies around the world. Our rice collection promises to elevate your culinary experience, offering a symphony of flavors, textures, and aromas that will delight even the most discerning palates.

Basmati Bliss:
Embark on a culinary journey with our Basmati rice, known for its long grains, subtle nutty aroma, and fluffy texture. Sourced from the foothills of the Himalayas, our Basmati rice is the epitome of culinary perfection, ideal for creating fragrant biryanis, pilafs, and other gourmet delicacies.

Jasmine Jewels:
Immerse yourself in the captivating fragrance of our Jasmine rice. Grown in the lush landscapes of Southeast Asia, our Jasmine rice boasts a delicate floral aroma and a soft, slightly sticky texture. Perfect for pairing with Asian dishes or creating sushi, this rice variety will transport you to the heart of the Orient.

Arborio Elegance:
Elevate your risottos and creamy rice dishes with our Arborio rice, carefully cultivated in the picturesque fields of Italy. Known for its high starch content, Arborio rice absorbs flavors beautifully, creating a velvety and irresistible dish that will leave a lasting impression on your guests.

Wild Rice Wonder:
Imbue your meals with a touch of the wild by incorporating our premium wild rice blend. Harvested from North American waters, this dark, nutty rice variety adds a unique texture and robust flavor to salads, casseroles, and stuffing recipes.

Organic Brown Harmony:
Embrace a healthier lifestyle with our organic brown rice, cultivated using sustainable and eco-friendly practices. Packed with nutrients and wholesome goodness, this versatile rice variety is perfect for a wide range of dishes, from hearty grain bowls to nutritious side dishes.

Unleash your culinary creativity and transform ordinary meals into extraordinary culinary experiences with our premium rice collection. Whether you're a home chef or a professional, our carefully curated selection ensures that every grain surpasses expectations. Elevate your dining experience with the finest rice varieties—because every meal deserves perfection.

</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}



<div style={scr(15)} >


<center>
<div id="bonapro">
    <div id="blaze" >Product</div>
<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={Chainsawmasacre}/>  </div>
<div id="probod"><div id="protext"> BEANS [SHK]
<p id='pp'>price <spam>₦200,000</spam></p>
<p id='pp'>Cycle <spam>35 days</spam></p>
<p id='pp'>Daily income <spam>₦14,000</spam></p>
<p id='pp'> Purchase restriction <spam>1</spam></p>
<p id='pp'>Total yeild rate <spam>7%</spam></p>
<p id='pp'>Total revenue <spam>₦490,000</spam></p>

<div id='bt01' onClick={e=> item("₦200,000","Beans") } >Invest Product</div>

</div></div>

<div id="glo" style={{marginTop:"20px"}} > <img  id="img" alt="img" src={tysonship}/>  </div>
<div id="ph" >
<div id="protext"> Product Description</div>

<div id="divnote">
  
  
Title: Bean Boutique - A Symphony of Flavors and Nutrients

Description:

Welcome to Bean Boutique, where our passion for quality and flavor meets the wholesome goodness of beans. Dive into a world of culinary possibilities with our carefully curated selection of premium beans, sourced from the best harvests worldwide. From velvety textures to robust flavors, our beans promise to elevate your dishes to new heights.

Chickpea Charisma:
Our chickpeas are a culinary delight, known for their creamy texture and nutty undertones. Packed with protein and fiber, they're perfect for creating hearty stews, Mediterranean-inspired dishes, and of course, the beloved hummus.

Black Bean Elegance:
Experience the rich and velvety texture of our black beans, harvested at the peak of freshness. These beans are a versatile addition to your kitchen, ideal for soups, salads, and Latin American specialties. Unlock the secret to savory black bean tacos or add depth to your favorite chili recipes.

Kidney Bean Classics:
Dive into the heartiness of our kidney beans, prized for their robust flavor and firm texture. Perfect for chili con carne, bean salads, and a variety of international dishes, our kidney beans are a staple that adds both taste and substance to your meals.

Cannellini Magic:
Embrace the Italian flair with our Cannellini beans. With their smooth texture and mild flavor, these beans are the star of minestrone soups, pasta dishes, and Mediterranean-style salads. Elevate your recipes with the elegance of Cannellini beans.

Lentil Luxe:
Explore the nutritional powerhouse of our lentils. Whether red, green, or black, our lentils are a versatile addition to your pantry. From hearty lentil soups to protein-packed salads, these tiny legumes bring big flavors and essential nutrients to your table.

Mixed Bean Melody:
Indulge in a symphony of colors and textures with our mixed bean blend. This vibrant mix of beans is perfect for creating colorful salads, bean dips, and wholesome side dishes. Experience the variety and versatility of our mixed bean medley.

At Bean Boutique, we believe that every meal should be a celebration of flavor and nutrition. Elevate your culinary creations with the finest beans that nature has to offer. Whether you're a seasoned chef or a cooking enthusiast, our premium bean selection invites you to savor the richness and diversity of these nutritional powerhouses. Transform your dishes with Bean Boutique—where quality and taste meet in every bean.


</div>


</div>
</div></center></div>
{/* -------------------------------------------------------- */}


<div id={_uni()} >

<div id="hover" onClick={e=> setus(0)} ><img  id="img" alt="img" src={close}/> </div>
<div id="rechargemom" >
    <div id="rbox" >
      <div>₦ 0</div>
      <div>Account Balance</div>
    </div>
    <div id="rbox" >
      <div>₦ 0</div>
      <div>Income Balance</div>
    </div>
  </div>
  <div id="hilo" ><div id="bt0" style={{width:"35%"}}>Recharge</div> <div id="bt0" style={{width:"35%"}}   >Invite</div></div>
  
<p id='pp'>price <spam>{price}</spam></p>
<p id='pp'>Product <spam>{prod}</spam></p>
<p id='pp' style={{color:"red"}}>Actual payment amount <spam>{price}</spam></p>
<div id="well" ><div id='bt01'>Invest Product</div></div>
</div>


<div style={scr(16)}>
  <div id="orangaton"> Rank</div> <div id="ark" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
  <div id="pato" > <img  id="img" alt="img" src={orangaton}/> </div>
  <div id="dembabar">
    <center>   <div id='bt011'> User's Income</div>
    <div id="baby">
      <div id ="babytxt">
        <p>Ranking</p>
        <p>User</p>
        <p>Today's Income</p>
        </div>
        <div id="won" >
                <div id="won1">1</div>
                <div id="won1"> +234********842 </div>
                <div id="won1">₦490,000</div>
              </div>
              <div id="won" >
                <div id="won1">2</div>
                <div id="won1"> +234********678 </div>
                <div id="won1">₦190,000</div>
              </div>
              <div id="won" >
                <div id="won1">3</div>
                <div id="won1"> +234********778 </div>
                <div id="won1">₦1,000000</div>
              </div>
              <div id="won" >
                <div id="won1">4</div>
                <div id="won1"> +234********111 </div>
                <div id="won1">₦500,000</div>
              </div>
              <div id="won" >
                <div id="won1">5</div>
                <div id="won1"> +234********567 </div>
                <div id="won1">₦200,000</div>
              </div>
              
              <div id="won" >
                <div id="won1">6</div>
                <div id="won1"> +234********546 </div>
                <div id="won1">₦4240,000</div>
              </div>
              <div id="won" >
                <div id="won1">7</div>
                <div id="won1"> +234********678 </div>
                <div id="won1">₦800,000</div>
              </div>
              <div id="won" >
                <div id="won1">8</div>
                <div id="won1"> +234********343 </div>
                <div id="won1">₦330,000</div>
              </div>
              <div id="won" >
                <div id="won1">9</div>
                <div id="won1"> +234********435 </div>
                <div id="won1">₦2,000000</div>
              </div>
          
              <div id="won" >
                <div id="won1">10</div>
                <div id="won1"> +234********333 </div>
                <div id="won1">₦789,000</div>
              </div>
    </div>
    </center>
  </div>

  
  
</div>
<div style={scr(17)}>
<div id="pato" > <img  id="img" alt="img" src={logo}/> </div>
<div id="ark" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
<div id='bab'><div id='newbod'> Value Best Corporation</div>
<div id='newbodbaby'> Value Best Corporation is a dynamic and innovative company committed to delivering high-quality products and services to meet the diverse needs of its customers. Established in [year], Value Best has rapidly grown into a reputable player in the [industry/sector] through a combination of strategic vision, operational excellence, and a customer-centric approach </div>
<div id="pato2" > <img  id="newbodpix" alt="img" src={value1}/> </div>
<div id='newbodbaby'> Core Values:
At the heart of Value Best's success are its core values, which include integrity, innovation, and customer satisfaction. The company is dedicated to maintaining the highest ethical standards in all its business practices while fostering a culture of continuous improvement and creativity.

Products/Services:
Value Best specializes in [describe products or services], offering a comprehensive range designed to cater to the evolving demands of the market. Whether it's [specific product lines or services], Value Best takes pride in delivering solutions that exceed expectations.

Commitment to Quality:
Quality is a non-negotiable aspect of Value Best's operations. The company adheres to rigorous quality control measures at every stage, from product development to customer service. This commitment has earned Value Best a reputation for reliability and excellence.

Sustainability Initiatives:
Recognizing its responsibility to the environment and the community, Value Best is actively involved in sustainable business practices. The company seeks to minimize its environmental footprint and contribute positively to the communities in which it operates.

Global Presence:
With a global outlook, Value Best has expanded its reach to international markets, establishing a presence in [list of countries/regions]. This global perspective enables the company to stay at the forefront of industry trends and better serve a diverse customer base.

Innovation Hub:
Value Best invests significantly in research and development, maintaining an innovation hub that drives the creation of cutting-edge products and solutions. This commitment to innovation positions the company as a leader in an ever-evolving market.

Contact Information:
[Provide contact details such as the company's headquarters address, phone number, and official website.]

Please note that this is a fictional description generated based on common corporate elements and may not accurately represent any existing company named "Value Best." For accurate and current information, it's recommended to refer to official sources or contact the company directly</div>
<div id="pato2" > <img  id="newbodpix" alt="img" src={value2}/> </div>
  <div id='newbodbaby'> Corporate Leadership:
Value Best Corporation is led by a team of seasoned professionals with a wealth of experience in the [industry/sector]. The leadership team combines expertise, vision, and a passion for excellence, steering the company towards continued growth and success.

Customer-Centric Approach:
At Value Best, customers are at the forefront of every decision. The company places a strong emphasis on understanding and exceeding customer expectations. Through personalized service and a responsive approach, Value Best aims to build long-lasting relationships with its clients.

Industry Recognition:
Value Best has garnered recognition within the [industry/sector] for its outstanding contributions. The company has received accolades for innovation, sustainability practices, and its positive impact on the community. These awards underscore Value Best's commitment to excellence.

Employee Engagement:
The success of Value Best is also attributed to its dedicated and talented workforce. The company fosters a dynamic and inclusive work environment, encouraging employee growth and development. Team members at Value Best are passionate about contributing to the company's mission and achieving shared goals.

Technology Integration:
Embracing the latest technological advancements, Value Best integrates state-of-the-art solutions into its operations. This commitment to technology not only enhances efficiency but also positions the company as a forward-thinking industry leader, adapting to the digital landscape.</div>
<div id="pato2" > <img  id="newbodpix" alt="img" src={value3}/> </div>
<div id='newbodbaby'> Community Outreach: <span> Beyond business, Value Best is actively involved in community outreach programs. The company believes in giving back to society and is engaged in initiatives related to education, healthcare, and environmental conservation. This community-focused approach reflects Value Best's commitment to corporate social responsibility.</span></div>
<div id="pato2" > <img  id="newbodpix" alt="img" src={value4}/> </div>
<div id='newbodbaby'>Financial Strength:
Value Best maintains a robust financial position, underpinned by prudent financial management and strategic investments. This financial stability provides the foundation for sustained growth and allows the company to navigate industry challenges with resilience</div>
<div id="pato2" > <img  id="newbodpix" alt="img" src={value5}/> </div>
<div id='newbodbaby'> Future Growth Strategy:
Looking ahead, Value Best is poised for continued expansion and diversification. The company's strategic roadmap includes plans for entering new markets, introducing innovative products, and furthering its commitment to sustainability. Value Best envisions a future where it continues to set benchmarks in the [industry/sector]. </div>

<div id="pato2" > <img  id="n" alt="img" src={value6}/> </div>
</div>

</div>


<div style={scr(18)}>

<div id="demba"><div id='nwademba'>Earn rewards</div>
<div id="arka" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
</div> 



  </div> 
  
  <div style={scr(19)}>
  <div id="demba"><div id='nwademba'>Invite</div>
<div id="arka" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
<div id="pato3" > <img  id="img" alt="img" src={qrcode}/> </div>
<div id="dembabar2"> <span id='ok'>kCZHeLu2BG</span><div id='bt0111'> Copy Invitation code</div></div>
<div id="dembabar3"> <span id='ok'>https://tsonfood.top/#/share</span><div id='bt0111'> Copy link</div></div>

  
</div> 



  </div>




    </div>

    
  );
}

export default App;
