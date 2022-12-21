import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { Evento } from 'src/app/interfaces/eventos';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { DataEventosService } from '../../../services/data-eventos.service';
import { Eventos } from '../../../interfaces/eventos';

@Component({
  selector: 'app-eventos-especialidad',
  templateUrl: './eventos-especialidad.component.html',
  styleUrls: ['./eventos-especialidad.component.scss']
})
export class EventosEspecialidadComponent implements OnInit {
  especialidad!: Especialidad;

  eventos: Evento[]=[];
  eventoAMostrar!: Evento;
  mostrarModal:boolean=false;
  
  constructor(private route:ActivatedRoute,private router: Router,public serviceModalEventoService:ServiceModalEventoService,private dataEventosService:DataEventosService) { }

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
