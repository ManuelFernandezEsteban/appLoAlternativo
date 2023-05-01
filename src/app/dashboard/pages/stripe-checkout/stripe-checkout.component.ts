import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketServiceCheckoutService } from '../../../services/socket-service-checkout.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit,OnDestroy {

  mensajesSuscription:Subscription;
  loading:boolean=true;
  mensaje:string='Esperando la confirmación del pago'
  constructor(private route:ActivatedRoute,
              private router:Router,
              //private checkoutService:CheckoutService,
              private socketService:SocketServiceCheckoutService) {

               }

  ngOnInit(): void {
    
    const resultado = this.route.snapshot.queryParamMap.get('resultadoCompra');
   
    if (resultado==='success'){

      const sesion_compra_evento = this.route.snapshot.queryParamMap.get('sesion_compra_eventoId');
 
      this.mensajesSuscription= this.socketService.listen('sesion_compra_finalizada')
      .pipe(
       filter((payload)=>payload===sesion_compra_evento) )
      .subscribe(res=>{
          console.log('resultado', res);
          this.loading=false;
          this.mensaje='Compra finalizada con exito';
          //this.comprobarSiSuscripcion(res);
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 3000);
      });

      
    }else{
      this.loading=false;
      this.mensaje='Compra cancelada o fallida, redireccionando...';
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 3000);
      
    }

  }

  comprobarSiSuscripcion(idSesionCompra:string){

  }

  ngOnDestroy(): void {
      this.mensajesSuscription.unsubscribe();
  }

}
