import { Component, Input, OnInit } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';
import { InfoModal } from 'src/app/interfaces/infoModal';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { EspecialistasService } from '../../../services/especialistas.service';
//import { Especialistas_Categoria, Especialistas_Categorias } from '../../../interfaces/especialistas_categorias.interface';
import { HerramientasService } from '../../../services/herramientas.service';
import { Herramienta, Herramientas } from '../../../interfaces/especialidad';

@Component({
  selector: 'app-modal-especialista',
  templateUrl: './modal-especialista.component.html',
  styleUrls: ['./modal-especialista.component.scss']
})
export class ModalEspecialistaComponent implements OnInit { 

  @Input()
  especialista!: EspecialistaClass;
  direccion!: InfoDireccionModal;
  infoTelefono!:InfoModal;
  infoMail!:InfoModal;
  infoWeb!:InfoModal; 
  herramientas:Herramienta[];
  hayCategorias:boolean=false;

  constructor(private serviceModalEventoService:ServiceModalEventoService,
              private herramientasService:HerramientasService) { }

  ngOnInit(): void {  

    this.direccion={
      title:'Ubicacion',
      direccion:this.especialista.direccion,
      localidad:this.especialista.localidad,
      provincia:this.especialista.provincia,
      codigo_postal:this.especialista.codigo_postal,
      pais:this.especialista.pais,
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

    if (this.especialista.UsaHerramientas){
      if(this.especialista.UsaHerramientas.length>0){
        this.hayCategorias=true;
        
      }
    }


  }

  cerrarModal(){
    this.serviceModalEventoService.closeDialog();
  }
}
