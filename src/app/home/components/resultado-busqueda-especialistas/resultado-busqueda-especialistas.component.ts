import { Component, Input, OnInit } from '@angular/core';
import { DataEspecialistasService } from 'src/app/services/data-especialistas.service';
import { Especialista, Especialistas } from '../../../interfaces/especialistas';
import { Especialidad } from '../../../interfaces/especialiadad';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';

@Component({
  selector: 'app-resultado-busqueda-especialistas',
  templateUrl: './resultado-busqueda-especialistas.component.html',
  styleUrls: ['./resultado-busqueda-especialistas.component.scss']
})
export class ResultadoBusquedaEspecialistasComponent implements OnInit {
  @Input()
  especialidad!: Especialidad;
  isVisible:boolean=false;
  lista:Especialista[]=[];
  especialistaAMostrar!: Especialista;


  constructor(public serviceDataEspecialistas:DataEspecialistasService,public serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {    
        this.getEspecialistas();
  }

  getEspecialistas(){
    this.serviceDataEspecialistas.getEspecialistas<Especialistas>().subscribe(res=>{
      this.lista=res.especialistas;            
    });
  }

  resultado(lista:Especialista[]){
    this.lista=lista;    
  }

  reset(isReset:boolean){
    this.getEspecialistas();
  }

  toggleFiltros(){
    this.isVisible=!this.isVisible;
  }

  eventoSeleccionado(event:Especialista){
    this.especialistaAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }

}
