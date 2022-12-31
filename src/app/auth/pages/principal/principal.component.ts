import { Component, Input, OnInit } from '@angular/core';
import { Especialista, Especialistas } from 'src/app/interfaces/especialistas';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

 especialista:Especialista={
    id: 0,
    nombre: '',
    apellidos: '',
    fecha_alta: '',
    descripcion_terapia: '',
    actividad: '',
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: '',
    telefono: '',
    plan_contratado: '',
    token_pago: '',
    email: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  };

  constructor(private dataEspecialistasService:DataEspecialistasService) { 
    
  }

  ngOnInit(): void {
    this.dataEspecialistasService.getEspecialistas<Especialistas>()
      .subscribe(res=>{        
        this.especialista=res.especialistas[1];
        
    })
    //this.serviceModalEventoService.openDialog()
  }

}
