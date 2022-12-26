import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento, Eventos } from 'src/app/interfaces/eventos';
import { DataEventosService } from '../../../services/data-eventos.service';

@Component({
  selector: 'app-tabla-eventos',
  templateUrl: './tabla-eventos.component.html',
  styleUrls: ['./tabla-eventos.component.scss']
})
export class TablaEventosComponent implements OnInit {

  @Output()eventoSelection=new EventEmitter<Evento>()
  
  eventos:Evento[]=[];

  constructor(private dataEventosService:DataEventosService) { }

  ngOnInit(): void {
    this.dataEventosService.getEventos<Eventos>().subscribe(res=>{
      this.eventos=res.eventos;
    })
  }

  filaSelected(event:Evento){
    this.eventoSelection.emit(event);
  }



}
