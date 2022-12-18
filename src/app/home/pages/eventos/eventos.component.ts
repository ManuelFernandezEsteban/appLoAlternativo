import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Especialidad, Especialidades } from '../../../interfaces/especialiadad';
import { DataEventosService } from '../../../services/data-eventos.service';
import { Evento, Eventos } from '../../../interfaces/eventos';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  especialidades:Especialidad[]=[];


  especialidad!: Especialidad;
  eventos: Evento[]=[];
  eventoAMostrar!: Evento;
  mostrarModal:boolean=false;

  constructor(private dataEspecialidadesService:DataEspecialidadesService,private route:ActivatedRoute,private dataEventosService:DataEventosService,
    public serviceModalEventoService:ServiceModalEventoService) { 

  }

  ngOnInit(): void {

    this.dataEspecialidadesService.getEspecialidades<Especialidades>().subscribe(res=>{
      
      this.especialidades=res.especialidades;
      
    })

    this.route.queryParams.subscribe(params=>{
      
      this.especialidad=params as Especialidad;
    });
    this.dataEventosService.getEventos<Eventos>().subscribe(res=>{
      this.eventos=res.eventos;
      
    })
  }

  eventoSeleccionado(event:Evento){
    this.eventoAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }

  
 

}
