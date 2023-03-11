import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';
import Swal from 'sweetalert2';
import { EspecialistasActividad } from '../../../interfaces/especialistas-actividad.interface';
import { EspecialistasService } from '../../../services/especialistas.service';

@Component({
  selector: 'app-filtro-especialistas',
  templateUrl: './filtro-especialistas.component.html',
  styleUrls: ['./filtro-especialistas.component.scss']
})
export class FiltroEspecialistasComponent implements OnInit {

  @Input() especialidad: number=0; 

  @Output() onBuscar = new EventEmitter<EspecialistasActividad>();
  @Output() onReset = new EventEmitter<boolean>();
  
  especialistas:EspecialistaClass[]=[];
  nombre:string='';
  provincia:string='';  

  constructor(public especialistasServices: EspecialistasService) { }

  ngOnInit(): void {    
   this.getLista();
  }
  
  reset(){
    this.nombre='';
    this.provincia='';
    this.onReset.emit(true);
  }

  getLista() {
    this.especialistas=[];
    this.especialistasServices.getEspecialistasActividad(this.especialidad)
      .subscribe((res: EspecialistasActividad) => {
        this.especialistas=res.especialistas;
        console.log(this.especialistas)
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });

  }

  filtro(lista:EspecialistaClass[],cadena:string):EspecialistaClass[]{
    return lista.filter((item)=>item.nombre.toLowerCase().includes(cadena))
  } 

  onClickBuscar() {    
    
    //let nombre = this.nombre.trim().toLowerCase();
    let provincia = this.provincia.trim().toLowerCase();      
    //si hay un valor
   /* if (nombre.length > 0) {
      // busca en el json si el nombre incluye (o empieza por) el valor
      this.especialistas =  this.filtro(this.especialistas,nombre)      
      
    }*/    
    if (provincia.length>0){
      this.especialistas = this.filtro(this.especialistas,provincia);
    }
    const resultado:EspecialistasActividad ={
      count: this.especialistas.length,
      especialistas: this.especialistas
    }

    this.onBuscar.emit(resultado);
    
    
  }








}
