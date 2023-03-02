import { Component, OnInit,EventEmitter,Input,Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { Categorias} from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-especialidad-cuadrada',
  templateUrl: './especialidad-cuadrada.component.html',
  styleUrls: ['./especialidad-cuadrada.component.scss']
})
export class EspecialidadCuadradaComponent implements OnInit {

  @Output() onEspecialidad = new EventEmitter<Especialidad>();

  @Input() boxEspecialidad:Especialidad={
    id:0,
    nombre: '',
    imagen: '',
    Categorias_actividades:[]
  };
  

  constructor( ) { }

  ngOnInit(): void {
  }

  async onClickEspecialidad (){ 
      
    this.onEspecialidad.emit(this.boxEspecialidad);
  }
}
