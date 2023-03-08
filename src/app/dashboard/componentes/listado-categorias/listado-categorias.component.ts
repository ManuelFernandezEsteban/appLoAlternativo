import { Component, Input, OnInit } from '@angular/core';
import { Especialistas_Categoria } from '../../../interfaces/especialistas_categorias.interface';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.scss']
})
export class ListadoCategoriasComponent implements OnInit {

  @Input()categorias:Especialistas_Categoria[]=[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
