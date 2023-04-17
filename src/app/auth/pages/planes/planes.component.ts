import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Router } from '@angular/router';
import { EspecialistasService } from '../../../services/especialistas.service';
import { CheckoutService } from '../../../services/checkout.service';
import { environment } from 'src/environments/environment';
import { CheckoutSesion } from 'src/app/interfaces/checkoutsesion.interface';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  compraIniciada:boolean=false;

 // especialista!:Especialista;

  constructor(private especialistaService:EspecialistasService,
              private http:Router,
              private checkoutservice:CheckoutService) { }

  ngOnInit(): void {

    if (this.especialistaService.especialista.PlaneId===2){
      this.compraIniciada=true;
    }

  }

  onClickPlata(){
    this.especialistaService.cambiarPlan(1).subscribe(res=>{
      this.http.navigate(['auth/principal/datos']);
    })
    
    
  }

  onClickOro(){

    this.compraIniciada = true;
    this.checkoutservice.startSubscriptionCheckoutSesion(2,this.especialistaService.especialista.id)
      .subscribe(       
          (sesion:CheckoutSesion)=>{
            console.log("stripe sesion iniciada");
            window.open(sesion.url,'blank');
          //TODO pasar a cambiarPlan el token generado para checkearlo
         /* this.especialistaService.cambiarPlan(2).subscribe(res=>{
            this.http.navigate(['auth/principal/datos']);
          });*/
        },
        err=>{
          console.log(err)
        }
        )
/*
       */
    
    
  }

}
