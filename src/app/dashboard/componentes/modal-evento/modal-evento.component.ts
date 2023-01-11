import { Component, Input, OnInit } from '@angular/core';
import { Evento } from 'src/app/interfaces/eventos';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { RedSocialIcon } from '../../../interfaces/redSocialIcon';
import { RespuestaEmail } from '../../../interfaces/respuestaEmail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.scss']
})
export class ModalEventoComponent implements OnInit {

  @Input()
  evento!: Evento;
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
  mostrarModalEmail:boolean=false;
  revista:boolean=false;




  constructor(public serviceModalEventoService: ServiceModalEventoService,private router:Router) { }

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

  descargarContenido(){
    if (this.evento.id===0){
      console.log(this.evento.evento);
      this.mostrarModalEmail=true;
    }
  }

  cerrarModalEmail(event:RespuestaEmail){
    this.mostrarModalEmail=false;
    if (event.mail!=''){
      this.cerrarModal()
      this.router.navigate(['revistas']);
    }
  }
}
