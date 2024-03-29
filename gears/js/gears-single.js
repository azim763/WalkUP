import config  from "./configmodule.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();
const myObjectsRef = dbRef.child("tools");
// const myObjectsRef2 = dbRef.child("users");
const myObjectListUI = document.getElementById("myObjectList");
const recommendationList = document.getElementById("recommendationList");

const searchParams = new URLSearchParams(window.location.search);
const idAdv=searchParams.getAll("id");

setTimeout(() => {
 myObjectsRef.orderByChild("ID").equalTo(Number(idAdv[0])).on("child_added", (snap) => {  

  let myObject = snap.val();
  
  const toolsObjects=snap.val();
  var $div = document.createElement("div");
  $div.setAttribute("class", "Object-data");


  let imgsrc="";
  // console.log(myObject.bycamera);
  if (myObject.bycamera==true) {
    imgsrc= ` <img src="${ myObject.ImageCam}" alt="" />`;
  }
  else{
    imgsrc= `<img src="images-gears/${myObject.Image}" alt="" />`;
  }
  let messagebtnTitle="Send Message";

  if (toolsObjects.OwnerID==document.getElementById("uid").innerHTML) {
    messagebtnTitle="My Messages";
  }

  $div.innerHTML =
    "<div >" + toolsObjects.Description + "</div>";
    $div.innerHTML =`
  <article>
  <div class="single-top">
    <div class="image-gallery">
    ${imgsrc}
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
          <p><span>Owner: </span><span>${toolsObjects.Owner}</span><span><img src="images/providers/${toolsObjects.venderImage}" alt="" /></span></p>
        </div>
        <div>
            <p><span>Brand Name: </span><span>${toolsObjects.brand}</span></p>
        </div>
        <div>
            <p><span>Occupancy: </span><span>${toolsObjects.occupancy}</span></p>
        </div>
        <div>
            <p><span>Material: </span><span>${toolsObjects.Material}</span></p>
        </div>
          <div>
            <p><span>Size: </span><span>${toolsObjects.size}</span></p>
        </div>
        <div >
            <p><span>price: </span><span>${toolsObjects.price}$ / hour</span></p>
        </div>
      </div>
      
      <div class="full-description">
        <h2>Overview :</h2>
        <p class=para>
        ${toolsObjects.Description}
        </p>
        <div class="text">
      
      
      
      </div>

      <a class="regular-button" href="../other/chat.html?gid=${toolsObjects.ID}&ownerid=${toolsObjects.OwnerID}&userid=${document.getElementById("uid").innerHTML}&gt=${toolsObjects.Title}">${messagebtnTitle}</a>

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

  let myObject = snap.val();
 
  var $div = document.createElement("div");


let imgsrc="";
// console.log(myObject.bycamera);
if (myObject.bycamera==true) {
  imgsrc= ` <img src="${ myObject.ImageCam}" alt="" />`;

}
else{
  imgsrc=  `<img src="images-gears/${myObject.Image}" alt="" />`;
}


// console.log(myObject);
  $div.innerHTML = `<section class="gears-sec">
        <div class="gearCard">
          <div class="imgBanner">
        ${imgsrc}           
          </div>           
            <h2>${myObject.Title}</h2>
            <div class="cardContentWrapper">
              <div class="brandname">${myObject.brand}</div>
              <div class="availability">Available<i class="fa-solid fa-circle"></i> </div>
            </div>
            <div class="more"><a class="regular-button" href="gear-single.html?id=${myObject.ID}">More</a></div>
        </div>
      </section>`;

      $div.className="gear-article";

recommendationList.append($div);
{/* <div class="more"><a href="gear-single.html?id=${tools.ID}">More</a></div> */}

});
}, 1000);
