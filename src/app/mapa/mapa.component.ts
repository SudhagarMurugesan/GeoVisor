import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as fullscreenControl from 'leaflet.fullscreen';
import * as controlTree from 'leaflet.control.layers.tree';




@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {
  constructor() {
    fullscreenControl
    controlTree
  }
  ngAfterViewInit(): void {
    //Cargar el Mapa
    const map = L.map('map',).setView([-12.098900, -77.034700], 15);

    //Grupo de Capas
    ///Ortofotos
    const MapsBase = {
      label: 'MAPAS & FOTOGRAFIAS',
      children: [
        {
          label: 'MAPAS BASE ',
          children: [
            {
              label: 'Distritos Colindantes', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'glayer_Trama_externa', format: 'image/png', transparent: false, maxZoom: 24, attribution: '<a href="http://www.msi.gob.pe/">Municipalidad de San Isidro</a>',
              }).addTo(map)
            },
            {
              label: 'Guia de Calles', layer: L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 24,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiamNoYWZsb3F1ZW0iLCJhIjoiY2tzNWZkY24yMDI3YjJ2cGxmcW1zcnFheCJ9.994jBLV3ywQUZlUGzTLXGQ'
              })
            },
            {
              label: 'Satelital', layer: L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 24,
                id: 'mapbox/satellite-v9',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiamNoYWZsb3F1ZW0iLCJhIjoiY2tzNWZkY24yMDI3YjJ2cGxmcW1zcnFheCJ9.994jBLV3ywQUZlUGzTLXGQ'
              })
            },
          ]
        },
        {
          label: 'FOTOGRAFIAS AEREAS',
          children: [
            {
              label: 'Ortofoto 2018', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_16_Ortofoto2018', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2016', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_15_Ortofoto2016', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2015', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_14_Ortofoto2015', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2012', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_13_Ortofoto2012', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2008', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_12_Ortofoto2008', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2006', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_11_Ortofoto2006', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 2002', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_10_Ortofoto2002', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1998', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_09_Ortofoto1998', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1984', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_07_Ortofoto1984', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1974', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_06_Ortofoto1974', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1974', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_06_Ortofoto1974', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1958', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_04_Ortofoto1958', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1949', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_03_Ortofoto1949', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Ortofoto 1943', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: '13_01_Ortofoto1943', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
          ]
        }
      ],
    };
    const dataBase = {
      label: '<a>INFORMACION TEMATICA</a>',
      children: [
        {
          label: '<a>GALERIA DE MAPAS</a>',
          children: [
            {
              label: 'Lotización', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'glayer_Lotizacion', format: 'image/png', transparent: true, maxZoom: 24
              }).addTo(map)
            },
            {
              label: 'Zonificación', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'glayer_zonificacion', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Uso predominante', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'tem_uso_predominante', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Lote con Informacion registral', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'tem_lote_rrpp', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
            {
              label: 'Lote con Certificado de numeracion', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                layers: 'tem_cert_numeracion', format: 'image/png', transparent: true, maxZoom: 24
              })
            },
          ]
        },
        {
          label: 'INFORMACION TEMATICA',
          children: [
            {
              label: 'Cultura y Patrimonio',
              children: [
                {
                  label: 'Monumento Arqueologico', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_MonumentosArqueologicos', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Locales Comunales', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_LocalesCulturales', format: 'image/png', transparent: true, maxZoom: 24
                  })
                }
              ]
            },
            {
              label: 'Gobierno',
              children: [
                {
                  label: 'Locales Municipales', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Local', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },

              ]
            },
            {
              label: 'Economia y Trabajo',
              children: [
                {
                  label: 'Mercados y Supermercados', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Mercados', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Centro Comercial', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_CentroComercial', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: 'Educación',
              children: [
                {
                  label: 'Institutos', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Institutos', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Universidades', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Universidades', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: 'Salud y Social',
              children: [
                {
                  label: 'Clinicas', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Clinica', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Casas del vecino', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_CasaVecino', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Farmacias', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Farmacias', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: 'Ocio y Recreación',
              children: [
                {
                  label: 'Cines y Teatros', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Cine', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Juegos para niños', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Juegos', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Clubes', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Clubes', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: 'Deportes',
              children: [
                {
                  label: 'Estadios y Canchas deportivas', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Estadio', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: 'Territorio',
              children: [
                {
                  label: 'Puntos Geodesicos', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Geodesicos', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: '<a>Transporte</a>',
              children: [
                {
                  label: 'Metropolitano', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Metropolitano', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Estacion de bicicletas', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_BiciPublica', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },
            {
              label: '<a>Gestion de Riesgo</a>',
              children: [
                {
                  label: 'Puntos Seguros', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_ZonasRefugio', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Bomberos', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'int_Bomberos', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
                {
                  label: 'Modulos de Seguridad', layer: L.tileLayer.wms('http://geo.munisanisidro.gob.pe:8080/geoserver/msigeoportal/wms', {
                    layers: 'modulos de seguridad', format: 'image/png', transparent: true, maxZoom: 24
                  })
                },
              ]
            },

          ]
        }
      ],
    };

    //Control de Carga de capas
    //L.control.layers(MapasBase, CapasBase, { collapsed: false }).addTo(map);
    //L.control.layers(Ortofotos, CapasBase, { position: 'topleft', collapsed: false, sortLayers: true, autoZIndex: false, hideSingleBase: true }).addTo(map);
    //Control de escala del mapa
    L.control.scale({ position: 'bottomleft' }).addTo(map);
    //Pantalla Completa
    L.control.fullscreen({
      position: 'topleft',
      title: 'Pantalla Completa',
      titleCancel: 'Click salir Pantalla completa',
      forceSeparateButton: true,
      forcePseudoFullscreen: false,
      fullscreenElement: false
    }).addTo(map);

    L.control.layers.tree(MapsBase, dataBase,{
      closedSymbol:'&#x1F5C0',
      openedSymbol:'&#x1f5c1',
      labelIsSelector:'jorge',
      collapsed:false,

    }).addTo(map);

  }
}



