import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from '../../../interfaces/especialistas';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { InfoDireccionModal } from '../../../interfaces/infoDireccionModal';
import { InfoModal } from '../../../interfaces/infoModal';


@Component({
  selector: 'app-modal-especialista',
  templateUrl: './modal-especialista.component.html',
  styleUrls: ['./modal-especialista.component.scss']
})
export class ModalEspecialistaComponent implements OnInit {

  @Input()
  especialista!: Especialista;
  direccion!: InfoDireccionModal;
  infoTelefono!:InfoModal;
  infoMail!:InfoModal;
  infoWeb!:InfoModal;

  constructor(private serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {
    console.log(this.especialista)

    this.direccion={
      title:'Ubicacion',
      direccion:this.especialista.direccion,
      localidad:this.especialista.localidad,
      provincia:this.especialista.provincia,
      codigo_postal:this.especialista.codigo_postal,
      icono:'../../assets/images/icons-svg/location-pin-solid.svg'
    }
    this.infoTelefono={
      title:'Telefono',
      info:this.especialista.telefono,
      icono:'../../assets/images/icons-svg/mobile-solid.svg'
    }
    this.infoMail={
      title:'Email',
      info:this.especialista.email,
      icono:'../../assets/images/icons-svg/envelope-regular.svg'
    }
    this.infoWeb={
      title:'Web',
      info:this.especialista.web,
      icono:'../../assets/images/icons-svg/globe-solid.svg'
    }


  }

  cerrarModal(){
    this.serviceModalEventoService.closeDialog();
  }
}
