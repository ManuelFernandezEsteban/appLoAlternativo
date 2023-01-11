import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Evento, Eventos } from 'src/app/interfaces/eventos';
import { DataEventosService } from '../../../services/data-eventos.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Evento } from '../../models/user.models';

@Component({
  selector: 'app-tabla-eventos',
  templateUrl: './tabla-eventos.component.html',
  styleUrls: ['./tabla-eventos.component.scss']
})
export class TablaEventosComponent implements OnInit {

  @Output()eventoSelection=new EventEmitter<Evento>()
  
  //eventos:Evento[]=[];

  constructor(public dataEventosService:DataEventosService,
              ) { }

  ngOnInit(): void {

  }

  filaSelected(event:Evento){
    this.eventoSelection.emit(event);
  }



}
