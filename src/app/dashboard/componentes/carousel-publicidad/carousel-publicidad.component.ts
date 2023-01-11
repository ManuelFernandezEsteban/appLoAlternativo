import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sponsor, Sponsors } from '../../../interfaces/sponsors';

@Component({
  selector: 'app-carousel-publicidad',
  templateUrl: './carousel-publicidad.component.html',
  styleUrls: ['./carousel-publicidad.component.scss']
})
export class CarouselPublicidadComponent implements OnInit,OnDestroy {

  sponsors:Sponsor[]=[];
  sponsors2:Sponsor[]=[];
  sponsorsPpales:Sponsor[]=[];  
  sponsorCentral!:Sponsor;
  intervalSponsosrs:any;
  intervalSponsosrsPPal:any;
  claseSponsor:string='wrp-imagen-sponsor'
  claseSponsorPpal:string='wrp-imagen-sponsor-ppal'

  constructor(private renderer:Renderer2,private http:HttpClient) { }
  ngOnDestroy(): void {
    clearInterval(this.intervalSponsosrs)
    clearInterval(this.intervalSponsosrsPPal)
  }

  setImg(i:number):string{
    
    return `img${i+1}`;
  }

  ngOnInit(): void {

    this.http.get<Sponsors>('./../../assets/data/sponsors-principales.json').subscribe(res=>{
      this.sponsors=res.sponsors;
    })
   /*   let grupos: Sponsor[][]=[];      
      grupos[0]=this.sponsors.splice(0,4);
      grupos[1]=this.sponsors.splice(0,4);
      grupos[2]=this.sponsors.splice(0,4);        
      let i=0;   
      this.sponsors=grupos[i];
      this.sponsors2=grupos[i+1];
      this.intervalSponsosrs= setInterval(() => {
        if(i===2){
          i=0;
        }
        this.sponsors=grupos[i];
        this.sponsors2=grupos[i+1];
        i++;
      }, 4000);
    })
    this.http.get<Sponsors>('./../../assets/data/sponsors-principales.json').subscribe(res=>{
      this.sponsorsPpales=res.sponsors;
      let i=0;
      this.sponsorCentral=this.sponsorsPpales[i];
      this.intervalSponsosrsPPal = setInterval(() => {
        if (i===3){
          i=0;
        }
        this.sponsorCentral=this.sponsorsPpales[i];
        i++;
      }, 5000);
    })*/
    
  }






}
