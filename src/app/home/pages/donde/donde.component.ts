import { Component, OnInit } from '@angular/core';
import { InfoModal } from '../../../interfaces/infoModal';
import { InfoDireccionModal } from '../../../interfaces/infoDireccionModal';

@Component({
  selector: 'app-donde',
  templateUrl: './donde.component.html',
  styleUrls: ['./donde.component.scss']
})
export class DondeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
