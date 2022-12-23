import { Component, Input, OnInit } from '@angular/core';
import { InfoModal } from 'src/app/interfaces/infoModal';

@Component({
  selector: 'app-info-modal-enlace',
  templateUrl: './info-modal-enlace.component.html',
  styleUrls: ['./info-modal-enlace.component.scss']
})
export class InfoModalEnlaceComponent implements OnInit {
  @Input()info!:InfoModal;
  constructor() { }

  ngOnInit(): void {
  }

}
