import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsActivityCategory = dbRef.child("ToolsCategory");
const myObjectsPlaces = dbRef.child("place");
const myObjectListUI = document.getElementById("myObjectList");

//myObjectsRef.orderByChild("ProviderID").equalTo(1).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
myObjectsActivityCategory.on("child_added", (snap) => {  // this shows all

  let myObject = snap.val();
//   console.log(myObject.Title);

//========= Adding Categories in Select Tag=================
  let newCategoryOption = new Option(myObject.Title, myObject.ID);
  const selectCategory = document.querySelector('#adventure_category'); 
  selectCategory.add(newCategoryOption,undefined);

//====================== END ================================

});


myObjectsPlaces.on("child_added", (snap) => {
  let myObject = snap.val();
//   console.log(myObject.Title);

//========= Adding Place in Select Tag=================
  let newPlaceOption = new Option( myObject.Title,myObject.ID);
  const selectPlace = document.querySelector('#place_menu'); 
  selectPlace.add(newPlaceOption,undefined);
//====================== END ================================
});


// function myObjectClicked(e) {
//   var myObjectID = e.target.getAttribute("child-key");
//   const myObjectRef = dbRef.child("Adventure/" + myObjectID);
//   const myObjectDetailUI = document.getElementById("myObjectDetail");
//   myObjectDetailUI.innerHTML = "";
//   myObjectRef.on("child_added", (snap) => {
//     var $div = document.createElement("div");
//     $div.setAttribute("class", "Object-data");
//     $div.innerHTML =
//       "<div >" + snap.key + " =</div>  <div>" + snap.val() + "</div>";
//     myObjectDetailUI.append($div);
//   });
// }
