




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
  
var element = document.createElement("div")
element.className = "tomtommarker"
var lc = new tt.Marker({ element: element }).setLngLat(location.Coordinate).addTo(map);

  // var lc = new tt.Marker().setLngLat(child.Coordinate).addTo(map);
  var popup = new tt.Popup({ anchor: "top" }).setText(child.Address);
 lc.setPopup(popup);
  //createMarker(child.Coordinate,"red",child.Address)
});
