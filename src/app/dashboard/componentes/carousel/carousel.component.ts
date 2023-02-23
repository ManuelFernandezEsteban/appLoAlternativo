import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { environment } from '../../../../environments/environment';
import { RespuestaEventos } from '../../../interfaces/eventos-respuesta.interface';
import { IEvento } from '../../../interfaces/eventos';

const especialistaAdmin = environment.especialistaAdmin;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @ViewChild('contenedor') contenedor: ElementRef;
  @ViewChild('indicators') indicators: ElementRef;
  interval: any;
  indiceSiguiente: number = 0;
  eventos: IEvento[];
  hayEventos:boolean=false;

  constructor(private renderer: Renderer2, private serviceEventos: EventosService) { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.serviceEventos.getEventos(especialistaAdmin)
      .subscribe((res: RespuestaEventos) => {

        this.eventos = res.eventos;
        if (this.eventos.length > 0) {
          this.hayEventos=true;
          //this.mover(1)
          this.interval = setInterval(() => {
            this.mover(1)
          }, 5000);
        }
      })



  }

  mover(paso: number) {

    this.indiceSiguiente = this.indiceSiguiente + paso;

    if (this.indicators.nativeElement.hasChildNodes()) {
      const listaIndicadores: NodeList = this.indicators.nativeElement.childNodes;

      if (this.indiceSiguiente >= listaIndicadores.length - 1) {
        this.indiceSiguiente = 0;
      } else if (this.indiceSiguiente < 0) {
        
          this.indiceSiguiente = listaIndicadores.length - 2;
      }
      for (let index = 0; index < listaIndicadores.length - 1; index++) {
        const element = listaIndicadores[index];
        this.renderer.removeClass(element, 'color-active');
        this.renderer.addClass(element, 'color-no-active');
      }
      this.renderer.addClass(listaIndicadores[this.indiceSiguiente], 'color-active');
      this.renderer.removeClass(listaIndicadores[this.indiceSiguiente], 'color-no-active');
    }

    if (this.contenedor.nativeElement.hasChildNodes()) {
      const listaTarjetas: NodeList = this.contenedor.nativeElement.childNodes;

      if (this.indiceSiguiente >= listaTarjetas.length - 1) {
        this.indiceSiguiente = 0;
      } else if (this.indiceSiguiente < 0) {
        this.indiceSiguiente = listaTarjetas.length - 2;
      }
      for (let index = 0; index < listaTarjetas.length - 1; index++) {
        const element = listaTarjetas[index];
        this.renderer.addClass(element, 'sr-only');
      }
      this.renderer.removeClass(listaTarjetas[this.indiceSiguiente], 'sr-only');
    }

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.mover(1)
    }, 2000);


  }


}
