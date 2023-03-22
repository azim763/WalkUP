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

//for comparing title
var title = document.getElementById("title").value;


const form1 = document.getElementById("enter-experience");
form1.addEventListener("submit", (event) => {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var adventure_category = document.getElementById('adventure_category').value;
    var title = document.getElementById('title').value;
    // var latitude = document.getElementById('latitude').innerText;
    // var longitude = document.getElementById('longitude').innerText;
    // var myFile = document.getElementById('myFile').value;
    // const imageURLInput = document.querySelector("#photo");
    // imageURLInput.value = canvasDataURL;

    var imagecamera= document.getElementById('photo').src ;
    var description = document.getElementById('description').value;
    var brandname = document.getElementById('brandname').value;
    var Price = document.getElementById('Price').value;
    var Size = document.getElementById('Size').value;
    var address = document.getElementById('addressInput').value;
     var Occupancy = document.getElementById('occupancy').value;
     var material = document.getElementById('material').value;
  
    // var checklist = document.getElementById('adventure_category').value;
  
var provider=document.getElementById('name').innerHTML;

    // const files = document.querySelector('[type=file]').files;

//     const d = new Date();
// let seconds = d.getSeconds();
let seconds =Math.round( new Date().getTime() / 1000);

    set(ref(database, "tools/" + Number( seconds)), {
      CategoryID: Number( adventure_category),
      Availability:true,
      Title: title,
      // Adventure_category: adventure_category,
      //  title: title,
      Description: description,
      ID:Number( seconds),
      Image:" ",
      ImageCam:imagecamera,
      bycamera:true,
      Address:address,
      IsRent: true,
      Material: material,
      brand:brandname,
      occupancy :Occupancy,
      price: Price,
      size:Size,
      Owner:provider
        // AdventureIDs
        // :"1,2"
        // Availability
        // :true
        // CategoryID
        // :1
        // Description
        // :"A high-quality camping tent suitable for 2-3 people."
        // ID
        // :1
        // Image
        // :"image1.jpg"
        // IsRent
        // :true
        // Material
        // :"Leather"
        // OwnerID
        // :1
        // PlaceIDs
        // :"1,2,3"
        // Title
        // :"Camping Tent"
        // brand
        // :"Maxwell"
        // occupancy
        // :"2 people"
        // price
        // :120
        // size
        // :"small"






    })
      .then(() => {

        // const url = 'process.php';

        // const files = document.querySelector('[type=file]').files;
        // const formData = new FormData();
    
        // for (let i = 0; i < files.length; i++) {
        //     let file = files[i];
    
        //     formData.append('files[]', file);
        // }
    
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // }).then(response => {
        //     return response.text();
        // }).then(data => {
        //     console.log(data);
        // });
         alert("data submitted");
         window.location.href = 'gear-archive.html?id='+adventure_category;
        //  windows.close();
      })
      .catch((error) => {
         alert(error);
      });
});

// submit_form_btn.addEventListener("click", (e) => {


// });
