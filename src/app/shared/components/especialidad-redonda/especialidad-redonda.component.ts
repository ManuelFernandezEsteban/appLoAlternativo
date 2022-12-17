import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';

@Component({
  selector: 'app-especialidad-redonda',
  templateUrl: './especialidad-redonda.component.html',
  styleUrls: ['./especialidad-redonda.component.scss']
})
export class EspecialidadRedondaComponent implements OnInit {

  @Output() onEspecialidad = new EventEmitter<Especialidad>();

  @Input() boxEspecialidad:Especialidad={
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
