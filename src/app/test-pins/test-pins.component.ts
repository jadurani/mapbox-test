import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
@Component({
  selector: 'app-test-pins',
  templateUrl: './test-pins.component.html',
  styleUrls: ['./test-pins.component.scss']
})
export class TestPinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    mapboxgl.accessToken = 'pk.eyJ1IjoiamFkdXJhbmkiLCJhIjoiY2tsZ245OGx3MHltbTJwcWwxbGpubjY1cyJ9.lqNLH1nne4ddBcXvWsP9YQ';
    // const bounds = [
    //   [132.496285, 3.891757], // [west, south]
    //   [129.587057, 20.317067] // [east, north]
    // ];

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/jadurani/ckmodfz86222p17qpygjc2y5j', // style URL
        center: [121.112105, 14.593755], // starting position [lng, lat]
        zoom: 13, // starting zoom,
        // maxBounds: bounds
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([121.112105, 14.593755])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      .addTo(map); // add the marker to the map
  }
}
