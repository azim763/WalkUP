import config from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsRef = dbRef.child("Adventure");
const myObjectListUI = document.getElementById("myObjectList");
// const AdventureArray = [];
const searchParams = new URLSearchParams(window.location.search);
const idAdv = searchParams.getAll("id");

let isowner = false;
let booked = false;
let AdventureObject;
var userlogged = document.getElementById("name").innerHTML;

myObjectsRef
  .orderByChild("ID")
  .equalTo(Number(idAdv[0]))
  .on("child_added", (snap) => {
    // this shows all
    // myObjectsRef.orderByChild("ID").equalTo(1).on("child_added", (snap) => {  // this shows all

    let myObject = snap.val();

    AdventureObject = snap.val();

    // image
    document.getElementById("singleIMG").src =
      "images/" + AdventureObject.Image;

    // Title
    document.getElementById("singleTITLE").innerHTML = AdventureObject.Title;

    // Rate
    document.getElementById("singleRATE").innerHTML = AdventureObject.rate;

    // Description
    document.getElementById("singleDESCRIPTION").innerHTML =
      AdventureObject.Description;

    // Level
    document.getElementById("singleLEVEL").innerHTML = AdventureObject.level;

    // Length
    document.getElementById("singleLENGTH").innerHTML = AdventureObject.length;

    // Duration
    document.getElementById("singleDURATION").innerHTML =
      AdventureObject.duration;

    //Provider
    document.getElementById("singlePROVIDER").innerHTML =
      AdventureObject.Provider;

    //Date
    document.getElementById("singleDATE").innerHTML = AdventureObject.LunchDate;

    var location = {
      Title: AdventureObject.Title,
      Coordinate: [AdventureObject.Longtitude, AdventureObject.Latitude],
    };

    var element = document.createElement("div");
    element.className = "tomtommarker";
    var lc = new tt.Marker({ element: element })
      .setLngLat(location.Coordinate)
      .addTo(map);

    // var lc = new tt.Marker().setLngLat(location.Coordinate).addTo(map);
    var popup = new tt.Popup({ anchor: "top" }).setText(location.Title);
    lc.setPopup(popup);
    // myObjectListUI.append($div);

    document.getElementById("capacity-booking").innerHTML =
      AdventureObject.capacity;

    userlogged = document.getElementById("name").innerHTML;

    if (userlogged.length > 0) {
      // document.getElementById("book-adventure").style.display= "none";
      document.getElementById("book-adventure").style.translate = "0 0";
      // document.getElementById("book-adventure-ical").style.display= "block";
    }

    if (userlogged == AdventureObject.Provider) {
      document.getElementById("book-adventure").style.display = "none";
      document.getElementById("book-adventure-ical").style.display = "block";
      document.getElementById("book-adventure-message").innerHTML = "";
    }

    cal_single.addEvent(
      AdventureObject.Title,
      AdventureObject.Description,
      "Vancouver",
      AdventureObject.LunchDate,
      AdventureObject.LunchDate
    );
  });

const myObjectsBookedAdventurs = dbRef.child("BookedAdventurs");
myObjectsBookedAdventurs
  .orderByChild("AdventureID")
  .equalTo(Number(idAdv[0]))
  .on("child_added", (snap) => {
    // this shows all

    let myObject = snap.val();
    console.log(myObject);
    document.getElementById("number-booking").innerHTML =
      Number(document.getElementById("number-booking").innerHTML) + 1;

    userlogged = document.getElementById("name").innerHTML;

    if (userlogged == myObject.bookedPerson) {
      booked = true;
      document.getElementById("book-adventure").style.display = "none";
      document.getElementById("book-adventure-message").style.display = "block";
      document.getElementById("book-adventure-ical").style.display = "block";
    }
  });

var HQ = { lat: 49.28, lng: -123.12 };
var map = tt.map({
  key: "NcAivnVemAgNwcwusetBYc3fCAhTPlHB",
  container: "map",
  center: HQ,
  zoom: 10,
});
