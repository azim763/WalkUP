import config  from "../config/configmodule.js";


firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsGearChat = dbRef.child("GearChat");
// const myObjectsTools = dbRef.child("tools");
// const myObjectsBookedAdventurs = dbRef.child("BookedAdventurs");
// const myObjectsconversation = dbRef.child("conversation");

const searchParams = new URLSearchParams(window.location.search);
const gid=searchParams.getAll("gid");
const ownerid=searchParams.getAll("ownerid");
const userid=searchParams.getAll("userid");
const gt=searchParams.getAll("gt");


  var userlogged=document.getElementById('name').innerHTML;
console.log(userlogged);
document.getElementById('grid').innerHTML=gid[0];
document.getElementById('ownid').innerHTML=ownerid[0];
document.getElementById('usrid').innerHTML=userid[0];
document.getElementById('gt').innerHTML=gt[0];
// myObjectsRef.orderByChild("ID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  

myObjectsGearChat.orderByChild("GearID").equalTo(Number(gid[0])).on("child_added", snap => {   
  // this shows Adventures where ProviderID  is equal to 1
 // myObjectsAdventure.on("child_added", (snap) => {  // this shows all
// myObjectsAdventure.on("child_added", (snap) => {  // this shows all
  let mychat = snap.val(); 


console.log(mychat);

  let article = document.createElement("div");
  if (mychat.OwnerSend==true) {
      article.className="participant-b";
  }
  else  {
    article.className="participant-a";
  }

  article.innerHTML += `<p><strong>  ${mychat.Sender} </strong> :  ${mychat.Message}</p>`;

  conversation.append(article);

  // console.log(adventure.Title);
  // if (userlogged==myObject.Provider) {
   
  //   }
  var objDiv = document.getElementById("conversation");
  objDiv.scrollTop = objDiv.scrollHeight;
});

//  myObjectsTools.orderByChild("Owner").equalTo(userlogged).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//   //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
//  // myObjectsTools.on("child_added", (snap) => {  // this shows all
  
//    let myObject = snap.val(); 
   
//   let article = document.createElement("article");
//   article.innerHTML += `
//     <div class="cart-caption">
//         <div class="cart-top">
//       <h3><a href="../gears/gear-single.html?id=${myObject.ID}">${myObject.Title}</a></h3>
     
//     </div>
   
//     </div>
//   `;

//   mygears.append(article);


//   //  console.log(myObject.Title);
 
  
//   });
  
// /////////////////////////////////////////////////////////////////////////
// myObjectsBookedAdventurs.orderByChild("bookedPerson").equalTo(userlogged).on("child_added", snap => {  
//   //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
//  // myObjectsTools.on("child_added", (snap) => {  // this shows all
  
//    let myObject = snap.val(); 
   

//    myObjectsAdventure.orderByChild("ID").equalTo(myObject.AdventureID).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//      let adventure = snap.val(); 
//      let article = document.createElement("article");
//      article.innerHTML += `
//        <div class="cart-caption">
//            <div class="cart-top">
//          <h3><a href="../adventure/adventure-single.html?id=${adventure.ID}">${adventure.Title}</a></h3>
        
//        </div>
      
//        </div>
//      `;
//      mybookedadventures.append(article);

//     });


//   // let article = document.createElement("article");
//   // article.innerHTML += `
//   //   <div class="cart-caption">
//   //       <div class="cart-top">
//   //     <h3><a href="../adventure/adventure-single.html?id=${myObject.ID}">${myObject.Title}</a></h3>
     
//   //   </div>
   
//   //   </div>
//   // `;

//   // mybookedadventures.append(article);

   
//   //  console.log(myObject.Title);
   
  
//   });
    
