import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsRef = dbRef.child("ToolsCategory");
const gearsList= document.getElementById("toolsObject");





// const myObjectListUI = document.getElementById("myObjectList");

//myObjectsRef.orderByChild("ProviderID").equalTo(1).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//myObjectsRef.limitToLast(4).on("child_added", snap => {  // this shows the one last

myObjectsRef.on("child_added", (snap) => { // this shows all

  let myObject = snap.val();
// console.log('ghgfg');
//   let $li = document.createElement("li");
//   $li.innerHTML = myObject.Title;
//   $li.setAttribute("child-key", snap.key);
//   $li.addEventListener("click", myObjectClicked);
//   myObjectListUI.append($li);
console.log(snap.val());
  var $div = document.createElement("div");
  $div.innerHTML = `<article>
  <a href="gear-archive.html?id=${myObject.ID}">
    <img src="../gears/images-gears/${myObject.Image}" alt="" />
    <h2>${myObject.Title}</h2>
  </a>
</article>`;
console.log(myObject)

gearsList.append($div);



});


//

const myObjectsRefTools = dbRef.child("tools");
const myObjectListUI = document.getElementById("myObjectList");
const idAdv="1"


myObjectsRefTools.orderByChild("CategoryID").equalTo(Number(idAdv[0])).on("child_added", snap => {

  let myObject = snap.val();
  
  const toolsObjects=snap.val();
  var $div = document.createElement("div");
  // $div.setAttribute("class", "Object-data");
  
//   $div.innerHTML = `<section class="gears-sec">
//   <div class="gearCard">
//     <div class="imgBanner">
//       <img src="images-gears/${myObject.Image}" alt="" />
//       <div class="icons">
//         <i class="fa-regular fa-heart"></i>
//         <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
//       </div>
//     </div>
      
//       <h2>${myObject.Title}</h2>
//       <div class="cardContentWrapper">
//         <div class="brandname">${myObject.brand}</div>
//         <div class="availability">Available<i class="fa-solid fa-circle"></i> </div>
//       </div>
//       <div class="more"><a href="gear-single.html?id=${myObject.ID}">More</a></div>
//   </div>
// </section>`;

  myObjectListUI.append($div);
});


