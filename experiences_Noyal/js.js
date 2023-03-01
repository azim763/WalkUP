// ============= Google Maps =============
let map = document.getElementById("map");

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

latitude.textContent = '';
longitude.textContent = '';

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = '';

// =======================
 const yourLocation = { lat: latitude, lng: longitude };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 9,
  center: yourLocation,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
  
});

// =======================

  document.getElementById('latitude').innerHTML = `Latitude: ${latitude}°`;
  document.getElementById('longitude').innerHTML = `Longitude: ${longitude}°`;
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
  let location = {location:{lat: latitude, lng: longitude}}
  window.initMap = initMap(location);
}

// =========

function initMap(property) {
  // map = new google.maps.Map(map, {
  //   center: property.location,
  //   zoom: 15,
  // });

  // const start = new google.maps.Marker({
  //   position: property.location,
  //   map: map,
  //   label: "A",
  //   title: "You",
  //   draggable: false,
  //   animation: google.maps.Animation.DROP,
  //   //icon: "PATH";
  // })
}




// ========= Add data in Check List ==========

let checklistArr = [];
let i;
for (i of checklistArr){
    let item1 = document.createElement('list')
    item1.setAttribute("value", '${i}');
    item1.append(item1);
}
add_item_check_list.addEventListener('click',(e)=>{
  e.preventDefault();
  if (check_list_content.value == ""){
    console.log('If statement')
  }
  else{
    console.log('else statement')
    let data = {
      item : check_list_content.value
    }
    checklistArr.push(data);
  
    drawTable();
  }
  
  check_list_content.value='';
  check_list_content.focus();

})

let table_content = '<table><thead><tr><th scope="col">Check List</th></tr></thead><tbody>';
function drawTable(){
  check_list_table.innerHTML=""
  check_list_table.innerHTML=table_content;
  let row;
  for(items of checklistArr){
    row=`<tr>`;
      for(val in items){
          row += `<td>${items[val]}</td><hr>`
      }
      row += `</tr>`
      check_list_table.innerHTML += row;
    }
    check_list_table.innerHTML += `</tbody></table>`;
    console.log(row);
}

// ======================================