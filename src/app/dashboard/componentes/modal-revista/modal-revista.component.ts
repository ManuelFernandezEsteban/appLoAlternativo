import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from 'src/app/interfaces/eventos';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-modal-revista',
  templateUrl: './modal-revista.component.html',
  styleUrls: ['./modal-revista.component.scss']
})
export class ModalRevistaComponent implements OnInit {

  @Input()
  evento!: IEvento;
  direccion!: InfoDireccionModal;
  infoTelefono!: InfoModal;
  infoMail!: InfoModal;
  infoWeb!: InfoModal;
  twitter: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  instagram: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  facebook: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  youtube: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };
  twitch: RedSocialIcon = {
    nombre: '',
    enlace: '',
    icono: ''
  };

  constructor(public serviceModalEventoService: ServiceModalEventoService) { }

  ngOnInit(): void {
    this.direccion = {
      title: 'Ubicacion',
      direccion: this.evento.direccion,
      localidad: this.evento.localidad,
      provincia: this.evento.provincia,
      codigo_postal: this.evento.codigo_postal,
      icono: '../../assets/images/icons-svg/location-pin-solid.svg'
    }
    this.infoTelefono = {
      title: 'Telefono',
      info: this.evento.telefono,
      icono: '../../assets/images/icons-svg/mobile-solid.svg'
    }
    this.infoMail = {
      title: 'Email',
      info: this.evento.email,
      icono: '../../assets/images/icons-svg/envelope-regular.svg'
    }
    this.infoWeb = {
      title: 'Web',
      info: this.evento.web,
      icono: '../../assets/images/icons-svg/globe-solid.svg'
    }
    this.twitter = {
      nombre: '',
      enlace: this.evento.twitter,
      icono: '../../assets/images/icons-svg/twitter.svg'
    }
    this.instagram = {
      nombre: '',
      enlace: this.evento.instagram,
      icono: '../../assets/images/icons-svg/instagram.svg'
    }
    this.facebook = {
      nombre: '',
      enlace: this.evento.facebook,
      icono: '../../assets/images/icons-svg/facebook.svg'
    }
    this.youtube = {
      nombre: '',
      enlace: this.evento.you_tube,
      icono: '../../assets/images/icons-svg/youtube.svg'
    }
    this.twitch = {
      nombre: '',
      enlace: this.evento.twich,
      icono: '../../assets/images/icons-svg/twitch.svg'
    }
  }

  cerrarModal() {
    this.serviceModalEventoService.closeDialog();
  }

  descargarRevista(){
    console.log('revista')
    this.serviceModalEventoService.openDialog();
  }

}
