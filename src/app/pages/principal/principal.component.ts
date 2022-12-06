import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../../interfaces/especiliadad';
import { DataEspecialidadesService } from '../../services/data-especialidades.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  especialidades:Especialidad[]=[]
  
  constructor(private dataEspecialidadesService:DataEspecialidadesService) { }

  ngOnInit(): void {
    this.dataEspecialidadesService.getEspecialidades().subscribe(res=>{
      console.log(res.especialidades);
      this.especialidades=res.especialidades;
      
    })
  }

}
