import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();
const myObjectsRef = dbRef.child("tools");
// const myObjectsRef2 = dbRef.child("users");
const myObjectListUI = document.getElementById("myObjectList");
const recommendationList = document.getElementById("recommendationList");

const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");


 myObjectsRef.orderByChild("ID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  

  let myObject = snap.val();
  
  const toolsObjects=snap.val();
  var $div = document.createElement("div");
  $div.setAttribute("class", "Object-data");
  $div.innerHTML =
    "<div >" + toolsObjects.Description + "</div>";
    $div.innerHTML =`
  <article>
  <div class="single-top">
    <div class="image-gallery">
    <img src="images-gears/${toolsObjects.Image}" alt="" />
    </div>
  </div>
  <div class="single-description">
    <div class="wrapper wrappersingle">
      <div class="single-des-top">
        <h1>${toolsObjects.Title}</h1>
      </div>
      <div class="details">
        <h3>Details</h3>
        <div class="single-person">
          <p><span>${toolsObjects.OwnerID}</span><span><img src="images/providers/${toolsObjects.venderImage}" alt="" /></span></p>
        </div>
        <div>
            <p><span>Brand Name: </span><span>${toolsObjects.brandname}</span></p>
        </div>
        <div>
            <p><span>Occupancy: </span><span>${toolsObjects.brandname}</span></p>
        </div>
        <div>
            <p><span>Type: </span><span>${toolsObjects.brandname}</span></p>
        </div>
        <div>
            <p><span>Shape: </span><span>${toolsObjects.brandname}</span></p>
        </div>
        <div>
            <p><span>Size: </span><span>${toolsObjects.brandname}</span></p>
        </div>
        <div>
            <p><span>Weight: </span><span>${toolsObjects.brandname}</span></p>
        </div>

        <div class="price">
            <p>C $${toolsObjects.price}/hour</p>
        </div>
      </div>
      
      <div class="full-description">
        <h2>Overview :</h2>
        <p class=para>
        ${toolsObjects.Description}
        </p>
        <div class="text">
       <label for="w3review">Send the message to the owner:</label> <br>
      
      
      </div>
      <div class="sendmessageContainer">
          <textarea id="w3review"  name="w3review" rows="6" cols="40" placeholder="write your message"></textarea> 
      </div>

      <div class="send">Send</div>
      </div>
    </div>
  </div>
</article>
  `;
  myObjectListUI.append($div);
});



const CategoryID = "1";
// const myObjectListUI = document.getElementById("myObjectList");

myObjectsRef.orderByChild("CategoryID").equalTo(Number(CategoryID[0])).on("child_added", snap => {   // this shows Adventures where ProviderID  is equal to 1
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



recommendationList.append($div);
{/* <div class="more"><a href="gear-single.html?id=${tools.ID}">More</a></div> */}



});
 