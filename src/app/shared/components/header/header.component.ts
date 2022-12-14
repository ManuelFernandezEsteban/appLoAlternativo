import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerFixed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event']) onScroll(){
   /* let alturaPagina = document.querySelector('body')?.clientHeight || 0;
    window.screenTop
    if((window.scrollY>400) ){
     
      this.headerFixed=true;
      
    }else{
      this.headerFixed=false
      
    }*/
  }

  scroll(){
    window.scrollTo(0,0);
  }

}
