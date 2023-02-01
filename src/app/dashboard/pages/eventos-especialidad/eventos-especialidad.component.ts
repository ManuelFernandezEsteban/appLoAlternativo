import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvento, IEventos } from 'src/app/interfaces/eventos';
import { DataEventosService } from 'src/app/services/data-eventos.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { Actividad } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-eventos-especialidad',
  templateUrl: './eventos-especialidad.component.html',
  styleUrls: ['./eventos-especialidad.component.scss']
})
export class EventosEspecialidadComponent implements OnInit {

  idEspecialidad!: number;
  especialidad:string='';
  eventos: IEvento[]=[];
  eventoAMostrar!: IEvento;
  mostrarModal:boolean=false;
  actividad:Actividad;
  
  constructor(    
    public serviceModalEventoService:ServiceModalEventoService,
    private dataEspecialidadesService:DataEspecialidadesService,
    ) { }

  ngOnInit(): void {
    this.actividad=this.dataEspecialidadesService.actividadSeleccionada;
    this.especialidad=this.actividad.nombre

  }

  eventoSeleccionado(event:IEvento){
    this.eventoAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }
}
