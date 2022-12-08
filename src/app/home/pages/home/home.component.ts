import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  especialidades:Especialidad[]=[]

  constructor(private dataEspecialidadesService:DataEspecialidadesService) { }

  ngOnInit(): void {
    this.dataEspecialidadesService.getEspecialidades().subscribe(res=>{
      console.log(res.especialidades);
      this.especialidades=res.especialidades;
      
    })
  }

}
