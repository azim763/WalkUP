
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import config from './configmodule.js';

// Initialize Firebase
const app = initializeApp(config);
const database = getDatabase(app);


document.getElementById('book-adventure').addEventListener(
    'click', function() {
    //   alert('hi');
      bookadventure();
    });
  
  function bookadventure(){
    const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");
var userlogged=document.getElementById('name').innerHTML;

    let seconds =Math.round( new Date().getTime() / 1000);
    set(ref(database, "BookedAdventurs/" + Number( seconds)), {
      AdventureID: Number(idAdv[0]),
      Approved: true,
      BookingDate:  new Date().getTime() ,
       ID:Number( seconds),  
       IsDone: false,
       PersonID: 1,
       bookedPerson:userlogged
    })
      .then(() => {   
          // alert("data submitted");
         Swal.fire('you successfully booked the adventure!');
       //  windows.close();
      })
      .catch((error) => {
         alert(error);
      });
  
  }