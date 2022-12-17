import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';

@Component({
  selector: 'app-directorio-redondo',
  templateUrl: './directorio-redondo.component.html',
  styleUrls: ['./directorio-redondo.component.scss']
})
export class DirectorioRedondoComponent implements OnInit {
  @Input() especialidades:Especialidad[]=[];
  @Output() onSeleccionEspecialidad = new EventEmitter<Especialidad>();
  constructor() { }

  ngOnInit(): void {
  }
  selecionEspecialidad(event:Especialidad){
    
    this.onSeleccionEspecialidad.emit(event);

  }
}
