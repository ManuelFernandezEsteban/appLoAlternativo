import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { IEvento } from 'src/app/interfaces/eventos';
import { RespuestaEmail } from '../../../interfaces/respuestaEmail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @ViewChild('cajaEvento') cajaEvento!:ElementRef;

  @Output() onEvento = new EventEmitter<IEvento>();

  mostrarModalEmail:boolean=false;

  @Input()
  evento!: IEvento;

  constructor(private renderer:Renderer2,private router:Router) { }

  ngAfterViewInit(): void {
    let url = 'linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)),url('+this.evento.imagen+')';
    
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background',url);
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-size','cover');
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-position','center');
    this.renderer.setStyle(this.cajaEvento.nativeElement,'background-repeat','no-repeat');
  }

 ngOnInit(): void {
    

  }

  descargarContenido(){
    if (this.evento.id===0){
      this.mostrarModalEmail=true;
    }
  }
  cerrarModalEmail(event:RespuestaEmail){
    this.mostrarModalEmail=false;
    if (event.mail!=''){
      this.router.navigate(['revistas']);
    }
  }
  onMasInfo(){    
    this.onEvento.emit(this.evento);
  }

}
