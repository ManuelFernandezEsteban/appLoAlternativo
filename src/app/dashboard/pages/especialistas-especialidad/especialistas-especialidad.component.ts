import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEspecialista } from 'src/app/interfaces/especialistas';
import { DataEspecialidadesService } from '../../../services/data-especialidades.service';
import { Actividad } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-especialistas-especialidad',
  templateUrl: './especialistas-especialidad.component.html',
  styleUrls: ['./especialistas-especialidad.component.scss']
})
export class EspecialistasEspecialidadComponent implements OnInit {

  actividad:Actividad;


  idEspecialidad!: number;
  especialidad:string='';
  listaEntrada:IEspecialista[]=[];
  listaResultado:IEspecialista[]=[];

  constructor(private route:ActivatedRoute,private dataEspecialidadesService:DataEspecialidadesService) { }

  ngOnInit(): void {


    this.actividad=this.dataEspecialidadesService.actividadSeleccionada;
    this.especialidad=this.actividad.nombre;

/*
    this.route.params.subscribe(params=>{      
       
      this.idEspecialidad= parseInt(params['id']);       
      this.especialidad= this.dataEspecialidadesService.getNombreEspecialidad(this.idEspecialidad); 
      
    });    
*/
  }

  resultado(listaResultado:IEspecialista[]){
    this.listaResultado=listaResultado;
  }

}
