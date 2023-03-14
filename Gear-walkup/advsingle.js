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



 myObjectsRef.orderByChild("ID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  // this shows all
  // myObjectsRef.orderByChild("ID").equalTo(1).on("child_added", (snap) => {  // this shows all

  let myObject = snap.val();

  // let $li = document.createElement("li");
  // $li.innerHTML = myObject.Title;
  // $li.setAttribute("child-key", snap.key);
  // $li.addEventListener("click", myObjectClicked);
  // myObjectListUI.append($li);

// console.log(snap.key);
  console.log(snap.val());
  const AdventureObject=snap.val();
  var $div = document.createElement("div");
  $div.setAttribute("class", "Object-data");
  $div.innerHTML =
    "<div >" + AdventureObject.Description + "</div>";
 

    $div.innerHTML =`<article>
    <a href="adventure-single.html?id=${AdventureObject.ID}">
      <img src="images/fishing.png" alt="">
      <h2>${AdventureObject.Title}</h2>
    </a>
  </article>`;
myObjectDetail.append($div);


});


// function createa(  element)
// {
 
//     var $div = document.createElement("div");
//         $div.setAttribute("class", "Object-data");
//         $div.innerHTML =
//           "<div >" + element.Description + "</div>";
       

//           $div.innerHTML =`<article>
//           <a href="adventure-single.html?id=${element.ID}">
//             <img src="images/fishing.png" alt="">
//             <h2>${element.Title}</h2>
//           </a>
//         </article>`;
//    myObjectDetail.append($div);


  
// }



// setTimeout(createelements,1000);
// function createelements()
// {
//   for (let i = 0; i < AdventureArray.length; i++) {
//     const element = AdventureArray[i];
//     var $div = document.createElement("div");
//         $div.setAttribute("class", "Object-data");
//         $div.innerHTML =
//           "<div >" + element.Description + "</div>";
       

//           $div.innerHTML =`<article>
//           <a href="adventure-single.html?id=${element.ID}">
//             <img src="images/fishing.png" alt="">
//             <h2>${element.Title}</h2>
//           </a>
//         </article>`;
//    myObjectDetail.append($div);


//   }
// }

