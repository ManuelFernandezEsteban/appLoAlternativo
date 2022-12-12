import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../../../interfaces/eventos';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @Input()
  evento!: Evento;

  constructor() { }

  ngOnInit(): void {
  }



}
