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
    var place_menu = document.getElementById('place_menu').value;
    var title = document.getElementById('title').value;
    var latitude = document.getElementById('latitude').innerText;
    var longitude = document.getElementById('longitude').innerText;
    var myFile = document.getElementById('myFile').value;
    var description = document.getElementById('description').value;
    var capacity = document.getElementById('capacity').value;
    var Length = document.getElementById('length').value;
    var Duration = document.getElementById('duration').value;
    var d_level = document.getElementById('d_level').value;
    var Rate = document.getElementById('rate').value;
    var launch_date = document.getElementById('launch_date').value;
  
    var checklist = document.getElementById('adventure_category').value;
  
var provider=document.getElementById('name').innerHTML;

    const files = document.querySelector('[type=file]').files;

//     const d = new Date();
// let seconds = d.getSeconds();
let seconds =Math.round( new Date().getTime() / 1000);

    set(ref(database, "Adventure/" + Number( seconds)), {
      ActivityID: Number( adventure_category),
      CheckList:check_list_table.innerHTML,
      
      Title: title,
      // Adventure_category: adventure_category,
      //  title: title,
      Description: description,
      capacity: Number( capacity),
      ID:Number( seconds),
      Image:files[0].name,
      Latitude: latitude.replace('°',''),
      Longtitude: longitude.replace('°',''),
      PlaceID:place_menu,
      Provider: provider,
ProviderID :1,
active : true,
duration:Number( Duration),
length: Length,
        level: d_level,
        rate: Rate,
        LunchDate:launch_date

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
         window.location.href = 'adventure-archive.html?id='+adventure_category;
        //  windows.close();
      })
      .catch((error) => {
         alert(error);
      });
});

// submit_form_btn.addEventListener("click", (e) => {


// });
