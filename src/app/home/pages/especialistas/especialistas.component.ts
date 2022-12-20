import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { Especialidades } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.scss']
})
export class EspecialistasComponent implements OnInit {
  especialidades: Especialidad[] = []
  constructor(private dataEspecialidadesService: DataEspecialidadesService, private router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataEspecialidadesService.getEspecialidades<Especialidades>().subscribe(res => {

      this.especialidades = res.especialidades;

    })
  }

  seleccionEspecialidad(event:Especialidad){
    //console.log(event);
    window.scrollTo(0,0);
    this.router.navigate(['buscador-especialista'],{queryParams:event});
    
  }
}
