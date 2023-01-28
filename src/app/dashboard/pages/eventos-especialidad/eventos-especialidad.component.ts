import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvento, IEventos } from 'src/app/interfaces/eventos';
import { DataEventosService } from 'src/app/services/data-eventos.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';

@Component({
  selector: 'app-eventos-especialidad',
  templateUrl: './eventos-especialidad.component.html',
  styleUrls: ['./eventos-especialidad.component.scss']
})
export class EventosEspecialidadComponent implements OnInit {

  idEspecialidad!: number;
  especialidad:string='';
  eventos: IEvento[]=[];
  eventoAMostrar!: IEvento;
  mostrarModal:boolean=false;
  
  constructor(private route:ActivatedRoute,    
    public serviceModalEventoService:ServiceModalEventoService,
    private dataEspecialidadesService:DataEspecialidadesService,
    private dataEventosService:DataEventosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{      
      this.idEspecialidad=parseInt(params['id']);
      
      this.especialidad = this.dataEspecialidadesService.getNombreEspecialidad(this.idEspecialidad);
    });
    this.dataEventosService.getEventos<IEventos>().subscribe(res=>{
      this.eventos=res.eventos;
    })
  }

  eventoSeleccionado(event:IEvento){
    this.eventoAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }
}
