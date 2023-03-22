import config  from "../config/configmodule.js";


firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsAdventure = dbRef.child("Adventure");
const myObjectsTools = dbRef.child("tools");
const myObjectsBookedAdventurs = dbRef.child("BookedAdventurs");
const myObjectsconversation = dbRef.child("conversation");


setTimeout(() => {
  var userlogged=document.getElementById('name').innerHTML;
console.log(userlogged);


//  myObjectsAdventure.orderByChild("Provider").equalTo(userlogged).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
 // myObjectsAdventure.on("child_added", (snap) => {  // this shows all
 myObjectsTools.on("child_added", (snap) => {  // this shows all
  let myObject = snap.val();
  if (userlogged==myObject.Provider) {
    console.log(myObject.Title);
    }

});

// myObjectsTools.orderByChild("Provider").equalTo(userlogged).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
  //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
  myObjectsTools.on("child_added", (snap) => {  // this shows all
  
   let myObject = snap.val();
   if (userlogged==myObject.Provider) {
   console.log(myObject.Title);
   }
  });
  
  
}, 3000);
