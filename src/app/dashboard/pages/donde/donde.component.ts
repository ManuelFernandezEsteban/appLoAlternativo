import { Component, OnInit } from '@angular/core';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';

import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-donde',
  templateUrl: './donde.component.html',
  styleUrls: ['./donde.component.scss']
})
export class DondeComponent implements OnInit {

  encabezado:string='encabezado'

  infoPhone:InfoModal={
    title:'Teléfono',
    info:'634889199',
    icono:'../../assets/images/icons-svg/mobile-solid.svg'
  }
  infoEmail:InfoModal={
    title:'Email',
    info:'loalternativo@gmail.com',
    icono:'../../assets/images/icons-svg/envelope-regular.svg'
  }
  infoDireccion:InfoDireccionModal={
    title:'Dirección',
    direccion:'Ctra. Alameda-Antequera Km, 1',
    localidad:'Alameda',
    provincia:'Málaga',
    codigo_postal:'29530',
    icono:'../../assets/images/icons-svg/location-pin-solid.svg'
  }
  instagram:RedSocialIcon={
    nombre:'Instagram',
    enlace:'https://www.instagram.com/nativostierra_/',
    icono:'../../../assets/images/icons-svg/instagram.svg'
  }
  facebook:RedSocialIcon={
    nombre:'FaceBook',
    enlace:'https://www.facebook.com/100089059505165',
    icono:'../../../assets/images/icons-svg/facebook.svg'
  }
  youtube:RedSocialIcon={
    nombre:'YouTube',
    enlace:'https://www.youtube.com/channel/UCMzJ0PPoQhcKkNZvnyBc3gA',
    icono:'../../../assets/images/icons-svg/youtube.svg'
  }

  constructor() { }

  ngOnInit(): void {

    (mapboxgl as any).accessToken = environment.mapBoxToken;
    const map = new mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-4.641528293780888,37.19905456837209], // starting position [lng, lat]
    zoom: 16, // starting zoom
    });

    let marker = new mapboxgl.Marker().setLngLat([-4.641528293780888,37.19905456837209]).addTo(map)

  }
}
