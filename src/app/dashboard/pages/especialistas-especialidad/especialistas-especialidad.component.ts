import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialista } from 'src/app/interfaces/especialistas';
import { DataEspecialidadesService } from '../../../services/data-especialidades.service';

@Component({
  selector: 'app-especialistas-especialidad',
  templateUrl: './especialistas-especialidad.component.html',
  styleUrls: ['./especialistas-especialidad.component.scss']
})
export class EspecialistasEspecialidadComponent implements OnInit {

  idEspecialidad!: number;
  especialidad:string='';
  listaEntrada:Especialista[]=[];
  listaResultado:Especialista[]=[];

  constructor(private route:ActivatedRoute,private dataEspecialidadesService:DataEspecialidadesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{      
      
      this.idEspecialidad= parseInt(params['id']);       
      this.especialidad= this.dataEspecialidadesService.getNombreEspecialidad(this.idEspecialidad); 
      
    });    

  }

  resultado(listaResultado:Especialista[]){
    this.listaResultado=listaResultado;
  }

}
