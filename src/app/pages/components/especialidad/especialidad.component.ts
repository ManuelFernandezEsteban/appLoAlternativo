import { Component, OnInit, Input } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especiliadad';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss']
})
export class EspecialidadComponent implements OnInit {

  @Input() boxEspecialidad:Especialidad={
    nombre: '',
    imagen: ''
  };
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.boxEspecialidad)
  }

}
