import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsRef = dbRef.child("ToolsCategory");
const gearsList= document.getElementById("toolsObject");



myObjectsRef.on("child_added", (snap) => { // this shows all

  let myObject = snap.val();
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
 

  myObjectListUI.append($div);
});


