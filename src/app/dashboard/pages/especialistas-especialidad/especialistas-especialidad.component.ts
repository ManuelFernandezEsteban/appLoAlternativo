import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';
import { DataEspecialidadesService } from '../../../services/data-especialidades.service';
import { Actividad } from '../../../interfaces/especialidad';

@Component({
  selector: 'app-especialistas-especialidad',
  templateUrl: './especialistas-especialidad.component.html',
  styleUrls: ['./especialistas-especialidad.component.scss']
})
export class EspecialistasEspecialidadComponent implements OnInit {

  actividad:Actividad;
  idEspecialidad!: number;
  especialidad:string='';

  constructor(private dataEspecialidadesService:DataEspecialidadesService,
              private route:Router) { }

  ngOnInit(): void {

    if (!this.dataEspecialidadesService.actividadSeleccionada){
      
      this.route.navigate(['/']);
    }

    this.actividad=this.dataEspecialidadesService.actividadSeleccionada;
    this.especialidad=this.actividad.nombre;  
    this.idEspecialidad=this.actividad.id;

  }
}
