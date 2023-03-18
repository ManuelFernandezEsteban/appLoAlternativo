import { Component, OnInit } from '@angular/core';
import { IEvento, IEventos } from 'src/app/interfaces/eventos';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEventosService } from '../../../services/data-eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventoAMostrar!: IEvento;
  mostrarModal:boolean=false;
  eventos:IEvento[]=[];


  constructor(private dataEventos:DataEventosService,public serviceModalEventoService:ServiceModalEventoService,) { }

  ngOnInit(): void {

    this.dataEventos.getEventosAlernativo<IEventos>().subscribe(res=>{

      this.eventos=res.eventos;
    })
  }
  eventoSeleccionado(event:IEvento){
    this.eventoAMostrar=event;
    if(this.eventoAMostrar.id===''){
      this.serviceModalEventoService.showDialogRevista=true;
    }
    this.serviceModalEventoService.openDialog();
  }
}
