import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isVisible: boolean = false;

  headerFixed: boolean = false;


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

    if (body > 1360) {
      if ((scroll > 0)) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    }else{
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
