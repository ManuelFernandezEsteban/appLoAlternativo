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
    if(window.scrollY>200){
      this.headerFixed=true;
    }else{
      this.headerFixed=false
    }
  }

}
