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


  myObjectsAdventure.orderByChild("Provider").equalTo(userlogged).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
 // myObjectsAdventure.on("child_added", (snap) => {  // this shows all
// myObjectsAdventure.on("child_added", (snap) => {  // this shows all
  let adventure = snap.val(); 



  let article = document.createElement("article");
  article.innerHTML += `
    <div class="cart-caption">
        <div class="cart-top">
      <h3><a href="../adventure/adventure-single.html?id=${adventure.ID}">${adventure.Title}</a></h3>
     
    </div>
   
    </div>
  `;

  myadventures.append(article);

  // console.log(adventure.Title);
  // if (userlogged==myObject.Provider) {
   
  //   }
  
});

 myObjectsTools.orderByChild("Owner").equalTo(userlogged).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
  //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
 // myObjectsTools.on("child_added", (snap) => {  // this shows all
  
   let myObject = snap.val(); 
   
  let article = document.createElement("article");
  article.innerHTML += `
    <div class="cart-caption">
        <div class="cart-top">
      <h3><a href="../gears/gear-single.html?id=${myObject.ID}">${myObject.Title}</a></h3>
     
    </div>
   
    </div>
  `;

  mygears.append(article);

   
  //  console.log(myObject.Title);
 
  
  });
  
/////////////////////////////////////////////////////////////////////////
myObjectsBookedAdventurs.orderByChild("bookedPerson").equalTo(userlogged).on("child_added", snap => {  
  //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
 // myObjectsTools.on("child_added", (snap) => {  // this shows all
  
   let myObject = snap.val(); 
   

   myObjectsAdventure.orderByChild("ID").equalTo(myObject.AdventureID).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
     let adventure = snap.val(); 
     let article = document.createElement("article");
     article.innerHTML += `
       <div class="cart-caption">
           <div class="cart-top">
         <h3><a href="../adventure/adventure-single.html?id=${adventure.ID}">${adventure.Title}</a></h3>
        
       </div>
      
       </div>
     `;
     mybookedadventures.append(article);

    });


  // let article = document.createElement("article");
  // article.innerHTML += `
  //   <div class="cart-caption">
  //       <div class="cart-top">
  //     <h3><a href="../adventure/adventure-single.html?id=${myObject.ID}">${myObject.Title}</a></h3>
     
  //   </div>
   
  //   </div>
  // `;

  // mybookedadventures.append(article);

   
   console.log(myObject.Title);
 
  
  });
    







}, 4000);
