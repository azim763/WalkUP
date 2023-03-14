import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();
const myObjectsRef = dbRef.child("Adventure");
const adventureListUI = document.querySelector(".adventure-list");
const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");
myObjectsRef.orderByChild("ActivityID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {
  let adventure = snap.val();
  console.log(adventure);
  let article = document.createElement("article");
  article.innerHTML += `
    <img src="images/${adventure.Image}" alt="" />
    <div class="cart-caption">
        <div class="cart-top">
      <h2><a href="adventure-single.html?id=${adventure.ID}">${adventure.Title}</a></h2>
     
    </div>
    <div class="cart-bottom">
      <div class="cart-des">
        <p class="level">Level: ${adventure.level}/5</p>
        <p class="length">Length: ${adventure.length}Km</p>
        <p class="duration">Duration: ${adventure.duration} hours</p>
      </div>
      <div class="rating">
      Rate: ${adventure.rate}
      </div>
    </div>
    </div>
  `;
var location={Title: adventure.Title  , Coordinate: [ adventure.Longtitude,adventure.Latitude] };
  var lc = new tt.Marker().setLngLat(location.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(location.Title);
 lc.setPopup(popup);
  adventureListUI.append(article);
});
var HQ = { lat: 49.28, lng: -123.12 };
var map = tt.map({
  key: "NcAivnVemAgNwcwusetBYc3fCAhTPlHB",
  container: "map",
  center: HQ,
  zoom: 10,
});
// var marker = new tt.Marker().setLngLat(HQ).addTo(map);
// var popup = new tt.Popup({ anchor: "top" }).setText("Vancouver");
// marker.setPopup(popup).togglePopup();