import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialistasService } from '../../../services/especialistas.service';
import { CheckoutService } from '../../../services/checkout.service';
import { CheckoutSesion } from 'src/app/interfaces/checkoutsesion.interface';
import { Subscription, filter } from 'rxjs';
import { SocketServiceCheckoutService } from 'src/app/services/socket-service-checkout.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  compraIniciada:boolean=false;
  mensajesSuscription:Subscription;
 // especialista!:Especialista;

  constructor(private especialistaService:EspecialistasService,
              private http:Router,
              private checkoutservice:CheckoutService,
              private socketService:SocketServiceCheckoutService  ) { }

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
            this.mensajesSuscription= this.socketService.listen('compra_suscripcion_finalizada')
            .pipe(
             filter((payload)=>payload===this.especialistaService.especialista.id) )
            .subscribe(res=>{
                console.log(res)
            });
        },
        err=>{
          console.log(err)
        }
        )
/*
       */
    
    
  }

}
