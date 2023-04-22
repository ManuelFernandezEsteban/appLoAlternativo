import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Router } from '@angular/router';
import { PlanesService } from '../../../services/planes.service';
import { ResPlan } from '../../interfaces/plan.interface';
import { Observable, timestamp } from 'rxjs';
import { Suscripcion } from '../../../interfaces/suscripcion';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  plan:string='';
  fecha_fin_perido:Date;
  suscripcion:Suscripcion;


  constructor ( private router:Router,
                public especialistaService:EspecialistasService,
                private planesService:PlanesService
                ) { }

  ngOnInit(): void {  
    
    if (!this.especialistaService.especialista.token_pago){
      this.plan='PLATA';
      return;
    }
    this.especialistaService.getSubscription().subscribe(
      (suscripcion:Suscripcion)=>{
        console.log(suscripcion);
        this.suscripcion=suscripcion;
        this.fecha_fin_perido= suscripcion.current_period_end_Date;   
        const hoy =new Date(Date.now());
        if (this.suscripcion.current_period_end_Date<hoy){
          this.plan='PLATA';
        }else{
          this.plan=suscripcion.tipoSuscripcion.toString();
        }       
      
    },err=>{
      console.log(err)
    })
/*
    const fecha_fin = new Date(this.especialistaService.especialista.fecha_fin_suscripcion);

    this.planesService.getPlan(this.especialistaService.especialista.PlaneId)
      .subscribe((res:ResPlan)=>{
        if (fecha_fin> new Date(Date.now())){
          this._plan='ORO'
        }else{
          this._plan=res.plan.nombre;
        }                
      })     */
  }

  cerrarSesion(){
    this.especialistaService.logOut();
    this.router.navigateByUrl('/');

  }
}
