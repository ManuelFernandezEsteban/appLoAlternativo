import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Especialidad, Especialidades } from '../../../interfaces/especialiadad';


import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';


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

    })
  }

  selecionEspecialidad(event: Especialidad) {
    window.scrollTo(0,0);
    this.router.navigate(['eventos-especialidad'],{queryParams:event});
  }


}




