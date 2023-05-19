import { Component, OnInit } from '@angular/core';
import { Especialista } from '../../models/especialista.model';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Status, Suscripcion } from 'src/app/interfaces/suscripcion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancelar-suscripcion',
  templateUrl: './cancelar-suscripcion.component.html',
  styleUrls: ['./cancelar-suscripcion.component.scss']
})
export class CancelarSuscripcionComponent implements OnInit {

  especialista:Especialista;
  plan:string='';
  suscripcion:Suscripcion;
  yaCancelada:boolean=false;

  constructor(private especialistaService:EspecialistasService ) { }

  ngOnInit(): void {

    this.especialista=this.especialistaService.especialista;
    this.especialistaService.getSubscription().subscribe(
      (suscripcion:Suscripcion)=>{
        console.log(suscripcion);
        this.suscripcion=suscripcion;
        this.plan=suscripcion.tipoSuscripcion.toString();
        if (suscripcion.status.toString() === 'canceled') {          
          this.yaCancelada=true;        
        }
    },err=>{
      console.log(err);
      Swal.fire("Cancelar suscripción","Error al cancelar la suscripción","error");
    })
  }

  cancelarSuscripcion(){

    this.especialistaService.cancelarSuscripcion().subscribe(res=>{
      this.yaCancelada=true;    
      //console.log(res)    
      Swal.fire("Cancelar suscripción","Suscripción cancelada con exito","success");
    },err=>{
      console.log(err);
      Swal.fire("Cancelar suscripción","Error al cancelar la suscripción","error");
    });
  }

  
}
