let title = document.getElementById("theHeading");
title.innerHTML = "Leaflet + OSM Basemap Layer";
title.classList.add("old-heading");



//create Leaflet map container
const map = L.map("map-container")
  .setView([37.2303, -118.5453], 6);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

import { apiKey } from "./config";
import { vectorBasemapLayer } from "esri-leaflet-vector";
vectorBasemapLayer("3a51a984c45f4af88cc95bcc8714b350", {
  apiKey: apiKey,
}).addTo(map);





if(apiKey) {
  title.innerHTML = "Esri Leaflet + ArcGIS Basemap Layer";
  title.classList.add("new-title");
}

