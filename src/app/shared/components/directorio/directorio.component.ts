import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {
  
  @Input() especialidades:Especialidad[]=[];
  @Output() onSeleccionEspecialidad = new EventEmitter<Especialidad>();
  constructor() { }

  ngOnInit(): void {
  }
  selecionEspecialidad(event:Especialidad){
    
    this.onSeleccionEspecialidad.emit(event);

  }
}
