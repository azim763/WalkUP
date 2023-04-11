import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsActivityCategory = dbRef.child("ActivityCategory");
const myObjectsPlaces = dbRef.child("place");
const myObjectListUI = document.getElementById("myObjectList");
myObjectsActivityCategory.on("child_added", (snap) => {  // this shows all

  let myObject = snap.val();
  console.log(myObject.Title);

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

