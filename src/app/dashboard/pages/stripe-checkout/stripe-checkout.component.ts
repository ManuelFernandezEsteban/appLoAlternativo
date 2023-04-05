import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutService } from '../../../services/checkout.service';
import { Socket } from 'socket.io-client';
import { SocketServiceCheckoutService } from '../../../services/socket-service-checkout.service';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {

  loading:boolean=true;
  mensaje:string='Esperando la confirmación del pago'
  constructor(private route:ActivatedRoute,
              private router:Router,
              private checkoutServive:CheckoutService,
              private socketService:SocketServiceCheckoutService) { }

  ngOnInit(): void {
    
    const resultado = this.route.snapshot.queryParamMap.get('resultadoCompra');

    if (resultado==='success'){

      

      const sesion_compra = this.route.snapshot.queryParamMap.get('sesion_compra_eventoId');
     /* this.checkoutServive.esperarCompraCompletada(sesion_compra).subscribe(res=>{
        this.loading=false;
        this.mensaje='Compra finalizada con exito';
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 3000);
      });*/
      
    }else{
      this.loading=false;
      this.mensaje='Compra cancelada o fallida, redireccionando...';
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 3000);
      
    }

  }

}
