import { Component, Input, OnInit,ViewChild,AfterViewInit,ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { Evento } from '../../../interfaces/eventos';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @ViewChild('cajaEvento') cajaEvento!:ElementRef;

  @Output() onEvento = new EventEmitter<Evento>();

  @Input()
  evento!: Evento;

  constructor(private renderer:Renderer2) { }

  ngAfterViewInit(): void {
    let url = 'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url('+this.evento.imagen+')';
    
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background',url);
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-size','cover');
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-position','center');
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-repeat','no-repeat');
  }

 ngOnInit(): void {
    

  }

  onMasInfo(){
    
    this.onEvento.emit(this.evento);
  }



}
