import { Component, OnInit, HostListener } from '@angular/core';
import { RedSocialIcon } from '../../../interfaces/redSocialIcon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isVisible: boolean = false;

  headerFixed: boolean = false;
  instagram:RedSocialIcon={
    nombre:'',
    enlace:'https://www.instagram.com/loalternativo_/',
    icono:'../../../assets/images/icons-svg/instagram.svg'
  }
  facebook:RedSocialIcon={
    nombre:'',
    enlace:'https://www.facebook.com/100089059505165',
    icono:'../../../assets/images/icons-svg/facebook.svg'
  }
  youtube:RedSocialIcon={
    nombre:'',
    enlace:'https://www.youtube.com/channel/UCMzJ0PPoQhcKkNZvnyBc3gA',
    icono:'../../../assets/images/icons-svg/youtube.svg'
  }


  constructor() { }

  ngOnInit(): void {

  }
/*
  @HostListener('window:scroll', ['$event']) onScroll() {

    const header = document.querySelector('header')?.scrollHeight || 0;
    const body = document.querySelector('body')?.scrollHeight || 0;
    const scroll = window.scrollY;
    //const quedaDePagina = (body-header)-;
    console.log(window.scrollY, body, header);
    if ((scroll > 0) && (body-header>window.innerHeight)) {
      this.headerFixed = true;
    } else {
      this.headerFixed = false;
    }

  }
*/

  mostrarMenu() {
    this.isVisible = !this.isVisible;
  }
  scroll() {
    window.scrollTo(0, 0);
  }

}
