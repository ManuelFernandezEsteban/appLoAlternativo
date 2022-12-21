import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { Especialidades } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  especialidades:Especialidad[]=[];

  constructor(private dataEspecialidadesService:DataEspecialidadesService,private router:Router) { }

  ngOnInit(): void {
    this.dataEspecialidadesService.getEspecialidades<Especialidades>().subscribe(res=>{
      
      this.especialidades=res.especialidades;
      
    })
  }

  seleccionEspecialidad(event:Especialidad){
    //console.log(event);
    window.scrollTo(0,0);
    this.router.navigate(['eventos'],{queryParams:event});
    
  }

}
