import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { EventosService } from '../../../services/eventos.service';
import Swal from 'sweetalert2';

import { FormEventoFiles } from '../../../interfaces/formularioEvento.interface';
import { UploadsService } from '../../../services/uploads.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss']
})
export class ModificarEventoComponent implements OnInit {
  
  mensaje: string = 'Evento modificado'; 
  tipo:string='Modificar' 

  constructor(public tablaEventosService: TablaEventosService,
    private route: Router,
    public dataServiceModal: ServiceModalEventoService,
    private eventosService: EventosService,
    private uploadService:UploadsService) {    
  }

  ngOnInit(): void {
  
  }

  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onModify(event:FormEventoFiles) {

    const evento = event.evento;    

    this.eventosService.actualizarEvento(evento)
      .subscribe(res => {

        if (event.files.get('image')){
          const formData = new FormData();
          formData.append("file",event.files.get('image'));
          this.uploadService.uploadEvento(formData,'eventoImagen',evento.id).subscribe(res=>{

          },err=>{
            console.log(err)
            Swal.fire('Error',err.error.msg,'error');
          })
        }
        if (event.files.get('pdf')){
          const formData = new FormData();
          formData.append("file",event.files.get('pdf'));
          this.uploadService.uploadEvento(formData,'eventoInfo',evento.id).subscribe(res=>{

          },err=>{
            console.log(err)
            Swal.fire('Error',err.error.msg,'error');
          })
        }
        this.desactivarSelected();
        this.dataServiceModal.openDialog();
      }, err => {
        console.log(err)
        Swal.fire('Error',err.error.msg,'error');
      });
  }

  cerrar() {
    this.dataServiceModal.closeDialog();
    this.route.navigate((['auth/principal/']))
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

}
