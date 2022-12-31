import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Evento } from 'src/app/interfaces/eventos';
import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.component.html',
  styleUrls: ['./eliminar-evento.component.scss']
})
export class EliminarEventoComponent implements OnInit {

  mensaje:string='¿Seguro qué desea borrar el evento?';

  hayPDF:boolean=false;
  eventoSeleccionado:Evento={
    id: 0,
    evento: '',
    fecha: '',
    precio: 0,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    online: false,
    organizador: '',
    descripcion: '',
    imagen: '',
    telefono: '',
    email: '',
    web: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    twich: '',
    pdf:''
    
  };
  fechaValue!:Date;
  formEliminarEvento=this.fb.group({
    evento:[''],
    fecha:['',],
    precio:['',],
    email:['',],
    web:[''],
    online:[false],
    direccion:[''],
    poblacion:[''],
    provincia:[''],
    cp:[''],
    telefono:[''],
    descripcion:[''],
    img:[''],
    pdf:['']
  })

  constructor(private tablaEventosService:TablaEventosService,
    private fb:FormBuilder,private route:Router,public serviceModal: ServiceModalEventoService) {
      
     }

  ngOnInit(): void {
    this.serviceModal.showDialog=false;
    this.eventoSeleccionado=this.tablaEventosService.getEventoSelected();
      this.setEvento();
  }

  public setEvento() {
    this.formEliminarEvento.get('evento')?.setValue( this.eventoSeleccionado.evento) ;   
    let arrayFecha = this.eventoSeleccionado.fecha.split('-');
    let fecha = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];   
    this.fechaValue= new Date (fecha);
    this.formEliminarEvento.get('online')?.setValue(this.eventoSeleccionado.online);        
    this.formEliminarEvento.get('fecha')?.setValue(fecha);        
    this.formEliminarEvento.get('precio')?.setValue( (this.eventoSeleccionado.precio).toString() );
    this.formEliminarEvento.get('email')?.setValue( this.eventoSeleccionado.email) ;
    this.formEliminarEvento.get('web')?.setValue( this.eventoSeleccionado.web) ;
    this.formEliminarEvento.get('direccion')?.setValue( this.eventoSeleccionado.direccion) ;
    this.formEliminarEvento.get('poblacion')?.setValue( this.eventoSeleccionado.localidad) ;
    this.formEliminarEvento.get('provincia')?.setValue( this.eventoSeleccionado.provincia) ;
    this.formEliminarEvento.get('cp')?.setValue( this.eventoSeleccionado.codigo_postal) ;
    this.formEliminarEvento.get('telefono')?.setValue( this.eventoSeleccionado.telefono) ;
    this.formEliminarEvento.get('descripcion')?.setValue( this.eventoSeleccionado.descripcion) ;
    
  /*  this.formModificarEvento.get('img')?.setValue( this.eventoSeleccionado.imagen) ;
    this.formModificarEvento.get('pdf')?.setValue( this.eventoSeleccionado.pdf) ;*/
  }

  ocultar():string{
    if (this.eventoSeleccionado.pdf){
      return '';
    }
    else{
      return 'ocultar';
    }
  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }
  onDelete(){
    //TODO Borrar el evento
    //TODO Mostrar modal para confirmacion

    this.serviceModal.openDialog();

    
    

  }

  cerrar(){
    
    this.formEliminarEvento.reset();
    this.serviceModal.closeDialog();
    this.route.navigate(['auth/principal/']);

  }

  onReset(){
    this.desactivarSelected();
    this.route.navigate(['auth/principal/']);
  }
}
