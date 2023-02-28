import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RedSocialIcon } from 'src/app/interfaces/redSocialIcon';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent implements OnInit {

  @ViewChild('header') header!:ElementRef;
  @ViewChild('menuIcon') menuIcon!:ElementRef;
  @ViewChild('navLinks') navLinks!:ElementRef;

  instagram:RedSocialIcon={
    nombre:'',
    enlace:'https://www.instagram.com/nativostierra_/',
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

  menuIconClick(){

    this.navLinks.nativeElement.classList.toggle("menu-active");

    const navLinksInner = document.querySelectorAll(".nav-links li");
    navLinksInner.forEach((li) => {      
      li.classList.toggle('liMostrado');

    });
    this.menuIcon.nativeElement.classList.toggle("span-anime");
  }

  scroll() {
    this.navLinks.nativeElement.classList.toggle("menu-active");
    this.menuIcon.nativeElement.classList.toggle("span-anime");
    window.scrollTo(0, 0);
  }


}
