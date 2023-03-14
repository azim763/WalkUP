




var HQ = { lat: 49.28, lng: -123.12 };

var map = tt.map({
  key: "NcAivnVemAgNwcwusetBYc3fCAhTPlHB",
  container: "map",
  center: HQ,
  zoom: 10,
});

var marker = new tt.Marker().setLngLat(HQ).addTo(map);
var popup = new tt.Popup({ anchor: "top" }).setText("Vancouver");
marker.setPopup(popup).togglePopup();
var AbujaZone = [
  { Address: `"Location1"`, Coordinate: [-123.18, 49.25] },
  { Address: "Location2", Coordinate: [-123.02, 49.26] },
  { Address: "Location3", Coordinate: [-123.14, 49.28] },
  { Address: "Location4", Coordinate: [-123.08, 49.35] },
];
AbujaZone.forEach(function (child) {
  var lc = new tt.Marker().setLngLat(child.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(child.Address);
 lc.setPopup(popup);
  //createMarker(child.Coordinate,"red",child.Address)
});

// function createMarker(icon, position, color, popupText) {
//   var markerElement = document.createElement("div");
//   markerElement.className = "marker";

//   var markerContentElement = document.createElement("div");
//   markerContentElement.className = "marker-content";
//   markerContentElement.style.backgroundColor = color;
//   markerElement.appendChild(markerContentElement);

//   var iconElement = document.createElement("div");
//   iconElement.className = "marker-icon";
//   iconElement.style.backgroundImage =
//     'url("https://openlayers.org/en/latest/examples/data/icon.png")';
//   // 'url(../assets/images/custom-markers/' + icon + ')';
//   markerContentElement.appendChild(iconElement);

//   var popup = new tt.Popup({ offset: 30 }).setText(popupText);
//   // add marker to map
//   new tt.Marker({ element: markerElement, anchor: "bottom" })
//     .setLngLat(position)
//     .setPopup(popup)
//     .addTo(map);
// }
