import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  hayEspecialistaSeleccionado:boolean=false;
  hayEventoSeleccionado:boolean=false;
  especialistas=[];
  eventos=[];
  seMuestranEventos:boolean=false;
  seMuestranEspecialistas:boolean=false;

  cargarEspecialistas(){
    this.seMuestranEspecialistas=true;
    this.seMuestranEventos=false;
  }

  cargarEventos(){
    this.seMuestranEspecialistas=false;
    this.seMuestranEventos=true;
  }

  subirFotoEspecialista(){
    console.log('foto especialista')
  }
  subirFotoEvento(){
    console.log('foto evento')
  }
}
