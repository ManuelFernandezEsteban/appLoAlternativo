import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { Actividad, Actividades } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.scss']
})
export class EspecialistasComponent implements OnInit {

  especialidades: Actividad[] = [];

  constructor(private dataEspecialidadesService: DataEspecialidadesService,  
    public serviceModalEventoService: ServiceModalEventoService,private router:Router) {

  }

  ngOnInit(): void {

    this.dataEspecialidadesService.getEspecialidades<Actividades>().subscribe(res => {

      this.especialidades = res.actividades;     

    })
  }

  selecionEspecialidad(event: Especialidad) {
    window.scrollTo(0,0);
    this.dataEspecialidadesService.actividadSeleccionada=event;
    //this.router.navigateByUrl('/home/eventos/eventos-especialidad')
    this.router.navigate(['especialistas/especialistas-especialidad/',event.id]);
  }
}
