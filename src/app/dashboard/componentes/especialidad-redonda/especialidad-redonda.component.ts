import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividad } from 'src/app/interfaces/especialidad';

@Component({
  selector: 'app-especialidad-redonda',
  templateUrl: './especialidad-redonda.component.html',
  styleUrls: ['./especialidad-redonda.component.scss']
})
export class EspecialidadRedondaComponent implements OnInit {

  @Output() onEspecialidad = new EventEmitter<Actividad>();

  @Input() boxEspecialidad:Actividad={
    id:0,
    nombre: '',
    imagen: ''
  };
  

  constructor() { }

  ngOnInit(): void {
  }
  onClickEspecialidad(){
   
    this.onEspecialidad.emit(this.boxEspecialidad);
  }
}
