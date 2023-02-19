import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { Sponsor, Sponsors } from 'src/app/interfaces/sponsors';
import { HttpClient } from '@angular/common/http';
import { SponsorsService } from '../../../services/sponsors.service';

@Component({
  selector: 'app-banner-publicidad',
  templateUrl: './banner-publicidad.component.html',
  styleUrls: ['./banner-publicidad.component.scss']
})
export class BannerPublicidadComponent implements OnInit, AfterViewInit, OnDestroy {

  sponsors: Sponsor[] = [];
 /* @ViewChild('img1') img1!: ElementRef;
  @ViewChild('img2') img2!: ElementRef;
  @ViewChild('img3') img3!: ElementRef;
  @ViewChild('img4') img4!: ElementRef;
  interval: any;
  timeout: number = 3000
  huecos: ElementRef[] = [];
  enPantalla: Sponsor[] = [];
  ultimo: number = 0;
  anterior!: Sponsor;
  nueva!: Sponsor;
  siguienteSponsor: number = 0;*/

  constructor(private http: HttpClient, private renderer: Renderer2,private sponsorsService:SponsorsService) {

  }
  ngOnDestroy(): void {
   // clearInterval(this.interval);
  }
  ngAfterViewInit() {
 //   this.huecos.push(this.img1);
 //   this.huecos.push(this.img2);
//    this.huecos.push(this.img3);
//    this.huecos.push(this.img4);
  }
  ngOnInit(): void {

    this.sponsorsService.getSponsors().subscribe(res=>{
      this.sponsors=res.sponsors;
      console.log()
    })

   /* this.http.get<Sponsors>('./../../assets/data/sponsors-principales.json').subscribe(res => {
      this.sponsors = res.sponsors;
   //   this.inicializarBanner();
     /* this.interval = setInterval(() => {
        this.cambiar()
      }, this.timeout);
    });*/

  }
/*
  cambiar() {

    this.anterior = this.enPantalla[0];
    this.asignar(this.nueva, 0);
    this.enPantalla.pop();
    this.enPantalla.unshift(this.nueva);
    for (let i = 1; i < this.huecos.length; i++) {
      this.asignar(this.anterior, i);
      this.enPantalla[i] = this.anterior;
      this.anterior = this.enPantalla[i + 1];
    }
    this.siguienteSponsor = this.siguienteSponsor + 1;
    if (this.siguienteSponsor >= this.sponsors.length) {
      this.siguienteSponsor = 0;

    }
    this.nueva = this.sponsors[this.siguienteSponsor];    
  }

  asignar(sponsor: Sponsor, pos: number) {

    this.renderer.setAttribute(this.huecos[pos].nativeElement, 'src', sponsor.imagen);

  }

  inicializarBanner() {
    this.nueva = this.sponsors[this.huecos.length + 1];
    this.siguienteSponsor = this.huecos.length + 1;

    for (let i = 0; i < this.huecos.length; i++) {
      const element = this.sponsors[i];
      this.asignar(element, i);
      this.ultimo++;
      this.enPantalla.push(element);
    }


  }*/

}
