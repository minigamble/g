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
import bonusimg from './assets/wallet.svg';
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
import productX from './assets/product.svg';
import coupon from './assets/coupon.svg';
import fund from './assets/fund.svg';
import customer from './assets/customer-service.svg';
import team from './assets/team.svg';
import bet from './assets/bet.svg';
import bankicon from './assets/bank.svg';
import sack from './assets/sack.png';
import invitef from './assets/invite-friend.svg';
import orangaton from './assets/orangaton.png';
import back from './assets/back.svg';
import cupon from './assets/cupon.svg';
import value1 from './assets/value1.jpg';
import value2 from './assets/value2.jpg';
import value3 from './assets/value3.jpg';
import value4 from './assets/value4.jpg';
import value5 from './assets/value5.jpg';
import value6 from './assets/value6.jfif'; 
import qrcode from './assets/qrcode.svg';     



function App() {

const agb1 = useRef("")
const agb2 = useRef("")
const agb3 = useRef("")
const agb4 = useRef("")

const [screen, setscreen] = useState(1)
const [load, setload] = useState(0)
const [pin, setpin] = useState("")
const [key, setkey] = useState("")
const [box, setbox] = useState(0)
const [nala, setnala] = useState(0)
const [pce, setpce] = useState(0)
const [menu, setmenu] = useState(0)
const [us, setus] = useState(0)
const [finalprice, setfinalprice] = useState(0)

const [Task_o, setTask_o] = useState(false)


const [price, spr] = useState("")
const [prod, prd] = useState("None")
const [TTask, setTTask] = useState("")

const [invitecode, setinvite] = useState(Codegen)
const [phone, setphone] = useState(0)
const [password, setpassword] = useState("")
const [password2, setpassword2] = useState("")

const [TempData, setTempData] = useState({})
const [Data, setdata] = useState([])
const [adminData, setadmindata] = useState([])
const [JunkData, setJunkData] = useState([])
const [dataweed, setdataweed] = useState([])
const [_makata, set_makata] = useState([])
const [wee, weData] = useState([])
const [weedamount, setweedamount] = useState()
const [Gtask, setGtask] = useState([])

const [Team, setTeam] = useState([])
const [Team2, setTeam2] = useState([])
const [Team3, setTeam3] = useState([])
const [AcBalance, setAcBalance] = useState("")
const [InBalance, setInBalance] = useState("")
const [product, setproduct] = useState("")
const [cycle, setcycle] = useState("")
const [daily, setdaily] = useState("")
const [total, settotal] = useState("")
const [task, settask] = useState("")
const [ac, setac] = useState("")
const [bank, setbank] = useState("")
const [acname, setacname] = useState("")
const [Deposit, setDeposit] = useState("")
const [withdrawal, setwithdrawal] = useState("")
const [bonus, setbonus] = useState("")
const [invcoode, setinvcoode] = useState("")
const [b, setb] = useState("")
const [c, setc] = useState("")
const [d, setd] = useState("")
const [rb, setrb] = useState("")
const [rc, setrc] = useState("")
const [rd, setrd] = useState("")
const [invv, setinvv] = useState(true)
const [qlink, setqlink] = useState('')

const [paga, setpaga] = useState(0)
const [tes, settes] = useState()



//const nkref = window.location.href
const _link = window.location.pathname
const host = window.location.origin

function link(i) { 
  if(_link.toString().slice(0,4) === "/ref"){ return({display:"block"}) }else{ return({display:"none"})} 
 }
useEffect(() => {

  compute();

}, [])


function compute() {
 const _LOG = localStorage.getItem("LOG")
 const _u = localStorage.getItem("du")
 const _p = localStorage.getItem("dp")

  if(_LOG==="true"){ _Autologin(_u,_p.toString()) }else{}
}

  function setlog() {
    localStorage.setItem("LOG","true")
    localStorage.setItem("du",phone.toString())
    localStorage.setItem("dp",password)
  }


  function _logout() {
    localStorage.setItem("LOG","false")
    setscreen(1);setbox(0);
  }

useEffect(() => { 
  //initialize() 
  freezer()
 }, [])
 
 function freezer() {
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 1);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 2);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 3);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 4);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 5);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 6);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 7);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 8);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 9);
 
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 10);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 11);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 12);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 13);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 14);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 15);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 16);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 17);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 18);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 19);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 20);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 21);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 22);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 23);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 24);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 25);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 26);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 27);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 28);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 29);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 30);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 31);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 32);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 33);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 34);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 35);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 36);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 37);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 38);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 39);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 40);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 41);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 42);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 43);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 44);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 45);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 46);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 47);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 48);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 49);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 50);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 51);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 52);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 53);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 54);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 55);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 56);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 57);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 58);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 59);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 60);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 61);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 62);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 63);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 64);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 65);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 66);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 67);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 68);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 69);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 70);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 71);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 72);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 73);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 74);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 75);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 76);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 77);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 78);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 79);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 80);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 81);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 82);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 83);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 84);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 85);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 86);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 87);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 88);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 89);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 90);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 91);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 92);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 93);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 94);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 95);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 96);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 97);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 98);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 99);
 setTimeout(() => {window.history.pushState(null, document.title, "", )}, 100);
 }
 

function keypress(e) {
  if(e.key === "Enter"){ _login() }
}

function findbroders() {
  if(b===""){ _continue() }else{
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/inv",{invite:b})
 .then(function (res){ if(JSON.stringify(res.data)==="[]"){alert("invalid Invitation code")}else{ if(res.data.map(i=> i.b).toString() ==="" ){ _continue()  }else{ setc(res.data.map(i=> i.b).toString());setd(res.data.map(i=> i.c).toString());_continue()  }} 
   setpce(0) })
 .catch(function () { });
 }
}

const regdata = {
  "phone":phone,
  "password":password,
  "invite":invitecode,
  "AcBalance":"0",
  "InBalance":"0",
  "product":"None",
  "cycle":"0",
  "daily":"0",
  "total":"0",
  "task":"0",
  "ac":"",
  "b":b,
  "c":c,
  "d":d,
  "rb":"0",
  "rc":"0",
  "rd":"0",
  "bank":"",
  "acname":"",
  "Deposit":"",
  "Deposit":"",
  "withdrawal":"",
  "key":pin,
  "bonus":"0"
}
const junk = {
  "phone":"junk",
  "password":"",
  "invite":"",
  "AcBalance":"0",
  "InBalance":"0",
  "product":"None",
  "cycle":"0",
  "daily":"0",
  "total":"0",
  "task":"0",
  "ac":"",
  "b":"",
  "c":"",
  "d":"",
  "rb":"0",
  "rc":"0",
  "rd":"0",
  "bank":"",
  "acname":"",
  "Deposit":"",
  "Deposit":"",
  "withdrawal":"",
  "key":pin,
  "bonus":"0"
}

function _phone() { if(phone===""){return(Data.map(i=> i.phone).toString()) }else{return(phone)} }
function _password() { if(password===""){return(Data.map(i=> i.password).toString()) }else{return(password)}  }
function _invitecode() { if(invitecode===""){return(Data.map(i=> i.invite).toString()) }else{return(invitecode)}  }
function _AcBalance() { if(AcBalance===""){return(Data.map(i=> i.AcBalance).toString()) }else{return(AcBalance)}  }
function _InBalance() { if(InBalance===""){return(Data.map(i=> i.InBalance).toString()) }else{return(InBalance)}  }
function _product() { if(product===""){return(Data.map(i=> i.product).toString()) }else{return(product)}  }
function _cycle() { if(cycle===""){return(Data.map(i=> i.cycle).toString()) }else{return(cycle)}  }
function _daily() { if(daily===""){return(Data.map(i=> i.daily).toString()) }else{return(daily)}  }
function _total() { if(total===""){return(Data.map(i=> i.total).toString()) }else{return(total)}  }
function _task() { if(task===""){return(Data.map(i=> i.task).toString()) }else{return(task)}  }
function _ac() { if(ac===""){return(Data.map(i=> i.ac).toString()) }else{return(ac)}  }
function _b() { if(b===""){return(Data.map(i=> i.b).toString()) }else{return(b)}  }
function _c() { if(c===""){return(Data.map(i=> i.c).toString()) }else{return(c)}  }
function _d() { if(d===""){return(Data.map(i=> i.d).toString()) }else{return(d)}  }
function _rb() { if(rb===""){return(Data.map(i=> i.rb).toString()) }else{return(rb)}  }
function _rc() { if(rc===""){return(Data.map(i=> i.rc).toString()) }else{return(rc)}  }
function _rd() { if(rd===""){return(Data.map(i=> i.rd).toString()) }else{return(rd)}  }
function _bank() { if(bank===""){return(Data.map(i=> i.bank).toString()) }else{return(bank)}  }
function _acname() { if(acname===""){return(Data.map(i=> i.acname).toString()) }else{return(acname)}  }
function _Deposit() { if(Deposit===""){return(Data.map(i=> i.Deposit).toString()) }else{return(Deposit)}  }
function _withdrawal() { if(withdrawal===""){return(Data.map(i=> i.withdrawal).toString()) }else{return(withdrawal)}  }
function _key() { if(pin===""){return(Data.map(i=> i.key).toString()) }else{return(key)}  }
function _bonus() { if(bonus===""){return(Data.map(i=> i.bonus).toString()) }else{return(bonus)}  }
function _Runbonus() { if(Data.map(i=> i.invite).toString() === bonus ){ _checkbonus() }else{ alert("Incorrect code") }  }


function payone(i) { if(paga===i){setpaga(0)}else{setpaga(i)} }

function clearupdate(){
  setAcBalance("");setInBalance("");setproduct("");setcycle("");setdaily("");settotal("");settask("");setac("");setbank("");setacname("");setDeposit("");setwithdrawal("");setbonus("");
}


const Uborn = {
  "phone":  Data.map(i=> i.phone).toString(),
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": (parseInt(_AcBalance())+600),
  "InBalance": _InBalance(),
  "product": _product(),
  "cycle": _cycle(),
  "daily": _daily(),
  "total": _total(),
  "task": _task(),
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": "600"
}

function _checkbonus() {
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:Data.map(i=> i.phone).toString()})
 .then(function (res){ if(res.data.map(i=> i.bonus).toString() ==="0" ){  _upbonus() }else{ alert("Bonus Alredy collected") }
   setpce(0) })
 .catch(function () { });
}
function _upbonus() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",Uborn)
 .then(function (res){ setpce(0);alert("Bonus collected"); setdata([Uborn])  })
 .catch(function (error) { });
}


function Bweed() {
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:Data.map(i=> i.phone).toString()})
 .then(function (res){ if(res.data.map(i=> i.InBalance).toString()>= parseInt(weedamount) ){  _preweed() }else{ alert("not enough money") };setdata(res.data)
   setpce(0) })
 .catch(function () { });
}

function _runweed(rd) { const ruuu = document.getElementById("wepo"); setdata(rd);  setTimeout(() => { ruuu.click() }, 200); }

function _preweed() {
  const ruuu = document.getElementById("wepo");
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/weed/find",{phone:Data.map(i=> i.phone).toString()})
 .then(function (res){  setpce(0); if(JSON.stringify(res.data)==="[]"){ setpce(0);setTimeout(() => { ruuu.click() }, 200);}else{ setpce(0);alert("Request alredy Submited") }  })
 .catch(function (error) { });
}


function getusers() {
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user" )
 .then(function (res){ setpce(0);set_makata(res.data)  })
 .catch(function (error) { });
}
function _Gtask() {
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:"task"})
 .then(function (res){ setpce(0);setGtask(res.data)  })
 .catch(function (error) { });
}

function _completeweed() { 
  
const Uuu = {
  "phone":  Data.map(i=> i.phone).toString(),
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": _AcBalance(),
  "InBalance": _InBalance(),
  "product": _product(),
  "cycle": _cycle(),
  "daily": _daily(),
  "total": _total(),
  "task": _task(),
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":weedamount,
  "key": _key(),
  "bonus": _bonus()
}
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/weed/add",Uuu)
 .then(function (res){ setpce(0);alert("Request sent")   })
 .catch(function (error) { });
}

const try4h = {
  "phone":  Data.map(i=> i.phone).toString(),
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": _AcBalance(),
  "InBalance": _InBalance(),
  "product": _product(),
  "cycle": _cycle(),
  "daily": _daily(),
  "total": _total(),
  "task": _task(),
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": _bonus()
}

const inv = {
  "phone":  Data.map(i=> i.phone).toString(),
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": "0",
  "InBalance": "0",
  "product": prod,
  "cycle":cycle,
  "daily":daily,
  "total":total,
  "task": "1",
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": _bonus()
}

function _adupdate() { 

  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/admin/add",try4h)
 .then(function (res){ clearupdate();alert("Deposit requested successfully") })
 .catch(function (error) { });
}

function _preadd() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/admin/find",{phone:Data.map(i=> i.phone).toString()})
 .then(function (res){  if(Data.map(i=> i.ac).toString() != "" ||Data.map(i=> i.bank).toString()!=""||Data.map(i=> i.acname).toString()!="" ){
  if(JSON.stringify(res.data)==="[]"){ _adupdate();setpce(0)}else{ setpce(0);alert("Request alredy Submited") }
}else{setpce(0);alert("Please Update Bank details")} })
 .catch(function (error) { });
}

function reg() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/add",regdata)
 .then(function (res){ setpce(0);setscreen(0);setdata([regdata]);setmenu(1) })
 .catch(function (error) { });
}


function _chkjunk() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/admin/find",{phone:"junk"})
 .then(function (res){  if(JSON.stringify(res.data)==="[]"){ addjunk() }else{ setJunkData(res.data) } })
 .catch(function (error) { });
}
function addjunk() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/add",junk)
 .then(function (res){ setpce(0); })
 .catch(function (error) { });
}
function upjunk() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",junk)
 .then(function (res){ setpce(0) })
 .catch(function (error) { });
}

function item(c,b,i,d,f,cy) { setcycle(cy);settotal(f);setdaily(d);setfinalprice(i);spr(c);prd(b);setus(1) }
function runpin(i) { if(pin.length<4){setpin(pin+i)} }
function loadtime(){ if(load>0){return("preloader")}else{return("preloader0")}}

function scr(i){if(_link.toString().slice(0,4) === i ){return({display:"block"})}else{ if(i===screen){return ({display:"block"})}else{return({display:"none"})}} }
function _menu(i){if(i===menu){return ({display:"block"})}else{return({display:"none"})}}

function _uni(){if(1===us){return ("uni")}else{return("uni2")}}
function _unipopo(i){if(1===us){return ({display:"block"})}else{return({display:"none"})}}

function skey(i) { if(i>=key.length){return({display:"block"})}else{return({display:'none'})} }
function lbox(i) {if(box==i){return({display:'block'})}else{return({display:'none'})}}
function _nalart(i) {if(nala==i){return({display:'block'})}else{return({display:'none'})}}
function _process(i) {if(pce==i){return({display:'block'})}else{return({display:'none'})}}
function _paga(i) {if(paga==i){return({display:'block'})}else{return({display:'none'})}}


function _invest() { if(parseInt(Data.map(i=> i.AcBalance))>=finalprice){ preInvest() }else{ alert("not enough money") } }

function _precon() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:phone})
 .then(function (res){ if(JSON.stringify(res.data)==="[]"){setscreen(3);setpce(0)}else{ setpce(0);alert("User alredy exist") } })
 .catch(function (error) { });
}

function _admingrab() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/admin")
 .then(function (res){ setpce(0);setadmindata(res.data)  })
 .catch(function (error) { });
}

function _admingrabibbi() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/weed")
 .then(function (res){ setpce(0);weData(res.data)  })
 .catch(function (error) { });
}

const tss = {
  "phone":"task",
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": "0",
  "InBalance": daily,
  "product": prod,
  "cycle":cycle,
  "daily":daily,
  "total":total,
  "task": "",
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": _bonus()
}
function _cketask() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",tss)
 .then(function (res){  if(Data.map(i=> i.task)===res.data.map(i=> i.task)){setpce(0);setTask_o(true);setscreen(18)}else{ setpce(0);setTask_o(false);setscreen(18) } })
 .catch(function (error) { });
}

const mi1 = Gtask.map(i=> i.task).toString()
const mi2 = Data.map(i=> i.task).toString()
function _ttester() { if(mi1===mi2 ){return ("tocent2X")}else{return("tocent")} }
function _ttestermus() { if(mi1===mi2 ){return ("tocent2")}else{return("tocent2X")} }


function _prrtask() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:Data.map(i=> i.phone).toString()})
 .then(function (res){ setpce(0);_prrtask2(res.data)  })
 .catch(function (error) { });
}
function _prrtask2(ml) { 
  
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{"phone":"task"})
 .then(function (res){ setpce(0); if(res.data.map(i=> i.task).toString()===ml.map(i=> i.task).toString()){alert("Task alredy done")}else{_Runtask()} })
 .catch(function (error) { });
}


function _Runtask(){
  if(parseInt(_total())>=parseInt(_InBalance())+parseInt(_daily())){
  setpce(50);setnala(0)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",taskomo)
 .then(function (res){ setpce(0);_Gtask();rr(res.data) })
 .catch(function (error) { });
 }else{alert("Project cycle completed")}

}

function _Var() {  }

function rr(i) { 
 
const N3230 = {
  "phone":  Data.map(i=> i.phone).toString(),
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": _AcBalance(),
  "InBalance": parseInt(_InBalance())+parseInt(_daily()),
  "product": _product(),
  "cycle": _cycle(),
  "daily": _daily(),
  "total": _total(),
  "task": i.map(i=> i.task).toString(),
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": _bonus()
}

  setpce(50);setnala(0)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",N3230)
 .then(function (res){  setdata([N3230]);setpce(0);alert("Task Done") })
 .catch(function (error) { });
}
  

const taskomo = {
  "phone":"task",
  "password": Data.map(i=> i.password).toString(),
  "invite": Data.map(i=> i.invite).toString(),
  "AcBalance": "0",
  "InBalance": daily,
  "product": prod,
  "cycle":cycle,
  "daily":daily,
  "total":total,
  "task": Codegen(),
  "ac": _ac(),
  "b": _b(),
  "c": _c(),
  "d": _d(),
  "ac": _ac(),
  "rb": _rb(),
  "rc": _rc(),
  "rd": _rd(),
  "bank": _bank(),
  "acname":_acname(),
  "Deposit":_Deposit(),
  "withdrawal":_withdrawal(),
  "key": _key(),
  "bonus": _bonus()
}

function _taker1() { 
  setpce(50);setnala(0)
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",taskomo)
 .then(function (res){ if(JSON.stringify(res.data)==="[]" ){setpce(0);_taker2()}else{ setpce(0);_taker3() }   })
 .catch(function (error) { });
}
function _taker2() { 
  setpce(50);setnala(0)
  axios.post("https://wind-east-albertonykus.glitch.me/user/add",taskomo)
 .then(function (res){ setpce(0);alert("Task Generated") })
 .catch(function (error) { });
}
function _taker3() { 
  setpce(50);setnala(0)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",taskomo)
 .then(function (res){ setpce(0);alert("Task Generated") })
 .catch(function (error) { });
}


function _myteam() { 
  setpce(50);_myteam2()
  axios.post("https://wind-east-albertonykus.glitch.me/user/b",{b:Data.map(i=> i.invite).toString()})
 .then(function (res){ setscreen(29);setpce(0);setTeam(res.data)  })
 .catch(function (error) { });
}
function _myteam2() { 
  setpce(50);_myteam3()
  axios.post("https://wind-east-albertonykus.glitch.me/user/c",{c:Data.map(i=> i.invite).toString()})
 .then(function (res){ setscreen(29);setpce(0);setTeam2(res.data)  })
 .catch(function (error) { });
}
function _myteam3() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/d",{d:Data.map(i=> i.invite).toString()})
 .then(function (res){ setscreen(29);setpce(0);setTeam3(res.data)  })
 .catch(function (error) { });
}


function chdata() { if(JSON.stringify(adminData)==="[]"){return(

  <div id="tocent2" >
   <center>
  <div id="okuko1" >
     <div id="koi" ><img  id="reimg" alt="img" src={Task}/></div>
     <div id="hf2" >
     <div id='re'> No Request </div>
 
     </div>
   </div>
   <div style={{height:"80px"}} ></div>
     <div id="bt01" onClick={e=> setscreen("admin")} > Go Back </div></center>
  </div>)}else{return(<div id="sele">
    {adminData.map(i=> 
    <div id="mboko" >
    <div id="inbok">Bank : {i.bank}</div>
    <div id="inbok">Account Name : {i.acname}</div>
    <div id="inbok">Account Number : {i.ac}</div>
    <div id="inbok">Ammount : ₦{i.Deposit}</div>
    <div style={{marginTop:"20px"}} ></div>
    <center><div id="bt01" onClick={e=> {setnala(6);setTempData(i)}} > Approve </div></center>
    <center><div id="bt01" onClick={e=> {setnala(9);setTempData(i)}} > Reject </div></center>
      
      </div>
    ) }
  </div>)}
   }

function chdata2() { if(JSON.stringify(wee)==="[]"){return(

  <div id="tocent2" >
   <center>
  <div id="okuko1" >
     <div id="koi" ><img  id="reimg" alt="img" src={Task}/></div>
     <div id="hf2" >
     <div id='re'> No Request </div>
 
     </div>
   </div>
   <div style={{height:"80px"}} ></div>
     <div id="bt01"  onClick={e=> setscreen("admin")} > Go Back </div></center>
  </div>)}else{return(<div id="sele" >
    {wee.map(i=> 
    <div id="mboko" >
    <div id="inbok">Bank : {i.bank}</div>
    <div id="inbok">Account Name : {i.acname}</div>
    <div id="inbok">Account Number : {i.ac}</div>
    <div id="inbok">Ammount : ₦{i.withdrawal}</div>
    <div style={{marginTop:"20px"}} ></div>
    <center><div id="bt01" onClick={e=> {setnala(7);setTempData(i)}} > Approve </div></center>
      
      </div>
    ) }
  </div>)}
   }

function _continue() {
  if(phone.length<10){setnala(1)}else if(password.length<7){setnala(2)}else if(password!=password2){setnala(3)}else{ _precon() }
  
}

function today(i) {
  if(TTask===i){return(TTask)}else{return("0")}}

function pincross() {
  if(pin.length===4){reg()}else{setnala(4)}
}

function reg() { 
  setpce(1)
  axios.post("https://wind-east-albertonykus.glitch.me/user/add",regdata)
 .then(function (res){ setpce(0);setscreen(0);setdata([regdata]);setmenu(1) })
 .catch(function (error) { });
}

async function _login() { 
  setpce(50)
  if(phone.toString()==="123"){ if(password==="admin"){setlog();setpce(0);_admingrab();getusers();_admingrabibbi();setscreen("admin")}}else{
 await axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:phone})
 .then(function (res){ if(JSON.stringify(res.data)==="[]"){setpce(0);alert("Invalid Phone or password")}else{setpce(0);settes(res.data.map(i=> i.password).toString().length )
  if(res.data.map(i=> i.password).toString() === password){
  _Gtask();setpce(0);setdata(res.data);setscreen(0);setmenu(1);setlog() }else{//setpce(0);alert("Invalid Phone or password")
  }
 } })
 .catch(function (error) { });
}
}
function _Autologin(u,p) { 
  setpce(50);
  if(u.toString()==="123"){ if(p==="admin"){setpce(0);_admingrab();getusers();_admingrabibbi();setscreen("admin")} }else{
  axios.post("https://wind-east-albertonykus.glitch.me/user/find",{phone:u})
 .then(function (res){  if(JSON.stringify(res.data)==="[]"){setpce(0);alert("Invalid Phone or password")}else{
  _Gtask();setpce(0);setdata(res.data);setscreen(0);setmenu(1)
 } })
 .catch(function (error) { });
}
}

function _update() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",try4h)
 .then(function (res){ setdata([try4h]);setpce(0);agb1.current.value="";agb2.current.value="";agb3.current.value=""  })
 .catch(function (error) { });
}

function preInvest() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/inv",{invite:Data.map(i=> i.b).toString()})
 .then(function (res){ _ub(res.data);preInvest2();  })
 .catch(function (error) { }); 
}

function preInvest2() { 

  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/inv",{invite:Data.map(i=> i.c).toString()})
 .then(function (res){ _uc(res.data);preInvest3(); })
 .catch(function (error) { }); 
}

function preInvest3() { 

  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/inv",{invite:Data.map(i=> i.d).toString()})
 .then(function (res){ _ud(res.data);setpce(0)  })
 .catch(function (error) { }); 
}


function _Ref1(x) { if(Data.map(i=> i.b)!=""){return(parseInt(finalprice)/100*10 ) }else{return(parseInt(x.map(i=> i.rb))) } }
function _Ref2(x) { if(Data.map(i=> i.c)!=""){return(parseInt(finalprice)/100*3 ) }else{return(parseInt(x.map(i=> i.rc))) } }
function _Ref3(x) { if(Data.map(i=> i.d)!=""){return(parseInt(finalprice)/100*2 ) }else{return(parseInt(x.map(i=> i.rd))) } }


//-------------------------------B----------------
function _ub(x) { 

  const todfk = {
    "phone":  x.map(i=> i.phone).toString(),
    "password": x.map(i=> i.password).toString(),
    "invite": x.map(i=> i.invite).toString(),
    "AcBalance": x.map(i=> i.AcBalance).toString(),
    "InBalance": parseInt(x.map(i=> i.InBalance))+_Ref1(x),
    "product": x.map(i=> i.product).toString(),
    "cycle": x.map(i=> i.cycle).toString(),
    "daily": x.map(i=> i.daily).toString(),
    "total": x.map(i=> i.total).toString(),
    "task": x.map(i=> i.task).toString(),
    "ac": x.map(i=> i.ac).toString(),
    "b": x.map(i=> i.b).toString(),
    "c": x.map(i=> i.c).toString(),
    "d": x.map(i=> i.d).toString(),
    "rb": parseInt(x.map(i=> i.rb))+_Ref1(x),
    "rc": x.map(i=> i.rc).toString(),
    "rd": x.map(i=> i.rd).toString(),
    "bank": x.map(i=> i.bank).toString(),
    "acname":x.map(i=> i.acname).toString(),
    "Deposit":x.map(i=> i.Deposit).toString(),
    "withdrawal":x.map(i=> i.withdrawal).toString(),
    "key": x.map(i=> i.key).toString(),
    "bonus": x.map(i=> i.bonus).toString()
  }
  
  if(Data.map(i=> i.b)!=""){
    setpce(50)
    axios.post("https://wind-east-albertonykus.glitch.me/user/up",todfk)
   .then(function (res){ _buy() })
   .catch(function (error) { })}else{_buy()}
}


//-------------------------------C----------------
function _uc(x) { 
  
  const todfk = {
    "phone":  x.map(i=> i.phone).toString(),
    "password": x.map(i=> i.password).toString(),
    "invite": x.map(i=> i.invite).toString(),
    "AcBalance": x.map(i=> i.AcBalance).toString(),
    "InBalance": parseInt(x.map(i=> i.InBalance))+_Ref2(x),
    "product": x.map(i=> i.product).toString(),
    "cycle": x.map(i=> i.cycle).toString(),
    "daily": x.map(i=> i.daily).toString(),
    "total": x.map(i=> i.total).toString(),
    "task": x.map(i=> i.task).toString(),
    "ac": x.map(i=> i.ac).toString(),
    "b": x.map(i=> i.b).toString(),
    "c": x.map(i=> i.c).toString(),
    "d": x.map(i=> i.d).toString(),
    "rb": x.map(i=> i.rb).toString(),
    "rc": parseInt(x.map(i=> i.rc))+_Ref2(x),
    "rd": x.map(i=> i.rd).toString(),
    "bank": x.map(i=> i.bank).toString(),
    "acname":x.map(i=> i.acname).toString(),
    "Deposit":x.map(i=> i.Deposit).toString(),
    "withdrawal":x.map(i=> i.withdrawal).toString(),
    "key": x.map(i=> i.key).toString(),
    "bonus": x.map(i=> i.bonus).toString()
  }
  
  if(Data.map(i=> i.c)!=""){
    setpce(50)
    axios.post("https://wind-east-albertonykus.glitch.me/user/up",todfk)
   .then(function (res){  })
   .catch(function (error) { });  }else{ }
}

//-------------------------------D----------------
function _ud(x) { 
  
  const todfk = {
    "phone":  x.map(i=> i.phone).toString(),
    "password": x.map(i=> i.password).toString(),
    "invite": x.map(i=> i.invite).toString(),
    "AcBalance": x.map(i=> i.AcBalance).toString(),
    "InBalance": parseInt(x.map(i=> i.InBalance))+_Ref3(x),
    "product": x.map(i=> i.product).toString(),
    "cycle": x.map(i=> i.cycle).toString(),
    "daily": x.map(i=> i.daily).toString(),
    "total": x.map(i=> i.total).toString(),
    "task": x.map(i=> i.task).toString(),
    "ac": x.map(i=> i.ac).toString(),
    "b": x.map(i=> i.b).toString(),
    "c": x.map(i=> i.c).toString(),
    "d": x.map(i=> i.c).toString(),
    "rb": x.map(i=> i.rb).toString(),
    "rc": x.map(i=> i.rc).toString(),
    "rd": parseInt(x.map(i=> i.rd))+_Ref3(x),
    "bank": x.map(i=> i.bank).toString(),
    "acname":x.map(i=> i.acname).toString(),
    "Deposit":x.map(i=> i.Deposit).toString(),
    "withdrawal":x.map(i=> i.withdrawal).toString(),
    "key": x.map(i=> i.key).toString(),
    "bonus": x.map(i=> i.bonus).toString()
  }
  
  if(Data.map(i=> i.d)!=""){
    setpce(50)
    axios.post("https://wind-east-albertonykus.glitch.me/user/up",todfk)
   .then(function (res){  })
   .catch(function (error) { });  }else{}
}

  
function _buy() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",inv)
 .then(function (res){ setdata([inv]);setpce(0);alert("Invested successfully")   })
 .catch(function (error) { });
}
function _reject() { 
  
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/admin/remove",TempData)
 .then(function (res){ setpce(0);_admingrab();setnala(0) })
 .catch(function (error) { });

}

function _approve(i) { 
  
  const direct = document.getElementById("direct")

const try5G = {
  "phone":  i.phone,
  "password": i.password,
  "invite": i.invite,
  "AcBalance":parseInt(i.Deposit)+parseInt(i.AcBalance),
  "InBalance": i.InBalance,
  "product": "None",
  "cycle": i.cycle,
  "daily": "0",
  "total": i.total,
  "task": i.task,
  "ac": i.ac,
  "b": i.b,
  "c": i.c,
  "d": i.d,
  "rb": i.rb,
  "rc": i.rc,
  "rd": i.rd,
  "bank": i.bank,
  "acname":i,
  "Deposit":"0",
  "withdrawal":i.withdrawal,
  "key": i.key,
  "bonus": i.bonus
}
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",try5G)
 .then(function (res){ setpce(0); direct.click() })
 .catch(function (error) {  });
}


function _approve2(i) { 
  
  const direct = document.getElementById("direct2")

const try5G = {
  "phone":  i.phone,
  "password": i.password,
  "invite": i.invite,
  "AcBalance":i.Deposit,
  "InBalance": parseInt(i.InBalance)-parseInt(i.withdrawal),
  "product": i.product,
  "cycle": i.cycle,
  "daily": i.daily,
  "total": i.total,
  "task": i.task,
  "ac": i.ac,
  "ac": i.ac,
  "b": i.b,
  "c": i.c,
  "d": i.d,
  "rb": i.rb,
  "rc": i.rc,
  "rd": i.rd,
  "bank": i.bank,
  "acname":i,
  "Deposit":"0",
  "withdrawal":"0",
  "key": i.key,
  "bonus": i.bonus
}
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/user/up",try5G)
 .then(function (res){ setpce(0); direct.click() })
 .catch(function (error) {  });
}

function _completeapproval() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/admin/remove",TempData)
 .then(function (res){ setpce(0);_admingrab(); })
 .catch(function (error) { });
}

function _completeapproval2() { 
  setpce(50)
  axios.post("https://wind-east-albertonykus.glitch.me/weed/remove",TempData)
 .then(function (res){ setpce(0);_admingrabibbi() })
 .catch(function (error) { });
} 

function whiteblock() {
 // if(agb4.currentTarget.value.slice(-1) === " "){}
}

function sdx() { //if(password.slice(-1) === "" ){ return("") }else{return(password.slice(-1))} 
}
  return (

    <div id="skin" >
      
      <div hidden="hidden"  ><QRCodeSVG value={invitecode+invitecode} /></div>
      <div id="direct" onClick={e=> _completeapproval()} ></div>
      <div id="direct2" onClick={e=> _completeapproval2()} ></div>
      <div id="wepo" onClick={e=> _completeweed()} ></div>
      <div id="logout" style={_nalart(5)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >You have Insufficient funds</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> {setus(0);setscreen(20);setnala(0)}} >Fund</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Cancel</div></div>
      </div></div>
      
      <div id="logout" style={_nalart(6)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure of this Approval</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> {_approve(TempData);setnala(0)}} >Approve</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Cancel</div></div>
      </div></div>
      
      <div id="logout" style={_nalart(7)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure of this Approval</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> {_approve2(TempData);setnala(0)}} >Approve</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Cancel</div></div>
      </div></div>
      
      <div id="logout" style={_nalart(8)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure ?</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> _taker1() } >Generate Task</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Cancel</div></div>
      </div></div>

      <div id="logout" style={_nalart(9)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Are you sure ?</div></center>
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> _reject() } >Reject</div> 
        <div id="bt0" style={{width:"35%"}} onClick={e=> setnala(0)}  >Cancel</div></div>
      </div></div>
      
      
<div id="Overcover" style={_process(1)} >
  <div id="processing" >
    <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
    <div id="pronote" >Processing Registration</div>
  </div>
</div>

<div id="Overcover" style={_process(50)} >
  <div id="processing" >
    <div id="iconsize" ><div id="spin" ><img  id="img" alt="img" src={loading}/></div></div>
    <div id="pronote" >Processing</div>
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
        <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> _logout() } >Yes</div> 
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
  <div id="ico" > <img  id="img" alt="img" src={bonusimg}/> </div>
  <div id="name" >Bonus</div>
</div>

<div id="icon" onClick={e=> setscreen(19)} >
  <div id="ico" > <img  id="img" alt="img" src={invite}/> </div>
  <div id="name" >Inivite</div>
</div>

<div id="icon"  onClick={()=> window.open("https://wa.link/zdohwp", "_blank")} >
  <div id="ico" > <img  id="img" alt="img" src={Cusomer} /> </div>
  <div id="name" >Customer</div>
</div>

<div id="icon" onClick={e=> setscreen(28)} >
  <div id="ico" > <img  id="img" alt="img" src={money}/> </div>
  <div id="name" >Earnings</div>
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

<div id="icon"  onClick={e=> {_cketask();_Gtask()}} >
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
      <div style={{marginTop:"40px"}} > </div>
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Phone</div>
      <input id="allinput" style={{width:"85%"}} type='number' onChange={e=> setphone(e.currentTarget.value)} onKeyUp={e=>keypress(e)}/>
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Password</div>
      <input id="allinput" type="password" style={{width:"85%"}} onChange={e=> {setpassword(e.currentTarget.value);whiteblock()}} onKeyUp={e=>keypress(e)} />
      <div id="btt" style={{width:"80%",marginTop:'30px'}}  onClick={e=> _login()} >Log In</div  >
      <div style={{marginTop:"40px"}} > </div>
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
      <input id="allinput" style={{width:"85%"}}  onChange={e=> setb(e.currentTarget.value) } />
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> findbroders()} >Continue</div  >
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}}  onClick={e=> setscreen(1)}  >Login</div>
      </center>
    </div>
           </div>
      </div>
      
      <div style={scr("/ref")} >
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
      <input id="allinput" style={{width:"85%"}}  onChange={e=> setb(e.currentTarget.value)} value={_link.slice((link.length-link.length)+5)} />
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> findbroders()} >Continue</div  >
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
    <div id="phone" > {Data.map(i=> i.phone).toString().slice(0,3)}********{Data.map(i=> i.phone).toString().slice(-3)} </div>
    <div id="id" > ID:<span> {Data.map(i=> i.invite)}</span></div>


<div id='recharge' >
<div id="okuko2"  onClick={e=> setscreen(20)}>
    <div id="koi"  ><img  id="reimg" alt="img" src={recharge}/></div>
    <div id="hf2" >
    <div id='re' > Recharge </div>

    </div>
  </div>

  <div id="okuko2" onClick={e=> setscreen(26)} >
    <div id="koi" ><img  id="reimg" alt="img" src={card}/></div>
    <div id="hf2" >
    <div id='re'> Withdrawal </div>

    </div>
  </div>

  <div id="ent">
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >Recharge Bag </div>
  <div id="na" >₦{Data.map(i=> i.AcBalance)}</div>
</div>
  <div id="icon" >
  <div id="ic" >Balance </div>
  <div id="name" >₦{Data.map(i=> i.InBalance)}</div>
</div>
  <div id="icon" >
  <div id="ic" >Product </div>
  <div id="na" >{Data.map(i=> i.product)}</div>
</div>
    </div>
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >Total revenue </div>
  <div id="na" >₦{Data.map(i=> i.InBalance)}</div>
</div>
  <div id="icon" >
  <div id="ic" >Team commission </div>
  <div id="na" >₦{parseInt(Data.map(i=> i.rb))+parseInt(Data.map(i=> i.rc))+parseInt(Data.map(i=> i.rd)) }</div>
</div>
  <div id="icon" >
  <div id="ic" >Today's Income</div>
  <div id="na" >₦ {Data.map(i=> i.daily)} </div>
</div>
    </div>
  </div>

  <div id="unient" >
    <div id="entpikin" >
  <div id="icon" >
  <div id="ic" >10% </div>
  <div id="na" >{Data.map(i=> i.rb)} <span>(0)</span></div>
</div>
  <div id="icon" >
  <div id="ic" >3% </div>
  <div id="name" >{Data.map(i=> i.rc)}<span>(C)</span></div>
</div>
  <div id="icon" >
  <div id="ic" >2% </div>
  <div id="na" >{Data.map(i=> i.rd)}<span>(D)</span></div>
</div>
    </div>

    <div id="bt01" onClick={e=> _myteam(29)} > View Team </div>
  </div>

  <div id="ooo" >
    <div id="ok" >
      
<div id="icon" onClick={e=> setscreen(6)} >
  <div id="ico" > <img  id="img" alt="img" src={productX}/> </div>
  <div id="name" >All  Product</div>
</div>
<div id="icon" onClick={e=> setscreen(22)}>
  <div id="ico" > <img  id="img" alt="img" src={coupon}/> </div>
  <div id="name"  >Coupon</div>
</div>
<div id="icon" onClick={e=> setscreen(20)}  >
  <div id="ico" > <img  id="img" alt="img" src={fund}/> </div>
  <div id="name" >Fund</div>
</div>
    </div>

    
    <div id="ok" >
      
<div id="icon"   onClick={e=> setscreen(9)}>
  <div id="ico" > <img  id="img" alt="img" src={bet}/> </div>
  <div id="name" >Bonus</div>
</div>
<div id="icon" onClick={e=> setscreen(21)} >
  <div id="ico" > <img  id="img" alt="img" src={bankicon}/> </div>
  <div id="name" >Add Bank</div>
</div>
<div id="icon"  onClick={e=> setscreen(19)}>
  <div id="ico" > <img  id="img" alt="img" src={invitef}/> </div>
  <div id="name" >Invite</div>
</div>
    </div>

    <div id="ok" >
<div id="icon"  onClick={e=> _myteam(29)}>
  <div id="ico" > <img  id="img" alt="img" src={team}/> </div>
  <div id="name"  >My Team</div>
</div>
<div id="icon"  onClick={()=> window.open("https://wa.link/zdohwp", "_blank")} >
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
    <input style={{marginTop:"40px",marginBottom:"20px"}} onChange={e=> setbonus(e.currentTarget.value)} placeholder="Plase Enter Bonus code" id="allinput" />
        <div id="bt0" style={{width:"35%"}} onClick={e=> _Runbonus(0)}  >Receive</div>
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
<p id='pp'>Total yeild rate <spam>6%</spam></p>
<p id='pp'>Total revenue <spam>₦7500</spam></p>

<div id='bt01' onClick={e=> item("₦5000","Eggs",5000,300,7500,25) } >Invest Product</div>

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
<p id='pp'>Total yeild rate <spam>5.8%</spam></p>
<p id='pp'>Total revenue <spam>₦36,540</spam></p>

<div id='bt01' onClick={e=> item("₦18,000","Chiken",18000,1044,36540,35) } >Invest Product</div>

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
<p id='pp'>Total yeild rate <spam>5.2%</spam></p>
<p id='pp'>Total revenue <spam>₦83,200</spam></p>

<div id='bt01' onClick={e=> item("₦40,000","Turkey",40000,2000,83200,40) } >Invest Product</div>

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
<p id='pp'>Total yeild rate <spam>7%</spam></p>
<p id='pp'>Total revenue <spam>₦196,000</spam></p>

<div id='bt01' onClick={e=> item("₦80,000","Yam",80000,5600,196000,35) } >Invest Product</div>

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
<p id='pp'>Total yeild rate <spam>6.5%</spam></p>
<p id='pp'>Total revenue <spam>₦364,000</spam></p>

<div id='bt01' onClick={e=> item("₦140,000","Rice",140000,9100,364000,40) } >Invest Product</div>

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
<p id='pp'>Total yeild rate <spam>7%</spam></p>
<p id='pp'>Total revenue <spam>₦490,000</spam></p>

<div id='bt01' onClick={e=> item("₦200,000","Beans",200000,14000,490000,35) } >Invest Product</div>

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
      <div>₦ {Data.map(i=> i.AcBalance)}</div>
      <div>Account Balance</div>
    </div>
    <div id="rbox" >
      <div>₦ { Data.map(i=> i.InBalance) }</div>
      <div>Income Balance</div>
    </div>
  </div>
  <div id="hilo" ><div id="bt0" style={{width:"35%"}} onClick={e=> {setscreen(20);setus(0)}} >Recharge</div> <div id="bt0" style={{width:"35%"}}   onClick={e=> {setscreen(19);setus(0)}}>Invite</div></div>
  
<p id='pp'>price <spam>{price}</spam></p>
<p id='pp'>Product <spam>{prod}</spam></p>
<p id='pp' style={{color:"red"}}>Actual payment amount <spam>{price}</spam></p>
<div id="well" ><div id='bt01' onClick={e=> _invest()} >Invest Product</div></div>
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

  <center>
<div id={_ttester()} >
 <div id="okuko1" >
    <div id="koi" ><img  id="reimg" alt="img" src={Task}/></div>
    <div id="hf2" >
    <div id='re'> Task </div>
    </div>
  </div>
    <div style={{marginTop:"80px"}} ></div>
    <div id="bt01" onClick={e=> _prrtask()} > Run Task </div>
 </div>

 
 <div id={_ttestermus()} >
 <div id="okuko1" >
    <div id="koi" ><img  id="reimg" alt="img" src={Task}/></div>
    <div id="hf2" >
    <div id='re'> No task </div>

    </div>
  </div>
 </div>

   </center>

  </div> 
  
  <div style={scr(19)}>
  <div id="demba"><div id='nwademba'>Invite</div>
<div id="arka" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
<div id="pato3" > <img  id="img" alt="img" src={qrcode}/> </div>
<div id="dembabar10"> 
<center>
<div id='ok2'>https://valuebest.online/ref/{Data.map(i=> i.invite)}</div><div style={{height:"20px"}} ></div>
<div id='btox' onClick={e=> navigator.clipboard.writeText("https://valuebest.online/ref/"+Data.map(i=> i.invite).toString())}> Copy Invitation code</div></center></div>

  
</div> 



  </div>

<div style={scr(20) }>
  
  <div id='all'>
  <div id="demba"><div id='nwademba'>Recharge</div></div>
<div id="arka1" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(8)}/> </div>
<button id="ego">NGN</button>
<div id='iti'>  Choose the way to Recharge</div>
<div id='btz' onClick={e=> payone(1)} > PAY-M</div>
<div id='btz' onClick={e=> payone(2)} > PAY-P</div>
<div id='iti' style={_paga(1)} > Bank: Kuda Microfinance Bank <div> Account No: 2067747160 </div><span>Name: EDEH, EMEKA SAMSON </span></div>
<div id='iti' style={_paga(2)} > Bank : Providus Bank <div> Account No : 9633568749 </div><span>Name: Dart(VPay Collections) </span></div>
<div id='iti'>  Recharge Amount (₦)</div>
<div><input placeholder='₦ Recharge amount' type='number' id='ud' onChange={e=> setDeposit(e.currentTarget.value)} /></div>

<div id= 'ahu'>
<div id='iti'>  Minimum Recharge ₦ 1000</div>
<div id='iti'>  Maximum Recharge  Unlimited</div>
</div>
<div id='iti1'> Please dont save the old account recharge.You must enter the recharge channel to obtain the latest company collection account for each recharge.</div>
<div id='iti1'> Please Send Exact recharge amount to  account number above before clicking on top up.Account will top up automatically once recharge is verified.</div>
<div id='bt02' onClick={e=> _preadd() } > Top up </div>
<div style={{height:"110px"}}></div>
  </div>


</div>

<div style={scr(21) }>

  
<div id="miniskin" > 

<div id="logbox" >
<center>

<div id="entrylabel" style={{marginTop:'10px',textAlign:"left",marginBottom:"0px",marginLeft:'3%'}} >Bank Name </div>
<input id="allinput" style={{width:"85%"}} placeholder={Data.map(i=> i.bank)} onChange={e=> setbank(e.currentTarget.value)} ref={agb1} />
<div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Account Number</div>
<input id="allinput" style={{width:"85%"}} placeholder={Data.map(i=> i.ac)} type='number' onChange={e=> setac(e.currentTarget.value)}  ref={agb2} />
<div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}}>Account Name</div>
<input id="allinput" style={{width:"85%",marginBottom:"25px"}} placeholder={Data.map(i=> i.acname).toString()}  onChange={e=> setacname(e.currentTarget.value)}  ref={agb3} />
    <div id="bt0" onClick={e=> _update() } > Update </div>
</center>
</div>
   </div>
  


</div>


<div style={scr(22)} >


<center>
<div id="bonabusa" >
    <div id="blaze" >Coupon</div>
<div id="glo" style={{marginTop:"100px"}} > <img  id="img" alt="img" src={cupon}/>  </div>
<div id="unient2" style={{marginTop:"50px",marginBottom:"20px"}} >
  <input style={{marginTop:"40px",marginBottom:"20px"}} placeholder="Plase Enter Coupon code" id="allinput" />
      <div id="bt0" style={{width:"35%"}} onClick={e=> setbox(0)}  >Receive</div>
</div>
</div>


</center>
</div>




<div style={scr("admin")}>

<div id="demba"><div id='nwademba'>Admin Panel</div>
<div id="arka" > <img  id="img" alt="img" src={back}   onClick={e=> setscreen("admin")} /> </div>
</div> 

 <div id="tocent3" onClick={e=> ("dsdsd") } >
  <center>
    
    <div>
    <div id="okuko1" onClick={e=> setscreen(27) }  >
       <div id="koi" ><img  id="reimg" alt="img" src={home3}/></div>
       <div id="hf2" >
       <div id='re'>Users</div>
   
       </div>
     </div>
    
    <div id="okuko1" onClick={e=> setnala(8) }  >
       <div id="koi" ><img  id="reimg" alt="img" src={Task}/></div>
       <div id="hf2" >
       <div id='re'>Generate Task</div>
   
       </div>
     </div></div>

  <div style={{height:"50px"}} ></div>
<div>
  <div id="okuko1" onClick={e=> {setscreen(25);_admingrabibbi()}}  >
    <div id="koi" ><img  id="reimg" alt="img" src={bankicon}/></div>
    <div id="hf2" >
    <div id='re'>withdrawal request</div>

    </div>
  </div>


 <div id="okuko1"  onClick={e=> {setscreen(24);_admingrab()} }>
    <div id="koi" ><img  id="reimg" alt="img" src={bet}/></div>
    <div id="hf2" >
    <div id='re' >Deposit Request </div>

    </div>
  </div>
</div>

  <div style={{height:"50px"}} ></div>

  <div style={{height:"90px"}} ></div>
    <div id="bt011" onClick={e=> setbox(1)} >Log Out </div></center>
 </div>


  </div> 

  <div style={scr(24)}>

<div id="demba"><div id='nwademba'>Deposit request</div>
<div id="arka" > <img  id="img" alt="img" src={back}   onClick={e=> setscreen("admin")} /> </div>
</div> 

{chdata()}

  </div> 

<div style={scr(25)}>

<div id="demba"><div id='nwademba'>Withdrawal request</div>
<div id="arka" > <img  id="img" alt="img" src={back}   onClick={e=> setscreen("admin")} /> </div>
</div> 

{chdata2()}

  </div> 




  
<div style={scr(26) }>
  
  <div id='all'>
  <div id="demba"><div id='nwademba'>Withdraw</div></div>
<div id="arka1" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(8)}/> </div>
<button id="ego">NGN</button>
<div id='btz'> Withdraw-M</div>
<div id='iti'>  Withdrawal Amount (₦)</div>

<div><input placeholder='₦ Withdrawal amount' type='number' id='ud' onChange={e=> setweedamount(e.currentTarget.value)} /></div>

<div id='iti1'> Note: withdrawing before completing your cycle terminates your package. </div>
<div id='iti1'> Please verify your account number before requesting for withdrawal. </div>
<div id='bt02' onClick={e=> Bweed() } > Withdrawal </div>
  </div>


</div>

<div style={scr(27) }>
  
  <div id='all'>
  <div id="demba"><div id='nwademba'>Users</div>
<div id="arka" > <img  id="img" alt="img" src={back}   onClick={e=> setscreen("admin")} /> </div></div>
  <div id="sele">
    { _makata.map(i=> <div id="mboko" >
    <div id="inbok">Phone : {i.phone}</div>
    <div id="inbok">Bank : {i.bank}</div>
    <div id="inbok">Account Name : {i.acname}</div>
    <div id="inbok">Account Number : ₦{i.ac}</div>
    <div id="inbok">Ammount : ₦{i.InBalance}</div>
    </div>) }
  </div>
    </div>


</div>




<div style={scr(28)}>

<div id="demba"><div id='nwademba'>Earnings</div>
<div id="arka" > <img  id="img" alt="img" src={back} onClick={e=> setscreen(0)}/> </div>
</div> 


<div id="tocent2" onClick={e=> ("dsdsd") } >
  <center>
  
 <div id="okuko1" >
    <div id="koi" >
      <div>
        {Data.map(i=>
      <div id="mmmmuuU" >
        <div>Balance</div>
        <div>₦{ i.InBalance}</div>
        </div>
        )}</div>
      </div>
    <div id="hf2" >
    <div id='re'> Earnings </div>
    </div>
  </div>
    <div style={{marginTop:"80px"}} ></div>


   </center>
</div>
  </div> 


<div style={scr(29)}>

<div id='all'>
  <div id="demba"><div id='nwademba'>My Team</div>
<div id="arka" > <img  id="img" alt="img" src={back}   onClick={e=> setscreen(8)} /> </div></div>
  <div id="sele">
    <div id="mboko">B</div>
    { Team.map(i=> <div id="mboko" >  <div id="inbok">Phone : {i.phone.toString().slice(0,3)}********{i.phone.slice(-3)} <span id="spg1" >10%</span> </div>  </div>) }
    <div id="mboko">C</div>
    { Team2.map(i=> <div id="mboko" >  <div id="inbok">Phone : {i.phone.toString().slice(0,3)}********{i.phone.slice(-3)} <span id="spg2" >3%</span> </div>  </div>) }
    <div id="mboko">D</div>
    { Team3.map(i=> <div id="mboko" >  <div id="inbok">Phone : {i.phone.toString().slice(0,3)}********{i.phone.slice(-3)} <span id="spg3" >2%</span> </div>  </div>) }
  </div>
    </div>

  </div> 



    </div>


    
  );
}

export default App;
