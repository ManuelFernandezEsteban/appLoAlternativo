import { Component, Input, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';

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
  }

}
