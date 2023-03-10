import { Component, Input, OnInit } from '@angular/core';

import { UsaHerramienta } from '../../../interfaces/especialidad';
import { HerramientasService } from '../../../services/herramientas.service';
import { Herramienta, Herramientas, HerramientasResp } from '../../../interfaces/especialidad';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.scss']
})
export class ListadoCategoriasComponent implements OnInit {

  @Input()especialista:string='';
  herramientas:UsaHerramienta[]=[];
  
  constructor(private herramientasService:HerramientasService) { }

  ngOnInit(): void {   
    console.log(this.especialista)
    this.herramientasService.getHerramientasByEspecialista<HerramientasResp>(this.especialista)
    .subscribe((res:HerramientasResp)=>{
      this.herramientas=res.usaHerramientas;

      console.log(this.herramientas)
    });
  }





  ññññ
 
}
