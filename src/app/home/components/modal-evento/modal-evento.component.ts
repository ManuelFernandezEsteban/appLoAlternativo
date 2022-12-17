import { Component, Input, OnInit } from '@angular/core';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { Evento } from '../../../interfaces/eventos';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.scss']
})
export class ModalEventoComponent implements OnInit {
  @Input()
  evento!: Evento;
  direccion!: InfoDireccionModal;
  infoTelefono!:InfoModal;
  infoMail!:InfoModal;
  infoWeb!:InfoModal;
 


  

  constructor(private serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {
    this.direccion={
      title:'Ubicacion',
      direccion:this.evento.direccion,
      localidad:this.evento.localidad,
      provincia:this.evento.provincia,
      codigo_postal:this.evento.codigo_postal,
      icono:'../../assets/images/icons-svg/location-pin-solid.svg'
    }
    this.infoTelefono={
      title:'Telefono',
      info:this.evento.telefono,
      icono:'../../assets/images/icons-svg/mobile-solid.svg'
    }
    this.infoMail={
      title:'Email',
      info:this.evento.email,
      icono:'../../assets/images/icons-svg/envelope-regular.svg'
    }
    this.infoWeb={
      title:'Web',
      info:this.evento.web,
      icono:'../../assets/images/icons-svg/globe-solid.svg'
    }
  }

  cerrarModal(){
     this.serviceModalEventoService.closeDialog();
  }

}
