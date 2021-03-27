import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

const TILE_SET = "mapbox://jadurani.1wbrzzlk";

const CENTER = {
  coords: [121.09111031660495, 14.632513058308708],
  name: "",
  adderss: ""
}

const MARKERS = [
  {
    coords: [121.07664612988394, 14.610013585323642],
    name: "Eastwood City Police and Fire Station",
    address: "Eulogio Rodriguez Jr. Ave, Bagumbayan, Quezon City, 1110 Metro Manila"
  },
  {
    coords: [121.09744726780325, 14.632973853877834],
    name: "Central Fire Station",
    address: "Quezon City, 1800 Metro Manila"
  },
  {
    coords: [121.08302734674311, 14.631075599651368],
    name: "Riverbanks Police Station",
    address: "Marikina, 1800 Metro Manila"
  },
  {
    coords: [121.0864171434955, 14.617456571847612],
    name: "Santolan Fire Station",
    address: "F. Pasco Ave, Pasig, 1610 Metro Manila"
  },
  {
    coords: [121.09555485648012, 14.633571141425632],
    name: "Police Station 3 (Sta. Elena)",
    address: "303 J. P. Rizal St, Marikina, 1800 Metro Manila"
  },
  {
    coords: [121.09632049252338, 14.620712168243758],
    name: "Salve Regina General Hospital, Inc.",
    address: "Marikina-Infanta Hwy, Pasig, 1800 Metro Manila"
  },
  {
    coords: [121.10301528595681, 14.625113843893491],
    name: "St. Anthony Medical Center",
    address: "32 Santa Ana, Ext, Marikina, 1801 Metro Manila"
  },
  {
    coords: [121.09958205855504, 14.637653983067825],
    name: "VT Maternity Hospital",
    address: "22 Guerilla St. Toyota Ave, Marikina, 1800 Metro Manila"
  },
  {
    coords: [121.08610664100308, 14.633833884115665],
    name: "Sta. Monica Hospital",
    address: "138 A A. Bonifacio Ave, Marikina, 1800 Metro Manila"
  },
  {
    coords: [121.08387504319194, 14.627688367998127],
    name: "The Medical City",
    address: "SM Marikina, Marikina-Infanta Hwy, Marikina, 1801 Metro Manila"
  }
];


@Component({
  selector: 'app-test-pins',
  templateUrl: './test-pins.component.html',
  styleUrls: ['./test-pins.component.scss']
})
export class TestPinsComponent implements OnInit {
  centerMarker;
  map;

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFkdXJhbmkiLCJhIjoiY2tsZ245OGx3MHltbTJwcWwxbGpubjY1cyJ9.lqNLH1nne4ddBcXvWsP9YQ';

    this.map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/jadurani/ckmodfz86222p17qpygjc2y5j', // style URL
        center: CENTER.coords, // starting position [lng, lat]
        zoom: 13, // starting zoom,
    });

    this.map.on('load', () => {
      this.centerMarker = new mapboxgl.Marker({"color": "#b40219"})
        .setLngLat(CENTER.coords)
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
        .addTo(this.map); // add the marker to the map

      MARKERS.forEach((m) => (
        new mapboxgl.Marker()
          .setLngLat(m.coords)
          .setPopup(new mapboxgl.Popup().setHTML(
            `
              <div>
                <div>${m.name}</div>
                <small>${m.address}</small>
              </div>
            `
          ))
          .addTo(this.map)
      ));

      this.map.addSource("marikina-25-flood", {
        type: "vector",
        url: TILE_SET
      });

      this.map.addLayer({
        "id": "marikina-25-flood",
        "type": "fill",
        "source": "marikina-25-flood",
        "source-layer": "marikina_fh25yr_10m-9ew6s9",
        "paint": {
          "fill-color": [
            "step",
            ["get", "Var"],
            "hsl(50, 99%, 82%)",
            1,
            [
              "match",
              ["get", "Var"],
              0,
              "hsla(0, 100%, 68%, 0.89)",
              "hsl(27, 100%, 51%)"
            ],
            3,
            [
              "match",
              ["get", "Var"],
              [3],
              "rgb(255, 0, 0)",
              "#000000"
            ]
          ],
          "fill-opacity": .3
        }
      })
    })
  }
}
