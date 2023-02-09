import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-plantilla',
  templateUrl: './boton-plantilla.component.html',
  styleUrls: ['./boton-plantilla.component.scss']
})
export class BotonPlantillaComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onClickBotonPlantilla(){
   
      this.route.navigate(['/newsletter']);
    
  
  }
}
