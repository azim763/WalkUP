import config from "./configmodule.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
firebase.initializeApp(config);
const dbRef = firebase.database().ref();

const myObjectsRef = dbRef.child("ActivityCategory");
const myObjectListUI = document.querySelector(".swiper-wrapper");



myObjectsRef.on("child_added", (snap) => {
  let myObject = snap.val();
  let $article = document.createElement("article");
  let $a = document.createElement("a");
  $a.href = `adventure/adventure-archive.html?id=${myObject.ID}
  `;

  let $img = document.createElement("img");
  $img.src = `images/${myObject.Title.toLowerCase()}.png`;
  $img.alt = myObject.Title;
  let $h2 = document.createElement("h2");
  $h2.innerHTML = myObject.Title;
  $a.appendChild($img);
  $a.appendChild($h2);
  $article.appendChild($a);
  let $div = document.createElement("div");
  $div.classList.add("swiper-slide");
  $div.appendChild($article);
  myObjectListUI.appendChild($div);
});
