import { Component, Input, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { IEspecialista, Especialistas } from 'src/app/interfaces/especialistas';
import { DataEspecialistasService } from 'src/app/services/data-especialistas.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-resultado-busqueda-especialistas',
  templateUrl: './resultado-busqueda-especialistas.component.html',
  styleUrls: ['./resultado-busqueda-especialistas.component.scss']
})
export class ResultadoBusquedaEspecialistasComponent implements OnInit {

  @Input()
  especialidad!: number;
  isVisible:boolean=false;
  lista:IEspecialista[]=[];
  especialistaAMostrar!: IEspecialista;


  constructor(public serviceDataEspecialistas:DataEspecialistasService,public serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {    
        this.getEspecialistas();
  }

  getEspecialistas(){
    this.serviceDataEspecialistas.getEspecialistas<Especialistas>().subscribe(res=>{
      this.lista=res.especialistas;            
    });
  }

  resultado(lista:IEspecialista[]){
    this.lista=lista;    
  }

  reset(isReset:boolean){
    this.getEspecialistas();
  }

  toggleFiltros(){
    this.isVisible=!this.isVisible;
  }

  eventoSeleccionado(event:IEspecialista){
    this.especialistaAMostrar=event;
    this.serviceModalEventoService.openDialog();
  }
}
