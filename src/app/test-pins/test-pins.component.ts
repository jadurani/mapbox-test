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
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/jadurani/ckmej6gih49mw17ofngqup66a', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
  }
}
