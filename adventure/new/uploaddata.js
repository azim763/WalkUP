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
  console.log(title);
  

    console.log("inside else");
    var title = document.getElementById("title").value;
    var adventure_category = document.getElementById('adventure_category').value;
    var place_menu = document.getElementById('place_menu').value;
    var title = document.getElementById('title').value;
    var latitude = document.getElementById('latitude').innerText.split(':')[1];
    var longitude = document.getElementById('longitude').innerText.split(':')[1];
    var myFile = document.getElementById('myFile').value;
    var description = document.getElementById('description').value;
    var capacity = document.getElementById('capacity').value;
    var length = document.getElementById('length').value;
    var Duration = document.getElementById('duration').value;
    var d_level = document.getElementById('d_level').value;
    var rate = document.getElementById('rate').value;
    var launch_date = document.getElementById('launch_date').value;
  
    var checklist = document.getElementById('adventure_category').value;
  
    const files = document.querySelector('[type=file]').files;

    const d = new Date();
let seconds = d.getSeconds();

    set(ref(database, "Adventure/" + Number( seconds)), {
      ActivityID: Number( adventure_category),
      CheckList:check_list_table.innerHTML,
      
      Title: title,
      // Adventure_category: adventure_category,
      //  title: title,
      Description: description,
      capacity: Number( capacity),
      ID:Number( seconds),
      Image:files[0],
      Latitude: latitude.substring(0,latitude.length-2).replace('°','0'),
      Longtitude: longitude.substring(0,longitude.length-2).replace('°','0'),
      PlaceID:place_menu,
      Provider: "Azim",
ProviderID :1,
active : true,
duration:Number( Duration),
length: 3,
        level: 1,
        rate: 3.5

    
        // "ActivityID": 1,
        // "CheckList": "Backpack, hiking boots, water bottle, snacks",
        // "Description": "Enjoy a beautiful hike through the scenic mountains.",
        // "ID": 1,
        // "Image": "Image1.jpg",
        // "Latitude": 49.301705,
        // "Longtitude": -123.141703,
        // "LunchDate": "2023-03-10T12:00:00Z",
        // "PhotosIDs": "1,2,3",
        // "PlaceID": 1,
        // "Provider": "Farhang",
        // "ProviderID": 2,
        // "Title": "Hiking in the mountains",
        // "active": true,
        // "capacity": 10,
        // "duration": 7.6,
        // "length": 3,
        // "level": 1,
        // "rate": 3.5
      // }


    })
      .then(() => {

        const url = 'process.php';

        const files = document.querySelector('[type=file]').files;
        const formData = new FormData();
    
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
    
            formData.append('files[]', file);
        }
    
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.text();
        }).then(data => {
            console.log(data);
        });




         alert("data submitted");
      })
      .catch((error) => {
         alert(error);
      });
  



});

// submit_form_btn.addEventListener("click", (e) => {


// });
