import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { CheckoutSesion } from 'src/app/interfaces/checkoutsesion.interface';
import { CheckoutService } from 'src/app/services/checkout.service';
import { EspecialistasService } from 'src/app/services/especialistas.service';
import { SocketServiceCheckoutService } from 'src/app/services/socket-service-checkout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seleccion-plan',
  templateUrl: './seleccion-plan.component.html',
  styleUrls: ['./seleccion-plan.component.scss']
})
export class SeleccionPlanComponent  {
  
  compraIniciada:boolean=false;
  mensajesSuscription: any;
  

  constructor( private especialistaService:EspecialistasService,
               private checkoutService:CheckoutService,
              // private socketService:SocketServiceCheckoutService,
               private router:Router ){

  }
  

  
  seleccionPlan(plan:number){

    if (!this.especialistaService.especialistaInicial){
      this.router.navigateByUrl('auth/registro');
    }

    this.especialistaService.crearEspecialista(this.especialistaService.especialistaInicial)
      .subscribe(res=>{
       
        this.compraIniciada = true;
        this.checkoutService.startSubscriptionCheckoutSesion(plan,this.especialistaService.especialista.id)
          .subscribe(       
              (sesion:CheckoutSesion)=>{
                
                window.open(sesion.url,'blank');                
            },
            err=>{
              Swal.fire('Error',err.error.errors.errors[0].msg,'error');
              console.log(err)
            }
            )

      },(err)=>{
       // this.loading=false;
        Swal.fire('Error',err.error.errors.errors[0].msg,'error');    

      });

  }

 

}
