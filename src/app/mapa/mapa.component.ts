import { Component, AfterViewInit } from '@angular/core';
import * as leaflet from 'leaflet';
import * as fullscreenControl from 'leaflet.fullscreen';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {
  constructor() {
    fullscreenControl
  }

  ngAfterViewInit(): void {
    const map = new leaflet.Map('map',).setView([-12.0989, -77.0347], 15);
    const MapasBase = {
      'Trama Colindante': leaflet.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms',
        {
          layers: 'glayer_Trama_externa',
          format: 'image/png',
          transparent: false,
          maxZoom: 24,
          attribution: 'Municipalidad de San Isidro'
        }).addTo(map),
      'Guia Calles': leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 24,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiamNoYWZsb3F1ZW0iLCJhIjoiY2tzNWZkY24yMDI3YjJ2cGxmcW1zcnFheCJ9.994jBLV3ywQUZlUGzTLXGQ'
      }),
      'Satelite': leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 24,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiamNoYWZsb3F1ZW0iLCJhIjoiY2tzNWZkY24yMDI3YjJ2cGxmcW1zcnFheCJ9.994jBLV3ywQUZlUGzTLXGQ'
      })
    }
    const CapasBase = {
      'Información Catastral': leaflet.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms?', {
        layers: 'glayer_Lotizacion', format: 'image/png', transparent: true, maxZoom: 24
      }).addTo(map),
      'Sector Distrital': leaflet.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms?', {
        layers: 'glayer_sec_distrital', format: 'image/png', transparent: true, maxZoom: 24
      }),
      'Urbanizaciones': leaflet.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        layers: 'glayer_urbanizaciones', format: 'image/png', transparent: true, maxZoom: 24
      }),
      'Zonificación': leaflet.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
        layers: 'glayer_zonificacion', format: 'image/png', transparent: true, maxZoom: 24
      })
    };

    //Control de Carga de capas
    leaflet.control.layers(MapasBase, CapasBase, { position: 'topright',collapsed:false }).addTo(map);














    //Control de escala del mapa
    leaflet.control.scale({ position: 'bottomleft' }).addTo(map);
    //Pantalla Completa
    leaflet.control.fullscreen({
      position: 'topleft',
      title: 'Pantalla Completa',
      titleCancel: 'Click salir Pantalla completa',
      forceSeparateButton: true,
      forcePseudoFullscreen: false,
      fullscreenElement: false
    }).addTo(map);


  }
}



