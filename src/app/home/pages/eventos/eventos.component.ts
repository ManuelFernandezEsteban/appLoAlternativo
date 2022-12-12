import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { Especialidad } from '../../../interfaces/especialiadad';
import { DataEventosService } from '../../../services/data-eventos.service';
import { Evento, Eventos } from '../../../interfaces/eventos';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  especialidad!: Especialidad;
  eventos: Evento[]=[];

  constructor(private route:ActivatedRoute,private dataEventosService:DataEventosService) { 

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.especialidad=params as Especialidad;
    });
    this.dataEventosService.getEventos<Eventos>().subscribe(res=>{
      this.eventos=res.eventos;
      console.log(this.eventos)
    })
  }

}
