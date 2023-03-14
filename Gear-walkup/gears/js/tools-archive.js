
import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsRef = dbRef.child("tools");
const gearsList= document.getElementById("toolsObject");


const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");
const idAdvTwo=searchParams.getAll("q");
console.log(idAdvTwo);


if(idAdvTwo.length>0){

  myObjectsRef.orderByChild("Title").startAt(idAdvTwo[0]).endAt(idAdvTwo[0]+'\uf8ff').on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
    //myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last
    
    //myObjectsRef.on("child_added", (snap) => { // this shows all
    
      let myObject = snap.val();
      console.log(myObject)
    // console.log('ghgfg');
    //   let $li = document.createElement("li");
    //   $li.innerHTML = myObject.Title;
    //   $li.setAttribute("child-key", snap.key);
    //   $li.addEventListener("click", myObjectClicked);
    //   myObjectListUI.append($li);
    // console.log(snap.val());
      var $div = document.createElement("div");
    //   <article>
    //   <a href="adventure/adventure-archive.html">
    //     <img src="../gears/images-gears/shoes.png" alt="" />
    //     <h2>${myObject.Title}</h2>
    //   </a>
    // </article>
    console.log(myObject);
      $div.innerHTML = `<section class="gears-sec">
            <div class="gearCard">
              <div class="imgBanner">
                <img src="images-gears/${myObject.Image}" alt="" />
                <div class="icons">
                  <i class="fa-regular fa-heart"></i>
                  <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
              </div>
                
                <h2>${myObject.Title}</h2>
                <div class="cardContentWrapper">
                  <div class="brandname">${myObject.brand}</div>
                  <div class="availability">Available<i class="fa-solid fa-circle"></i> </div>
                </div>
                <div class="more"><a href="gear-single.html?id=${myObject.ID}">More</a></div>
            </div>
          </section>`;
    
    
    
    gearsList.append($div);
    {/* <div class="more"><a href="gear-single.html?id=${tools.ID}">More</a></div> */}
    
    
    
    });

}
// const myObjectListUI = document.getElementById("myObjectList");
if(idAdv.length>0){
myObjectsRef.orderByChild("CategoryID").equalTo(Number(idAdv[0])).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
//myObjectsRef.limitToLast(1).on("child_added", snap => {  // this shows the one last

//myObjectsRef.on("child_added", (snap) => { // this shows all

  let myObject = snap.val();
  console.log(myObject)
// console.log('ghgfg');
//   let $li = document.createElement("li");
//   $li.innerHTML = myObject.Title;
//   $li.setAttribute("child-key", snap.key);
//   $li.addEventListener("click", myObjectClicked);
//   myObjectListUI.append($li);
// console.log(snap.val());
  var $div = document.createElement("div");
//   <article>
//   <a href="adventure/adventure-archive.html">
//     <img src="../gears/images-gears/shoes.png" alt="" />
//     <h2>${myObject.Title}</h2>
//   </a>
// </article>
console.log(myObject);
  $div.innerHTML = `<section class="gears-sec">
        <div class="gearCard">
          <div class="imgBanner">
            <img src="images-gears/${myObject.Image}" alt="" />
            <div class="icons">
              <i class="fa-regular fa-heart"></i>
              <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
          </div>
            
            <h2>${myObject.Title}</h2>
            <div class="cardContentWrapper">
              <div class="brandname">${myObject.brand}</div>
              <div class="availability">Available<i class="fa-solid fa-circle"></i> </div>
            </div>
            <div class="more"><a href="gear-single.html?id=${myObject.ID}">More</a></div>
        </div>
      </section>`;



gearsList.append($div);
{/* <div class="more"><a href="gear-single.html?id=${tools.ID}">More</a></div> */}



});
}


