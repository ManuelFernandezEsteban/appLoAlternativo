import { Component, OnInit,EventEmitter,Input,Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Actividad } from 'src/app/interfaces/especialidad';
import { Herramientas} from '../../../interfaces/especialidad';

@Component({
  selector: 'app-especialidad-cuadrada',
  templateUrl: './especialidad-cuadrada.component.html',
  styleUrls: ['./especialidad-cuadrada.component.scss']
})
export class EspecialidadCuadradaComponent implements OnInit {

  @Output() onEspecialidad = new EventEmitter<Actividad>();

  @Input() boxEspecialidad:Actividad={
    id:0,
    nombre: '',
    imagen: '',
    Herramientas:[]
  };
  

  constructor( ) { }

  ngOnInit(): void {
  }

  async onClickEspecialidad (){ 
      
    this.onEspecialidad.emit(this.boxEspecialidad);
  }
}
