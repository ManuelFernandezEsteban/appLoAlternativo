import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible:boolean=false;

  headerFixed:boolean=false;
  

  constructor() { }

  ngOnInit(): void {

  }
/*
  @HostListener('window:scroll',['$event']) onScroll(){
    
    const header = 324;
    const body = document.querySelector('body')?.scrollHeight||0;
 
 
    console.log(window.scrollY,body,header);

    if ( window.scrollY>124 && ((body-124)>(body-window.scrollY+324))){
      this.headerFixed=true;
    }else{
      this.headerFixed=false;
    }
/*
    if (window.scrollY>window.scrollY-324-100 ){
      
    }else{
      this.headerFixed=false;
    }
*/
    
/*
  }


  mostrarMenu(){
    this.isVisible=!this.isVisible;
  }*/
  scroll(){
    window.scrollTo(0,0);
  }

}
