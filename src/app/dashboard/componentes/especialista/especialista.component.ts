import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { IEspecialista } from 'src/app/interfaces/especialistas';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent implements OnInit {

  @Input()
  especialista!: IEspecialista;
  @ViewChild('cajaEspecialista') cajaEspecialista!: ElementRef;

  @Output() onEspecialista = new EventEmitter<IEspecialista>();

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    let imagen = '';
    if (this.especialista.imagen!=null){
      imagen=this.especialista.imagen;
    }else{
      imagen='../../assets/images/no_disponible.png'
    }   
    let url = 'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url('+imagen+')';
    
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background',url);
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-size','contain');
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-position','center');
    this.renderer.setStyle(this.cajaEspecialista.nativeElement,'background-repeat','no-repeat');
  }
  onMasInfo() {
    this.onEspecialista.emit(this.especialista);
  }

}
