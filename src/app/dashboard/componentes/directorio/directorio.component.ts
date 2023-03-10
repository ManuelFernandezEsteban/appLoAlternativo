import { Component, OnInit,EventEmitter,Input,Output, ViewChild, ElementRef } from '@angular/core';
import { Actividad } from 'src/app/interfaces/especialidad';


@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {

  @Input() cuadrada:boolean=false;
  @Input() especialidades:Actividad[]=[];
  @Output() onSeleccionEspecialidad = new EventEmitter<Actividad>();

 
 

  constructor() { }

  ngOnInit(): void {
  }
  selecionEspecialidad(event:Actividad){
  
    
    this.onSeleccionEspecialidad.emit(event);

  }

}
