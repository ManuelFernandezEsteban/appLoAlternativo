import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketServiceCheckoutService } from '../../../services/socket-service-checkout.service';
import { Subscription, filter } from 'rxjs';
import { EspecialistasService } from 'src/app/services/especialistas.service';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit, OnDestroy {

  mensajesSuscription: Subscription;
  loading: boolean = true;
  mensaje: string = 'Esperando la confirmación del pago'
  constructor(private route: ActivatedRoute,
    private router: Router,
    private especialistaService:EspecialistasService,
    private socketService: SocketServiceCheckoutService) {

  }

  ngOnInit(): void {

    const resultado = this.route.snapshot.queryParamMap.get('resultadoCompra');

    if (resultado === 'success') {

      const sesion_compra_evento = this.route.snapshot.queryParamMap.get('sesion_compra_eventoId');

      this.mensajesSuscription = this.socketService.listen('compra_suscripcion_finalizada')
        .pipe(
          filter((payload) => payload === this.especialistaService.especialista.id))
        .subscribe(res => {
          
          this.loading = false;
          this.mensaje = 'Registro finalizado con exito';
          
          setTimeout(() => {
            this.router.navigateByUrl('/auth/login');
          }, 3000);
        });

      this.mensajesSuscription = this.socketService.listen('sesion_compra_finalizada')
        .pipe(
          filter((payload) => payload === sesion_compra_evento))
        .subscribe(res => {
          
          this.loading = false;
          this.mensaje = 'Compra finalizada con exito';
          
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 3000);
        });


    } else {
      this.loading = false;
      this.mensaje = 'Compra cancelada o fallida, redireccionando...';
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 3000);

    }

  }

  ngOnDestroy(): void {
    this.mensajesSuscription.unsubscribe();
  }

}
