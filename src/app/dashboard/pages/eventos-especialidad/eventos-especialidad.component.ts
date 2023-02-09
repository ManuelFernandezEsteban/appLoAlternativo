import { Component, OnInit } from '@angular/core';
import { IEvento,  } from 'src/app/interfaces/eventos';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { Actividad } from '../../../interfaces/especialiadad';
import { EventosService } from '../../../services/eventos.service';
import { EventosActividad } from '../../../interfaces/eventos-actividad.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventos-especialidad',
  templateUrl: './eventos-especialidad.component.html',
  styleUrls: ['./eventos-especialidad.component.scss']
})
export class EventosEspecialidadComponent implements OnInit {

  idEspecialidad!: number;
  especialidad:string='';
  eventos: IEvento[]=[];
  numeroTotalEventos:number=0;
  eventoAMostrar!: IEvento;
  mostrarModal:boolean=false;
  actividad:Actividad;
  paginaActual:number=1;
  numeroDePaginas:number=0;
  
  constructor(    
    public serviceModalEventoService:ServiceModalEventoService,
    private dataEspecialidadesService:DataEspecialidadesService,
    private eventosService:EventosService
    ) { }

  ngOnInit(): void {
    this.actividad=this.dataEspecialidadesService.actividadSeleccionada;
    this.especialidad=this.actividad.nombre;
    this.cargarPagina(1);
  }

  eventoSeleccionado(event:IEvento){
    this.eventoAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }

  cargarPagina(event:number){
    this.paginaActual=event;
    this.eventosService.getEventosActividad(this.actividad.id,this.paginaActual)
      .subscribe((res:EventosActividad)=>{
        console.log(res.eventos);
        this.eventos=res.eventos;
        this.numeroTotalEventos=res.count;
        if (this.numeroTotalEventos===5){
          this.numeroDePaginas=1;
        }else{
          this.numeroDePaginas= Math.floor( this.numeroTotalEventos / 5 ) + 1;
        }
      },(err)=>{
        Swal.fire('Error',err.error.msg,'error');
      });

  }
}
