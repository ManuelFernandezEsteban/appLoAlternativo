import { Component, Input, OnInit } from '@angular/core';
import { InfoDireccionModal } from 'src/app/interfaces/infoDireccionModal';

@Component({
  selector: 'app-info-direccion-modal',
  templateUrl: './info-direccion-modal.component.html',
  styleUrls: ['./info-direccion-modal.component.scss']
})
export class InfoDireccionModalComponent implements OnInit {
  @Input()
  infoDireccion!: InfoDireccionModal;
  constructor() { }

  ngOnInit(): void {
  }

}
