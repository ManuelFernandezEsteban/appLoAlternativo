import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent implements OnInit {

  @Input()
  especialista!: EspecialistaClass;
  @ViewChild('cajaEspecialista') cajaEspecialista!: ElementRef;
  imagen:string='';
  @Output() onEspecialista = new EventEmitter<EspecialistaClass>();

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.imagen = '';
    if (this.especialista.imagen!=null){
      this.imagen=this.especialista.imagen;
    }else{
      this.imagen='../../assets/images/especialista_no_disponible.svg'
    }
  }

  ngAfterViewInit(): void {
/*
    let imagen = '';
    if (this.especialista.imagen!=null){
      imagen=this.especialista.imagen;
    }else{
      imagen='../../assets/images/especialista_no_disponible.svg'
    }   
    let url = 'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url('+imagen+')';
    
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background',url);
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-size','contain');
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-position','center');
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-repeat','no-repeat');*/
  }
  onMasInfo() {
    this.onEspecialista.emit(this.especialista);

  }

}
