import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();




const myObjectsRef = dbRef.child("Adventure");
const myObjectListUI = document.getElementById("myObjectList");
// const AdventureArray = [];
const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");
//myObjectsRef.orderByChild("ProviderID").equalTo(1).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last

let isowner=false;
let booked=false;
 let  AdventureObject;
 var userlogged=document.getElementById('name').innerHTML;

 myObjectsRef.orderByChild("ID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  // this shows all
  // myObjectsRef.orderByChild("ID").equalTo(1).on("child_added", (snap) => {  // this shows all

  let myObject = snap.val();

  // let $li = document.createElement("li");
  // $li.innerHTML = myObject.Title;
  // $li.setAttribute("child-key", snap.key);
  // $li.addEventListener("click", myObjectClicked);
  // myObjectListUI.append($li);

// console.log(snap.key);
  // console.log(snap.val());
   AdventureObject=snap.val();
  var $div = document.createElement("div");
  $div.setAttribute("class", "Object-data");
  $div.innerHTML =
    "<div >" + AdventureObject.Description + "</div>";
 

    $div.innerHTML =`
  <article>
  <div class="single-top">
    <div class="image-gallery">
    <img src="images/${AdventureObject.Image}" alt="" />
    </div>
  </div>
  <div class="single-description">
    <div class="wrapper">
      <div class="single-des-top">
        <h2>${AdventureObject.Title}</h2>
        <span>Twassen, BC</span>
        <div class="rating">
        <span>Rate: ${AdventureObject.rate}</span>
      
        </div>
      </div>
      <div class="single-person">
        <p>Trail Experience Hosted by <span>${AdventureObject.Provider}</span></p>
        <img src="images/providers/${AdventureObject.providerImage}" alt="" />
      </div>
      <div class="full-description">
        <h3>Overview</h3>
        <p>
        ${AdventureObject.Description}
        </p>
      
      </div>
      <div class="single-person">
        <p>Date: <span>${AdventureObject.Provider}</span></p>
        </div>
    </div>
  </div>
</article>



  `;
  var location={Title: AdventureObject.Title  , Coordinate: [ AdventureObject.Longtitude,AdventureObject.Latitude] };
  var lc = new tt.Marker().setLngLat(location.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(location.Title);
 lc.setPopup(popup);
  myObjectListUI.append($div);

  document.getElementById("capacity-booking").innerHTML=AdventureObject.capacity;


  if (userlogged==AdventureObject.Provider) {
    isowner=true;
  }

});


const myObjectsBookedAdventurs = dbRef.child("BookedAdventurs");
myObjectsBookedAdventurs.orderByChild("AdventureID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  // this shows all

  let myObject = snap.val();
 console.log(myObject);
document.getElementById("number-booking").innerHTML=Number(document.getElementById("number-booking").innerHTML)+1;

 userlogged=document.getElementById('name').innerHTML;

if (userlogged==myObject.bookedPerson) {
  // alert('gggggggggggggg');
  // console.log('booked');
  booked=true;
  document.getElementById("book-adventure").style.display= "none";
  document.getElementById("book-adventure-message").style.display= "block";
  
}

  // let newCategoryOption = new booking(myObject.Title, myObject.ID);
  // const selectCategory = document.querySelector('#adventure_category'); 
  // selectCategory.add(newCategoryOption,undefined);

});




var HQ = { lat: 49.28, lng: -123.12 };
var map = tt.map({
  key: "NcAivnVemAgNwcwusetBYc3fCAhTPlHB",
  container: "map",
  center: HQ,
  zoom: 10,
});



