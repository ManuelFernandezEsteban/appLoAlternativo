import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/interfaces/especialidad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { Actividades } from '../../../interfaces/especialidad';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  actividades:Actividad[]=[];

  constructor(private dataEspecialidadesService: DataEspecialidadesService,  
    public serviceModalEventoService: ServiceModalEventoService,private router:Router) {

  }

  ngOnInit(): void {

    this.dataEspecialidadesService.getEspecialidades<Actividades>()
    .subscribe(res=> {

      //console.log(res.actividades)
      this.actividades=res.actividades;

    })
  }

  selecionEspecialidad(event: Actividad) {
    window.scrollTo(0,0);
    this.dataEspecialidadesService.actividadSeleccionada=event;
    //this.router.navigateByUrl('/home/eventos/eventos-especialidad')
    this.router.navigate(['eventos/eventos-especialidad',event.id]);
  }
}
