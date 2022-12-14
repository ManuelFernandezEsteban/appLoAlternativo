import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Especialidad } from '../../../interfaces/especialiadad';
import { DataEventosService } from '../../../services/data-eventos.service';
import { Evento, Eventos } from '../../../interfaces/eventos';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  especialidad!: Especialidad;
  eventos: Evento[]=[];
  eventoAMostrar!: Evento;
  mostrarModal:boolean=false;

  constructor(private route:ActivatedRoute,private dataEventosService:DataEventosService,
    public serviceModalEventoService:ServiceModalEventoService) { 

  }

  ngOnInit(): void {

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
