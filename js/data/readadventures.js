import config  from "./configmodule.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
//   update,
// } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();
const myObjectsRef = dbRef.child("Adventure");
const adventureListUI = document.querySelector(".adventure-list");
const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");
const question=searchParams.getAll("q");
// console.log(idAdv);
// console.log(question);




if (idAdv.length>0) {
  myObjectsRef.orderByChild("ActivityID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {
  let adventure = snap.val();
  // console.log(adventure);
  let article = document.createElement("article");

  article.innerHTML += `
  <a href="adventure-single.html?id=${adventure.ID}">
    <img src="images/${adventure.Image}" alt="" />
    <div class="cart-caption">
        <div class="cart-top">
      <h2>${adventure.Title}</h2>
     
    </div>
    <div class="cart-bottom">
      <div class="cart-des">
      <p class="level"><i class="fa-solid fa-star"></i> ${adventure.rate} </p>
        <p class="level">Level: ${adventure.level}</p>
        <p class="length">Length: ${adventure.length}Km</p>
        <p class="duration">Duration: ${adventure.duration} hours</p>
      </div>
     
    </div>
    </div>
    </a>
  `;

  //  article.innerHTML += `<a href="adventure-single.html?id=${adventure.ID}">${adventure.Title}</a>`;

var location={Title: adventure.Title  , Coordinate: [ adventure.Longtitude,adventure.Latitude] };


var element = document.createElement("div")
element.className = "tomtommarker"
var lc = new tt.Marker({ element: element }).setLngLat(location.Coordinate).addTo(map);

  // var lc = new tt.Marker().setLngLat(location.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(location.Title);
 lc.setPopup(popup);
  adventureListUI.append(article);
});
}

if (question.length>0) {


  myObjectsRef.orderByChild("Title").startAt(question[0]).endAt(question[0]+'\uf8ff').on("child_added", (snap) => {
  let adventure = snap.val();
  // console.log(adventure);
  let article = document.createElement("article");

  article.innerHTML += `
  <a href="adventure-single.html?id=${adventure.ID}">
  <img src="images/${adventure.Image}" alt="" />
  <div class="cart-caption">
      <div class="cart-top">
    <h2>${adventure.Title}</h2>
   
  </div>
  <div class="cart-bottom">
    <div class="cart-des">
    <p class="level"><i class="fa-solid fa-star"></i> ${adventure.rate}</p>
      <p class="level">Level: ${adventure.level}</p>
      <p class="length">Length: ${adventure.length}Km</p>
      <p class="duration">Duration: ${adventure.duration} hours</p>
    </div>
   
  </div>
  </div>
  </a>
  `;
  //  article.innerHTML += `<a href="adventure-single.html?id=${adventure.ID}">${adventure.Title}</a>`;

var location={Title: adventure.Title  , Coordinate: [ adventure.Longtitude,adventure.Latitude] };
 

var element = document.createElement("div")
element.className = "tomtommarker"
var lc = new tt.Marker({ element: element }).setLngLat(location.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(location.Title);
 lc.setPopup(popup);
  adventureListUI.append(article);
});

}


var HQ = { lat: 49.28, lng: -123.12 };
var map = tt.map({
  key: "NcAivnVemAgNwcwusetBYc3fCAhTPlHB",
  container: "map",
  center: HQ,
  zoom: 10,
});
