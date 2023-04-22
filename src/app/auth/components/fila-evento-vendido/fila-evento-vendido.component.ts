import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../../models/evento.model';
import { ComprasEventosNoFinalizada } from 'src/app/interfaces/compras_eventos.interface';

@Component({
  selector: 'app-fila-evento-vendido',
  templateUrl: './fila-evento-vendido.component.html',
  styleUrls: ['./fila-evento-vendido.component.scss']
})
export class FilaEventoVendidoComponent implements OnInit {

  @Input()evento!:ComprasEventosNoFinalizada;

  constructor() { }

  ngOnInit(): void {
  }

}
