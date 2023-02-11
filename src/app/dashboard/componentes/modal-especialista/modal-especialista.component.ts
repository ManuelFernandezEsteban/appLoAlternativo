import { Component, Input, OnInit } from '@angular/core';
import { IEspecialista } from 'src/app/interfaces/especialistas';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialidadesService } from '../../../services/data-especialidades.service';

@Component({
  selector: 'app-modal-especialista',
  templateUrl: './modal-especialista.component.html',
  styleUrls: ['./modal-especialista.component.scss']
})
export class ModalEspecialistaComponent implements OnInit {

  

  @Input()
  especialista!: IEspecialista;
  direccion!: InfoDireccionModal;
  infoTelefono!:InfoModal;
  infoMail!:InfoModal;
  infoWeb!:InfoModal;

  constructor(private serviceModalEventoService:ServiceModalEventoService,
              ) { }

  ngOnInit(): void {
    

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
