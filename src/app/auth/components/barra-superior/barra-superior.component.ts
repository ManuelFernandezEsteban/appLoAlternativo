import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Router } from '@angular/router';
import { PlanesService } from '../../../services/planes.service';
import { Status, Suscripcion } from '../../../interfaces/suscripcion';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  plan:string='';
  fecha_fin_periodo:Date;
  suscripcion:Suscripcion;

  constructor ( private router:Router,
                public especialistaService:EspecialistasService,
                private planesService:PlanesService
                ) { }

  ngOnInit(): void {  
    //plan plata =>1
    if (this.especialistaService.especialista.PlaneId===1){
      this.plan='PLATA';
      return;
    }
    this.especialistaService.getSubscription().subscribe(
      (suscripcion:Suscripcion)=>{
        //console.log(suscripcion);
        this.suscripcion=suscripcion;
        if (this.suscripcion.status===Status.canceled){
          this.plan='PLATA';
          return;
        }
        this.plan=this.suscripcion.tipoSuscripcion.toString();
        this.fecha_fin_periodo= suscripcion.current_period_end_Date;
      
    },err=>{
      //console.log(err)
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
