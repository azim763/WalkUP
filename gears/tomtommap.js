




let map, marker;

function initMap() {
  map = tt.map({
    key: 'NcAivnVemAgNwcwusetBYc3fCAhTPlHB',
    container: 'map',
      center: [ -122.4194, 37.4194],
    zoom: 8,
  });

  marker = new tt.Marker({ draggable: true }).setLngLat([ -122.4194,37.7749]).addTo(map);

  marker.on('dragend', function (e) {
    let lat = e.target.getLngLat().lat;
    let lng = e.target.getLngLat().lng;

    latitude.innerHTML=lat;
    longitude.innerHTML=lng;
  
    console.log("New latitude: " + lat);
    console.log("New longitude: " + lng);
  });
}


// let map, marker;

function initMapGeolocation() {
  tt.setProductInfo('MyAwesomeApp', '1.0.0'); // optional
  tt.services.fuzzySearch({
    key: 'NcAivnVemAgNwcwusetBYc3fCAhTPlHB',
    query: 'my location',
    language: 'en-US',
    limit: 1
  }).then(function (result) {
    let userLocation = result.results[0].position;
    map = tt.map({
      key: 'NcAivnVemAgNwcwusetBYc3fCAhTPlHB',
      container: 'map',
      center: userLocation,
      zoom: 8,
    });

        marker = new tt.Marker({ draggable: true }).setLngLat(userLocation).addTo(map);
    marker.on('dragend', function (e) {
       let lat = e.target.getLngLat().lat;
      let lng = e.target.getLngLat().lng;

      console.log("New latitude: " + lat);
      console.log("New longitude: " + lng);
    });
  });
}


// let map, marker;

function initMapCurrentLocation() {
   navigator.geolocation.getCurrentPosition(function (position) {
    let userLocation = [position.coords.longitude, position.coords.latitude];
    map = tt.map({
      key: 'NcAivnVemAgNwcwusetBYc3fCAhTPlHB',
      container: 'map',
      center: userLocation,
      zoom: 12,
    });
    longitude.innerHTML=userLocation[0];
    latitude.innerHTML=userLocation[1];
    
    // longitude.innerHTML=lng;

       marker = new tt.Marker({ draggable: true }).setLngLat(userLocation).addTo(map);

     marker.on('dragend', function (e) {
       let lat = e.target.getLngLat().lat;
      let lng = e.target.getLngLat().lng;

      latitude.innerHTML=lat;
      longitude.innerHTML=lng;
    
      console.log("New latitude: " + lat);
      console.log("New longitude: " + lng);
    });
  });
}

// initMap();
// initMapGeolocation();
initMapCurrentLocation();





// let map = document.getElementById("map");

// const status = document.querySelector('#status');
// const mapLink = document.querySelector('#map-link');

// latitude.textContent = '';
// longitude.textContent = '';

// function success(position) {
//   const latitude  = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   status.textContent = '';

// =======================
//  const yourLocation = { lat: latitude, lng: longitude };
// // The map, centered at Uluru
// const map = new google.maps.Map(document.getElementById("map"), {
//   zoom: 15,
//   center: yourLocation,
//   zoomControl: true,
//   mapTypeControl: true,
//   scaleControl: true,
//   streetViewControl: true,
//   rotateControl: true,
//   fullscreenControl: true,
  
// });

  // Add a marker at the User's Location on the map.
// new google.maps.Marker({
//   position: yourLocation,
//   map,
//   title: "You",
//   draggable: true,
//   animation: google.maps.Animation.DROP,
// });

// This event listener calls addMarker() when the map is clicked.
// google.maps.event.addListener(map, "click", (event) => {
//   addMarker(event.latLng, map);
// });

// Adds a marker to the map.
// const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let labelIndex = 0;

// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map,
//   });
// }

// // =======================

//   document.getElementById('latitude').innerHTML = `Latitude: ${latitude}°`;
//   document.getElementById('longitude').innerHTML = `Longitude: ${longitude}°`;
// }

// function error() {
//   status.textContent = 'Unable to retrieve your location';
// }

// if (!navigator.geolocation) {
//   status.textContent = 'Geolocation is not supported by your browser';
// } else {
//   status.textContent = 'Locating…';
//   navigator.geolocation.getCurrentPosition(success, error);
//   let location = {location:{lat: latitude, lng: longitude}}
//   window.initMap = initMap(location);
// }

// =========

// function initMap(property) {
//   // map = new google.maps.Map(map, {
//   //   center: property.location,
//   //   zoom: 15,
//   // });

//   // const start = new google.maps.Marker({
//   //   position: property.location,
//   //   map: map,
//   //   label: "A",
//   //   title: "You",
//   //   draggable: false,
//   //   animation: google.maps.Animation.DROP,
//   //   //icon: "PATH";
//   // })
// }




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
    // console.log('If statement')
  }
  else{
    // console.log('else statement')
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