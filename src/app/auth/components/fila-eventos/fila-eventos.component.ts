import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../../../interfaces/eventos';

@Component({
  selector: 'app-fila-eventos',
  templateUrl: './fila-eventos.component.html',
  styleUrls: ['./fila-eventos.component.scss']
})
export class FilaEventosComponent implements OnInit {

  @Input()evento!:Evento;

  @Output()onFilaSelection=new EventEmitter<Evento>();

  constructor() { }

  ngOnInit(): void {
  }

  onFila(){
    
    this.onFilaSelection.emit(this.evento);
  }
}
