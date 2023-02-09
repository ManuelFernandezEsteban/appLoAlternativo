import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @ViewChild('contenedor') contenedor:ElementRef;
  @ViewChild('indicators') indicators:ElementRef;
  interval:any;
  indiceSiguiente:number=0;

  constructor(private renderer:Renderer2) { }

  ngOnDestroy(): void {
    clearInterval( this.interval );
  }

  ngOnInit(): void {

    this.interval= setInterval(() => {
      this.mover(1)
    }, 2000);

  }

  mover(paso:number){   
    
    this.indiceSiguiente=this.indiceSiguiente+paso;

    if (this.indicators.nativeElement.hasChildNodes()){
      const listaIndicadores = this.indicators.nativeElement.childNodes;
      if(this.indiceSiguiente>=listaIndicadores.length){
        this.indiceSiguiente=0;
      }else if (this.indiceSiguiente<0){
        this.indiceSiguiente=listaIndicadores.length-1;
      }
      
      listaIndicadores.forEach(element => {
        this.renderer.removeClass(element,'color-active');
        this.renderer.addClass(element,'color-no-active');
      });
      this.renderer.addClass(listaIndicadores[this.indiceSiguiente],'color-active');
      this.renderer.removeClass(listaIndicadores[this.indiceSiguiente],'color-no-active');
    }

    if (this.contenedor.nativeElement.hasChildNodes()){
      const listaTarjetas = this.contenedor.nativeElement.childNodes;
      if(this.indiceSiguiente>=listaTarjetas.length){
        this.indiceSiguiente=0;
      }else if (this.indiceSiguiente<0){
        this.indiceSiguiente=listaTarjetas.length-1;
      }
      
      listaTarjetas.forEach(element => {
        this.renderer.addClass(element,'sr-only');
      });
      this.renderer.removeClass(listaTarjetas[this.indiceSiguiente],'sr-only');
    }

    clearInterval( this.interval );
    this.interval= setInterval(() => {
      this.mover(1)
    }, 2000);
    
     
  }
 
  
}
