var map = L.map('map').setView([51.505, -0.09], 13); //no options are passed when creating the map instance, 
                                                    //thus all mouse and touch interactions on the map are enabled
                                                    //setView also returns the map object, most leaflet objects act 
                                                    //like this when they don't return an explicit value
                                                    
// now let's create tile for our map. We will use OpenStreetMap tile layer                                                    
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19,
    attribution: '&copy: <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//make sure that all the code is called after <div> and leaflet.js inclusion
var marker = L.marker([51.5, -0.09]).addTo(map);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hello, world!</b></br> I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/*var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map); //here we use openOn instead of addTo() because it closes previously opened popup*/



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);



