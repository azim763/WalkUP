import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import config from '../config/configmodule.js';
console.log("ddd");
// Initialize Firebase
const app = initializeApp(config);
const database = getDatabase(app);




function sendmessage()
{

var message = document.getElementById("message-input").value;

const Ownerid = document.getElementById('ownid').innerHTML;
const Userid = document.getElementById('usrid').innerHTML;
const Gearid =Number(document.getElementById('grid').innerHTML);
const sender = document.getElementById('name').innerHTML;

const liveuid = document.getElementById("uid").innerHTML
var Ownersend = true;
 if (liveuid==Ownerid) {
  console.log("Ownerid:"+Ownerid);
  var Ownersend = true;
 }
 else if (liveuid==Userid) {
  console.log("Userid:"+Userid);
  var Ownersend = false;
 }
 else{
  console.log("liveuid:"+liveuid);
  var Ownersend = false;
 Userid= liveuid;
  // return false;
 }

let seconds =Math.round( new Date().getTime() / 1000);
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

set(ref(database, "GearChat/" + Number( seconds)), {
  ID:Number( seconds),

OwnerID: Ownerid,
UserID: Userid,
GearID: Gearid,

Message: message,
SendDate: date + " " +time,
OwnerSend:Ownersend,
Sender:sender
})
  .then(() => {
    console.log('done');
    userinput.value = "";
    userinput.focus();
  })
  .catch((error) => {
    console.log(error);
    //  alert(error);
  });
}

const btn1 = document.getElementById("chatsubmitbutton");

 btn1.addEventListener("click",sendmessage);

const userinput=document.getElementById("message-input")

userinput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      event.preventDefault();
    
      sendmessage();
    
  }
});
