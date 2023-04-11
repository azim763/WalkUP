import config  from "../config/configmodule.js";


firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsGearChat = dbRef.child("GearChat");

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

myObjectsGearChat.orderByChild("GearID").equalTo(Number(gid[0])).on("child_added", snap => {   

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
  var objDiv = document.getElementById("conversation");
  objDiv.scrollTop = objDiv.scrollHeight;
});
