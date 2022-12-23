import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  especialidades: Especialidad[] = [];

  constructor(private dataEspecialidadesService: DataEspecialidadesService,  
    public serviceModalEventoService: ServiceModalEventoService,private router:Router) {

  }

  ngOnInit(): void {

    this.dataEspecialidadesService.getEspecialidades<Especialidades>().subscribe(res => {

      this.especialidades = res.especialidades;
      this.dataEspecialidadesService.especialidades=this.especialidades;

    })
  }

  selecionEspecialidad(event: Especialidad) {
    window.scrollTo(0,0);
    
    //this.router.navigateByUrl('/home/eventos/eventos-especialidad')
    this.router.navigate(['eventos/eventos-especialidad',event.id]);
  }
}
